const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize');


//Importing routes
const routes = require('./routes')


//Grabs environment variable that is inside './config/  and checks if it is production. If so, set it to a variable called isProduction.
const { environment } = require('./config');
const isProduction = environment === 'production';


//Initializing express application
const app = express();


//Middleware for logging information about requests and responses
app.use(morgan('dev'));

//Middleware for incoming cookies
app.use(cookieParser());
//Middleware for parsing JSON bodies of request with {'Content-Type': 'application/json'}
app.use(express.json());

// Security Middleware
if (!isProduction) {
	// enable cors only in development
	app.use(cors());
}
// helmet helps set a variety of headers to better secure your app
app.use(helmet({
	contentSecurityPolicy: false
}));

// Set the _csrf token and create req.csrfToken method
app.use(
	csurf({
		cookie: {
			secure: isProduction,
			sameSite: isProduction && "Lax",
			httpOnly: true,
		},
	})
);


//Connect all routes
app.use(routes);

app.use((_req, _res, next) => {
	const err = new Error("The requested resource couldn't be found.");
	err.title = "Resource Not Found";
	err.errors = ["The requested resource couldn't be found."];
	err.status = 404;
	next(err);
});

app.use((err, _req, _res, next) => {
	// check if error is a Sequelize error:
	if (err instanceof ValidationError) {
		err.errors = err.errors.map((e) => e.message);
		err.title = 'Validation error';
	}
	next(err);
});

app.use((err, _req, res, _next) => {
	res.status(err.status || 500);
	console.error(err);
	res.json({
		title: err.title || 'Server Error',
		message: err.message,
		errors: err.errors,
		stack: isProduction ? null : err.stack,
	});
});

module.exports = app;
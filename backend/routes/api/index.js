const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const drinksRouter = require('./drinks');
const reviewsRouter = require('./reviews');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/drinks', drinksRouter);

router.use('/reviews', reviewsRouter);

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;

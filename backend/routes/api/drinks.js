const express = require('express');
const asyncHandler = require('express-async-handler');
const { Drink } = require('../../db/models');


const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
	const allDrinks = await Drink.findAll();
	console.log(allDrinks);

	return res.json( allDrinks );
}));

router.post('/add', asyncHandler(async (req, res) => {
	const { name, description, imageUrl} = req.body
	const drink = await Drink.create({name, content: description, imageUrl});

	return res.json( drink )
}));




module.exports = router;
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Drink } = require('../../db/models');


const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
	const allDrinks = await Drink.findAll();
	console.log(allDrinks);

	return res.json({ allDrinks });
}));


module.exports = router;
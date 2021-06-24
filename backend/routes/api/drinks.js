const express = require('express');
const asyncHandler = require('express-async-handler');
const { Drink, DrinkReview } = require('../../db/models');



const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
	const allDrinks = await Drink.findAll({
		include: DrinkReview
	});
	console.log(allDrinks);

	return res.json( allDrinks );
}));

router.post('/add', asyncHandler(async (req, res) => {
	const { name, description, imageUrl} = req.body
	const drink = await Drink.create({name, content: description, imageUrl});

	return res.json( drink )
}));


router.delete('/:drinkId', asyncHandler(async (req, res) => {
	const id = parseInt(req.params.drinkId, 10)
	const drink = await Drink.findByPk(id);
	drink.destroy();
	return res.json( drink )
}));


router.put('/:drinkId', asyncHandler(async (req, res) => {
	const { id, name, description, imageUrl} = req.body
	const drink = await Drink.findByPk(id);
	const updatedDrink = await drink.update({
		name,
		content: description,
		imageUrl,
	})
	return res.json( updatedDrink )
}));


module.exports = router;
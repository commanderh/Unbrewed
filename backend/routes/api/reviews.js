
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Drink, DrinkReview } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
	res.send(req.body);
}));


module.exports = router;
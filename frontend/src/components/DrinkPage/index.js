import { useEffect, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux'
import { getAllDrinks } from '../../store/drinks.js';
import DrinkCard from './DrinkCard.js';
import './DrinkPage.css';

const DrinkPage = ({ allDrinks }) => {
	const dispatch = useDispatch();
	// const allDrinks = useSelector(state => Object.values(state.drinks))

	// useEffect(() => {
	// 	dispatch(getAllDrinks());
	// }, [dispatch])
	return (
		<div className="main__container">
			{allDrinks.map(drink => (
				<DrinkCard drink={drink}/>
			))}
		</div>
	);
};

export default DrinkPage;

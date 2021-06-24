import AddDrink from '../components/AddDrinkModal/AddDrink';
import { csrfFetch } from './csrf';

const LOAD = 'drinks/LOAD';
const ADD = 'drinks/ADD'

const load = list => ({
	type: LOAD,
	list,
});

const add = drink => ({
	type: ADD,
	drink
})

export const getAllDrinks = () => async dispatch => {
	const response = await csrfFetch(`/api/drinks`);

	if (response.ok) {
    const list = await response.json();
		// console.log(list);
    dispatch(load(list));
  }
};

export const addDrink = (drink) => async dispatch => {
	const response = await csrfFetch(`/api/drinks/add`, {
		method: "POST",
		body: JSON.stringify(drink)
	});

	if (response.ok) {
    const data = await response.json();
		// console.log(list);
    dispatch(add(data));
		return data;
  }
};

const initialState = {};
const drinksReducer = (state = initialState, action) => {
	switch(action.type) {
		case LOAD: {
			const allDrinks = {};
			// console.log("<<<<<<<<<<<<>>>>>>>>>>>>>>>>",action.list);
			action.list.forEach(drink => allDrinks[drink.id] = drink);

			return {
				...state,
				...allDrinks,
			}
		}
		case ADD: {
			return {...state, [action.drink.id]: action.drink }
		}
		default:
			return state;
	}
};

export default drinksReducer;
import AddDrink from '../components/AddDrinkModal/AddDrink';
import { csrfFetch } from './csrf';

const LOAD = 'drinks/LOAD';
const ADD = 'drinks/ADD'
const REMOVE = '/drinks/REMOVE'
const EDIT = '/drinks/EDIT'

const load = list => ({
	type: LOAD,
	list,
});

const add = drink => ({
	type: ADD,
	drink
})

const remove = drink => ({
	type: REMOVE,
	drink
})

const edit = drink => ({
	type: EDIT,
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

export const deleteDrink = (id) => async dispatch => {
	const response = await csrfFetch(`/api/drinks/${id}`, {
		method: "DELETE",
	});

	if (response.ok) {
    const data = await response.json();
		// console.log(list);
    dispatch(remove(data));
		return data;
  }
};

export const editDrink = (drink) => async dispatch => {
	console.log(">>>>>>><<<<<<<<<<<<",drink);
	const response = await csrfFetch(`/api/drinks/${drink.id}`, {
		method: "PUT",
		body: JSON.stringify(drink)
	});

	if (response.ok) {
    const data = await response.json();
		// console.log(list);
    dispatch(edit(data));
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
		case REMOVE: {
			const newState = {...state}
			delete newState[action.drink.id]
			return newState;
		}
		case EDIT: {
			return {...state, [action.drink.id]: action.drink }
		}
		default:
			return state;
	}
};

export default drinksReducer;
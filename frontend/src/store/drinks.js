import { csrfFetch } from './csrf';

const LOAD = 'drinks/LOAD';

const load = list => ({
	type: LOAD,
	list,
});

export const getAllDrinks = () => async dispatch => {
	const response = await csrfFetch(`/api/drinks`);

	if (response.ok) {
    const list = await response.json();
		// console.log(list);
    dispatch(load(list));
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
		default:
			return state;
	}
};

export default drinksReducer;
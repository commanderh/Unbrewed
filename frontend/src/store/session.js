import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

const initialState = { user: null };
//{type: SET_USER, user: user};
const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = {...state, user: action.user}
      return newState;
    case REMOVE_USER:
      newState = {...state, user:null}
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
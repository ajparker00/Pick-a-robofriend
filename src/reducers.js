import { CHANGE_SEARCHFIELD } from './constants.js';

//Initial state
const initialState = {
  searchField: '',
};

//Created a reducer
export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {
        searchField: action.payload,
      });
    default:
      return state;
  }
};

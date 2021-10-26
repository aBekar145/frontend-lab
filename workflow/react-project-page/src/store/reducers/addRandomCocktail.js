import initialState from '../initialState';

import { ADD_MANY_CUSTOMERS } from '../actions/actionTypes';

export const addRandomCocktail = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
      return {
        ...state,
        customers: [...state.customers, ...action.payload],
      };
    default:
      return state;
  }
};

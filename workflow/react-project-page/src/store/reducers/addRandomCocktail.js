import initialState from '../initialState';

import { ADD_RANDOM_COCKTAIL } from '../actions/actionTypes';

export const addRandomCocktail = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RANDOM_COCKTAIL:
      return { ...state, randomCocktail: action.payload.drinks[0] };
    default:
      return state;
  }
};

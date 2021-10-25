import { combineReducers } from 'redux';

import headerModalReducer from './headerModalReducer';
import mainModalReducer from './mainModalReducer';
import { addRandomCocktail } from './addRandomCocktail';

export default combineReducers({
  headerModalReducer,
  mainModalReducer,
  addRandomCocktail,
});

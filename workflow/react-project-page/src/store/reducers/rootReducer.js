import { combineReducers } from 'redux';

import headerModalReducer from './headerModalReducer';
import mainModalReducer from './mainModalReducer';

export default combineReducers({
  headerModalReducer,
  mainModalReducer,
});

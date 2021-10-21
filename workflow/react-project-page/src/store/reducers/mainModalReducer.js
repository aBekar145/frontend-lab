import initialState from '../initialState';

import { OPEN_MAIN_MODAL, CLOSE_MAIN_MODAL } from '../actions/actionTypes';

const mainModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MAIN_MODAL:
      return {
        isModalOpened: true,
      };

    case CLOSE_MAIN_MODAL:
      return {
        isModalOpened: false,
      };

    default:
      return state;
  }
};

export default mainModalReducer;
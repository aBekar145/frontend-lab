import initialState from '../initialState';

import { OPEN_MODAL, CLOSE_MODAL } from '../actions/actionTypes';

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpened: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpened: false,
      };

    default:
      return state;
  }
};

export default modalReducer;

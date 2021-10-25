import initialState from '../initialState';

import { OPEN_HEADER_MODAL, CLOSE_HEADER_MODAL } from '../actions/actionTypes';

const headerModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_HEADER_MODAL:
      return {
        ...state,
        isModalOpened: true,
      };

    case CLOSE_HEADER_MODAL:
      return {
        ...state,
        isModalOpened: false,
      };

    default:
      return state;
  }
};

export default headerModalReducer;

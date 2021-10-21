import initialState from '../initialState';

const headerModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        isModalOpened: true,
      };

    case 'CLOSE_MODAL':
      return {
        isModalOpened: false,
      };

    default:
      return state;
  }
};

export default headerModalReducer;

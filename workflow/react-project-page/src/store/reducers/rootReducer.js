import initialState from '../initialState';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ACTION_1:
    //   return {
    //     counter: state.counter + 1,
    //   };

    default:
      return state;
  }
};

export default rootReducer;

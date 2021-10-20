const initialState = {
  value: 1,
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_1:
      return {
        value: state.value + 1,
      };

    default:
      return state;
  }
};

const loaded = (state) => ({
  ...state,
  loaded: true,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "loaded":
      return loaded(state);
    default:
      return state;
  }
};

export default reducer;

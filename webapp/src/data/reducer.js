const loaded = (state, list) => ({
  ...state,
  loaded: true,
  list,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "loaded":
      return loaded(state, action.list);
    case "filtered":
      return loaded(state, action.list);
    default:
      return state;
  }
};

export default reducer;

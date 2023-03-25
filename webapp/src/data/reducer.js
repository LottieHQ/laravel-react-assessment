const loaded = (state, action) => ({
  ...state,
  loaded: true,
  list: action.list,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "loaded":
      return loaded(state, action);
    default:
      return state;
  }
};

export default reducer;

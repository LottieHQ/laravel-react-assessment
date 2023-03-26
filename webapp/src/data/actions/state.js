export const loaded = (list) => {
  return {
    type: "loaded",
    list: list.data,
  };
};

export const filtered = (list) => {
  return {
    type: "filtered",
    list: list,
  };
};

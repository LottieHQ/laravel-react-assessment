export const loaded = (list) => {
  return {
    type: "loaded",
    list: list.data,
  };
};

import axios from "../../axios";
import { loaded } from "./state";

export const getList = () => {
  return (dispatch) => {
    axios.get("/").then(({ data }) => {
      dispatch(loaded(data));
    });
  };
};

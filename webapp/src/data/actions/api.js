import axios from "../../axios";
import { loaded } from "./state";

export const getList = () => {
  console.log("TEST");
  return (dispatch) => {
    axios.get("/").then(({ data }) => {
      console.log("BOO");
      dispatch(loaded());
    });
  };
};

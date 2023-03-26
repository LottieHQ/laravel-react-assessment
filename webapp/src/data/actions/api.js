import { format } from "date-fns";

import axios from "data/axios";
import { loaded, filtered } from "./state";

const generateQueryString = (filters) => {
  let string = "/search?";
  if (filters.status) {
    const query = "status=" + filters.status + "&";
    string += query;
  }
  if (filters.name) {
    const query = "location_name=" + filters.name + "&";
    string += query;
  }
  if (filters.from) {
    const fromFormatted = format(new Date(filters.from), "y-MM-dd");
    const query = "from=" + fromFormatted + "&";
    string += query;
  }
  if (filters.until) {
    const untilFormatted = format(new Date(filters.until), "y-MM-dd");
    const query = "until=" + untilFormatted + "&";
    string += query;
  }
  return string;
};

export const getList = () => {
  return (dispatch) => {
    axios.get("/").then(({ data }) => {
      dispatch(loaded(data));
    });
  };
};

export const getFilteredList = (filters) => {
  return (dispatch) => {
    axios.get(generateQueryString(filters)).then(({ data }) => {
      console.log("DATA: ", data);
      dispatch(filtered(data));
    });
  };
};

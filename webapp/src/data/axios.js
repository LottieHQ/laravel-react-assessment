import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1/api/locations",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer b1a4b1a4b1a4-api-key-b1a4b1a4ab1a4${process.env.BEARER_TOKEN}`,
  },
});

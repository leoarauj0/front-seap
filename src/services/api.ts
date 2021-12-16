import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3004",
  // headers: {
  //   "Content-Type": "application/x-www-form-urlencoded"
  //   "Content-type": "application/json"
  // }
});

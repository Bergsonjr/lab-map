import axios from "axios";

const api = axios.create({
  baseURL: "https://jubilantoctolab.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, x-access-token",
  },
});

export default api;

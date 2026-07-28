import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/auth",
});

export const loginUser = (loginData) => {
  return API.post("/login", loginData);
};
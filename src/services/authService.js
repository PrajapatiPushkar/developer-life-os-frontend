import API from "./api";

export const loginUser = (loginData) => {
  return API.post("/auth/login", loginData);
};

export const registerUser = (registerData) => {
  return API.post("/auth/register", registerData);
};
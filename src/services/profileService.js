import API from "./api";

const BASE_URL = "/api/profile";

// Get Current User Profile
export const getProfile = () => {
  return API.get(BASE_URL);
};

// Update Current User Profile
export const updateProfile = (data) => {
  return API.put(BASE_URL, data);
};

export default API;
import API from "./api";

const BASE_URL = "/api/planner";

// Get All Planners
export const getAllPlanners = () => {
  return API.get(BASE_URL);
};

// Create Planner
export const createPlanner = (planner) => {
  return API.post(BASE_URL, planner);
};

// Update Planner
export const updatePlanner = (id, planner) => {
  return API.put(`${BASE_URL}/${id}`, planner);
};

// Delete Planner
export const deletePlanner = (id) => {
  return API.delete(`${BASE_URL}/${id}`);
};

// Toggle Planner Completed
export const togglePlanner = (id) => {
  return API.patch(`${BASE_URL}/${id}/toggle`);
};

// Get Today's Focus
export const getTodayFocus = () => {
  return API.get(`${BASE_URL}/focus`);
};

// Get Planner Statistics
export const getPlannerStatistics = () => {
  return API.get(`${BASE_URL}/statistics`);
};

export default API;
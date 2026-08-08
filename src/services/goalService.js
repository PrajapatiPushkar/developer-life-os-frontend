import API from "./api";

const GOAL_API = "/api/goals";

// ==========================
// GET ALL GOALS
// ==========================

export const getAllGoals = () => {
  return API.get(GOAL_API);
};


// ==========================
// CREATE GOAL
// ==========================

export const createGoal = (goal) => {
  return API.post(GOAL_API, goal);
};


// ==========================
// UPDATE GOAL
// ==========================

export const updateGoal = (id, goal) => {
  return API.put(`${GOAL_API}/${id}`, goal);
};


// ==========================
// DELETE GOAL
// ==========================

export const deleteGoal = (id) => {
  return API.delete(`${GOAL_API}/${id}`);
};


// ==========================
// GOAL STATISTICS
// ==========================

export const getGoalStatistics = () => {
  return API.get(`${GOAL_API}/statistics`);
};


export default API;
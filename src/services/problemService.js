import API from "./api";

const BASE_URL = "/api/problems";

// Get All Problems
export const getAllProblems = () => {
  return API.get(BASE_URL);
};

// Create Problem
export const createProblem = (problem) => {
  return API.post(BASE_URL, problem);
};

// Update Problem
export const updateProblem = (id, problem) => {
  return API.put(`${BASE_URL}/${id}`, problem);
};

// Delete Problem
export const deleteProblem = (id) => {
  return API.delete(`${BASE_URL}/${id}`);
};

// Get Problem Statistics
export const getStatistics = () => {
  return API.get(`${BASE_URL}/statistics`);
};

// Filter Problems
export const filterProblems = (
  title,
  difficulty,
  platform,
  topic,
  solved
) => {
  return API.get(`${BASE_URL}/filter`, {
    params: {
      title,
      difficulty,
      platform,
      topic,
      solved,
    },
  });
};
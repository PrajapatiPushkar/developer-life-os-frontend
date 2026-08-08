import API from "./api";

const BASE_URL = "/api/internships";

// Get All Internships
export const getAllInternships = () =>
  API.get(BASE_URL);

// Create Internship
export const createInternship = (internship) =>
  API.post(BASE_URL, internship);

// Update Internship
export const updateInternship = (id, internship) =>
  API.put(`${BASE_URL}/${id}`, internship);

// Delete Internship
export const deleteInternship = (id) =>
  API.delete(`${BASE_URL}/${id}`);

// Get Internship Statistics
export const getStatistics = () =>
  API.get(`${BASE_URL}/statistics`);
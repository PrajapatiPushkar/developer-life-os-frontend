import API from "./api";

const TASK_API = "/api/tasks";

// ==========================
// GET ALL TASKS
// ==========================

export const getAllTasks = (
  page = 0,
  size = 5,
  sortBy = "id",
  direction = "asc"
) => {
  return API.get(TASK_API, {
    params: {
      page,
      size,
      sort: `${sortBy},${direction}`,
    },
  });
};


// ==========================
// GET TASKS
// ==========================

export const getTasks = () => {
  return API.get(TASK_API);
};


// ==========================
// CREATE TASK
// ==========================

export const createTask = (taskData) => {
  return API.post(TASK_API, taskData);
};


// ==========================
// GET TASK BY ID
// ==========================

export const getTaskById = (id) => {
  return API.get(`${TASK_API}/${id}`);
};


// ==========================
// UPDATE TASK
// ==========================

export const updateTask = (id, taskData) => {
  return API.put(`${TASK_API}/${id}`, taskData);
};


// ==========================
// DELETE TASK
// ==========================

export const deleteTask = (id) => {
  return API.delete(`${TASK_API}/${id}`);
};


// ==========================
// SEARCH TASKS
// ==========================

export const searchTasks = (keyword) => {
  return API.get(`${TASK_API}/search`, {
    params: {
      keyword,
    },
  });
};


// ==========================
// FILTER TASKS
// ==========================

export const filterTasks = (
  priority,
  status
) => {

  const params = {};

  if (priority && priority !== "ALL") {
    params.priority = priority;
  }

  if (status && status !== "ALL") {
    params.status = status;
  }

  return API.get(`${TASK_API}/filter`, {
    params,
  });
};


// ==========================
// DASHBOARD SUMMARY
// ==========================

export const getDashboardSummary = () => {
  return API.get(`${TASK_API}/dashboard`);
};


// ==========================
// UPCOMING TASKS
// ==========================

export const getUpcomingTasks = () => {
  return API.get(`${TASK_API}/upcoming`);
};


export default API;
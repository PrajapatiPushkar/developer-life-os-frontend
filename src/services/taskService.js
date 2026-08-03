import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api/tasks"
});

// Automatically attach JWT token
API.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

// GET ALL TASKS
export const getAllTasks = (
    page = 0,
    size = 5,
    sortBy = "id",
    direction = "asc"
) => {

    return API.get(

        `?page=${page}&size=${size}&sort=${sortBy},${direction}`

    );

};

// CREATE TASK
export const createTask = (taskData) => {
    return API.post("", taskData);
};

// GET TASK BY ID
export const getTaskById = (id) => {
    return API.get(`/${id}`);
};

// UPDATE TASK
export const updateTask = (id, taskData) => {
    return API.put(`/${id}`, taskData);
};

// DELETE TASK
export const deleteTask = (id) => {
    return API.delete(`/${id}`);
};

// SEARCH TASKS
export const searchTasks = (keyword) => {
    return API.get(`/search?keyword=${keyword}`);
};

// FILTER TASKS
export const filterTasks = (priority, status) => {

    let url = "/filter?";

    if (priority && priority !== "ALL") {
        url += `priority=${priority}&`;
    }

    if (status && status !== "ALL") {
        url += `status=${status}&`;
    }

    return API.get(url);

};

// ==========================
// DASHBOARD SUMMARY
// ==========================
export const getDashboardSummary = () => {

    return API.get("/dashboard");

};

// Upcoming task
export const getUpcomingTasks = () => {

    return API.get("/upcoming");

};

export default API;
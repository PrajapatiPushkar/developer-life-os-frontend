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
export const getAllTasks = () => {
    return API.get("");
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
export const filterTasks = (priority) => {

    return API.get(`/filter?priority=${priority}`);

};

export default API;
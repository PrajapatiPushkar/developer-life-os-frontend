import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api/tasks",
});

// Automatically attach JWT Token in every request
API.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// ==========================
// GET ALL TASKS
// ==========================
export const getAllTasks = () => {
    return API.get("/");
};

// ==========================
// GET TASK BY ID
// ==========================
export const getTaskById = (id) => {
    return API.get(`/${id}`);
};

// ==========================
// CREATE TASK
// ==========================
export const createTask = (taskData) => {
    return API.post("/", taskData);
};

// ==========================
// UPDATE TASK
// ==========================
export const updateTask = (id, taskData) => {
    return API.put(`/${id}`, taskData);
};

// ==========================
// DELETE TASK
// ==========================
export const deleteTask = (id) => {
    return API.delete(`/${id}`);
};

export default API;
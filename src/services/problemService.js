import axios from "axios";

const API = axios.create({

    baseURL: "http://localhost:8080/api/problems"

});

API.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {

        config.headers.Authorization = `Bearer ${token}`;

    }

    return config;

});

export const getAllProblems = () => API.get("");

export const createProblem = (problem) => API.post("", problem);

export const updateProblem = (id, problem) =>
    API.put(`/${id}`, problem);

export const deleteProblem = (id) =>
    API.delete(`/${id}`);

export const getStatistics = () =>
    API.get("/statistics");
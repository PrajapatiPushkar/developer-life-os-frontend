import axios from "axios";

const API = axios.create({

    baseURL: "http://localhost:8080/api/internships"

});

API.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {

        config.headers.Authorization = `Bearer ${token}`;

    }

    return config;

});

export const getAllInternships = () => API.get("");

export const createInternship = (internship) =>
    API.post("", internship);

export const updateInternship = (id, internship) =>
    API.put(`/${id}`, internship);

export const deleteInternship = (id) =>
    API.delete(`/${id}`);

export const getStatistics = () =>

    API.get("/statistics");
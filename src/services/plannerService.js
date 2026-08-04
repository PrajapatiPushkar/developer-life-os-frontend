import axios from "axios";

const API = axios.create({

    baseURL: "http://localhost:8080/api/planner"

});

API.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {

        config.headers.Authorization = `Bearer ${token}`;

    }

    return config;

});

export const getAllPlanners = () => {

    return API.get("");

};

export const createPlanner = (planner) => {

    return API.post("", planner);

};

export const updatePlanner = (id, planner) => {

    return API.put(`/${id}`, planner);

};

export const deletePlanner = (id) => {

    return API.delete(`/${id}`);

};

export const togglePlanner = (id) => {

    return API.patch(`/${id}/toggle`);

};


export default API;
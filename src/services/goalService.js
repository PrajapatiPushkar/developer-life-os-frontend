import axios from "axios";

const API = axios.create({

    baseURL:"http://localhost:8080/api/goals"

});

API.interceptors.request.use((config)=>{

    const token = localStorage.getItem("token");

    if(token){

        config.headers.Authorization = `Bearer ${token}`;

    }

    return config;

});

export const getAllGoals=()=>API.get("");

export const createGoal=(goal)=>API.post("",goal);

export const updateGoal = (id, goal) => {
    return API.put(`/${id}`, goal);
};

export const deleteGoal = (id) => {
    return API.delete(`/${id}`);
};

export const getGoalStatistics = () =>

    API.get("/statistics");

export default API;
import axios from "axios";

const API = axios.create({

    baseURL: "http://localhost:8080/api/tasks"

});

export const getAllTasks = () => {

    const token = localStorage.getItem("token");

    return API.get("/", {

        headers: {

            Authorization: `Bearer ${token}`

        }

    });

};
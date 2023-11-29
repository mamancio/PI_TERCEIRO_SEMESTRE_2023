import axios from "axios";
import App from "../App";

export const api = axios.create({
    baseURL: "http://locahost:4000",
});

export const createSession = async (email, password) => {
    return api.post("/sessions", {email, password});
};
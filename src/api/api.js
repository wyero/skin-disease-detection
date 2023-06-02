import axios from "axios";

export const api = axios.create({
    baseURL: 'https://d2a6-103-138-49-99.ngrok-free.app'
})
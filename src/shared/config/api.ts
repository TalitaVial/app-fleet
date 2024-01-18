import axios from "axios";
import { getAuthTokenStorage } from "../storage/authTokenStorage";

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL
});

api.interceptors.request.use(
    async (config) => {
        const token = await getAuthTokenStorage();

        if(!config.headers.Authorization && token){
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }, (error) =>{
        return Promise.reject(error);
    }
);

export default api;
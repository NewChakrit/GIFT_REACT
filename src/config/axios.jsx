import axios from 'axios';
import { API_ENDPOINT_URL } from './env';
import * as localStorageService from '../services/localStorage';

axios.defaults.baseURL = API_ENDPOINT_URL;

axios.interceptors.request.use(
    (config) => {
        const token = localStorageService.getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default axios;

//completed

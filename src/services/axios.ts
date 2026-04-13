import useAuthStore from "@/store/authStore";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {

    console.log("interceptor ejecutado");
    const token = useAuthStore.getState().token;
    console.log('TOKEN ACTUAL:', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("CONFIG HEADERS:", config.headers);
    console.log("CONFIG:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      const logout = useAuthStore.getState().logout;
      // logout();
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
)


export default api;

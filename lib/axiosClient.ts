import axios from "axios";
import { useAuthStore } from "@/store/useAuthStore";
import { config } from "./config";

const axiosInstance = axios.create({
  baseURL: config.BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      useAuthStore.getState().logout();
    }

    if (err.response?.status === 403) {
      useAuthStore.getState().logout();
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;

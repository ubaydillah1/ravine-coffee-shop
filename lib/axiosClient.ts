import axios from "axios";
import { useAuthStore } from "@/store/useAuthStore";
import { config } from "./config";
import { useUIStore } from "@/store/useUiStore";

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
    console.log(err);
    const message =
      err.response?.data?.message || "Terjadi kesalahan pada server.";

    useUIStore.getState().setError(message);

    if (err.response?.status === 401 || err.response?.status === 403) {
      useAuthStore.getState().logout();
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;

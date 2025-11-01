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
    const { logout } = useAuthStore.getState();
    const { setError, setRedirectTo } = useUIStore.getState();

    const status = err.response?.status;
    const message = err.response?.data?.message || "Something went wrong";


    if (status === 401 && message.toLowerCase().includes("token")) {
      logout();
      setError("Your session has expired. Please login again.");
      setRedirectTo("/login");
      return Promise.reject(err);
    }

    if (status === 403) {
      setError("You don’t have permission to view this page.");
      setRedirectTo("/unauthorized");
      return Promise.reject(err);
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;

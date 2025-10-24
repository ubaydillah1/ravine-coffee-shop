import axiosInstance from "@/lib/axiosClient";
import { config } from "@/lib/config";
import { User } from "../types/user";
import { ApiResponse } from "@/types/api";

export const getMe = async () => {
  const res = await axiosInstance.get<ApiResponse<User>>(
    `${config.BASE_URL}/api/auth/me`
  );

  return res.data.result!;
};

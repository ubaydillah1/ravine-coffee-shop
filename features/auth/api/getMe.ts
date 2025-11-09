import axiosInstance from "@/lib/axiosClient";
import { User } from "../types/user";
import { ApiResponse } from "@/types/api";

export const getMe = async () => {
  const res = await axiosInstance.get<ApiResponse<User>>(`/api/auth/me`);

  return res.data.result!;
};

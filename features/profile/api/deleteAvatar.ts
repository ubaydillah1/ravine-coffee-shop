import { User } from "@/features/auth/types/user";
import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

export const deleteAvatar = async () => {
  const res = await axiosInstance.delete<ApiResponse<User>>(
    `/api/profile/avatar`
  );

  return res.data.result!;
};

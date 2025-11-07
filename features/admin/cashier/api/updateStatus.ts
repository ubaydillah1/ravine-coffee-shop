import axiosInstance from "@/lib/axiosClient";
import { UserStatus } from "../components/ChangeStatusAction";
import { ApiResponse } from "@/types/api";

export const updateStatus = async ({
  id,
  status,
}: {
  id: string;
  status: UserStatus;
}) => {
  console.log(id, status);
  const res = await axiosInstance.patch<ApiResponse>(`/api/admin/users/${id}`, {
    status,
  });

  return res.data.message;
};

import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

export const deleteCashier = async ({ cashierId }: { cashierId: string }) => {
  const res = await axiosInstance.delete<ApiResponse>(
    "/api/admin/users/" + cashierId
  );

  return res.data.message;
};

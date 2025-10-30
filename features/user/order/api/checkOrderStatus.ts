import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

export type CheckOrderStatusResponse = {
  orderStatus: "DRAFT" | "COMPLETED" | "INPROGRESS" | "OPENBILL" | "CANCELED";
};

export const checkOrderStatus = async (orderId: string) => {
  const res = await axiosInstance.get<ApiResponse<CheckOrderStatusResponse>>(
    `/api/orders/${orderId}`
  );

  return res.data.result!;
};

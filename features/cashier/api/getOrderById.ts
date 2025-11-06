import { OrderDetails } from "@/features/user/types";
import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

export const getOrderById = async (orderId: string) => {
  const res = await axiosInstance.get<ApiResponse<OrderDetails>>(
    `/api/cashier/orders/${orderId}`
  );

  return res.data.result!;
};

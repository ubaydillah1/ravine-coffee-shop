import axiosInstance from "@/lib/axiosClient";
import { OrderCreateResponseData, OrderPayload } from "../../types";
import { ApiResponse } from "@/types/api";

export const createOrder = async (data: OrderPayload) => {
  const res = await axiosInstance.post<ApiResponse<OrderCreateResponseData>>(
    "/api/orders",
    data
  );

  return res.data.result!;
};

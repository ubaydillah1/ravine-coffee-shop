import axiosInstance from "@/lib/axiosClient";
import { ApiResponse, infiniteScrollParams } from "@/types/api";
import { OrderStatus } from "@/types/order";

export interface GetOrdersParams extends infiniteScrollParams {
  status?: OrderStatus;
  orderDate?: string;
}

export const getOrders = async (params: GetOrdersParams) => {
  const res = await axiosInstance.get<ApiResponse>(`/api/cashier/orders`, {
    params: {
      ...params,
    },
  });

  return res.data.result!;
};

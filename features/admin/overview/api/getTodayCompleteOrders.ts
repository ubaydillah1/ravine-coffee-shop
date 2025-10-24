import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

export type TodayCompletedOrdersPayload = {
  id: string;
  name: string;
  qty: number;
  image: string | null;
  price: number;
};

export const getTodayCompletedOrders = async () => {
  const res = await axiosInstance.get<
    ApiResponse<TodayCompletedOrdersPayload[]>
  >(`/api/admin/overview/order-today`);
  return res.data.result!;
};

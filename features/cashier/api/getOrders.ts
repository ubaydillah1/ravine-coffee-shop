import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";
import { GetOrdersParams, GetOrdersResponse } from "../types";

export const getOrders = async (params: GetOrdersParams) => {
  const res = await axiosInstance.get<ApiResponse<GetOrdersResponse>>(
    `/api/cashier/orders`,
    {
      params: {
        ...params,
      },
    }
  );

  return res.data.result!;
};

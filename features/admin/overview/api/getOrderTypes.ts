import axiosInstance from "@/lib/axiosClient";

import { ApiResponse } from "@/types/api";
import { Period } from "./getOverview";

type OrderType = "DINE_IN" | "TAKE_AWAY";
export type GetOrderTypesPayload = {
  type: OrderType;
  count: number;
  percentage: number;
};

export const getOrderTypes = async (period: Period) => {
  const res = await axiosInstance.get<ApiResponse<GetOrderTypesPayload[]>>(
    "/api/admin/overview/order-types",
    {
      params: {
        period,
      },
    }
  );
  return res.data.result!;
};

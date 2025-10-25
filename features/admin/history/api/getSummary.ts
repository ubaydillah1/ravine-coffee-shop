import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

export interface GetSummaryPayload {
  totalOrders: number;
  totalCompletedOrders: number;
  totalCanceledOrders: number;
  inProgressOrders: number;
  averageExpenses?: number;
  averageRevenue?: number;
}

export const getSummary = async (): Promise<GetSummaryPayload> => {
  const res = await axiosInstance.get<ApiResponse<GetSummaryPayload>>(
    "/api/admin/history/summary"
  );

  return res.data.result!;
};

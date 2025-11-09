import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

export type Period = "today" | "this-week" | "this-month";

export type OverviewPayload = {
  totalRevenue: number;
  totalOrders: number;
  averageExpenses: number;
  averageRevenue: number;
  growth: {
    totalRevenue: number;
    totalOrders: number;
    averageExpenses: number;
    averageRevenue: number;
  };
};

export const getOverview = async (period: Period) => {
  const res = await axiosInstance.get<ApiResponse<OverviewPayload>>(
    `/api/admin/overview`,
    {
      params: {
        period,
      },
    }
  );
  return res.data.result!;
};

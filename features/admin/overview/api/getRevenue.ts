import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

export type GetRevenuePayload = {
  label: string;
  current: number;
  last: number;
};

export type RevenuePeriod = "weekly" | "monthly" | "annual";

export const getRevenue = async (period: RevenuePeriod) => {
  const res = await axiosInstance.get<ApiResponse<GetRevenuePayload[]>>(
    "/api/admin/overview/revenue-chart",
    {
      params: {
        period,
      },
    }
  );
  return res.data.result!;
};

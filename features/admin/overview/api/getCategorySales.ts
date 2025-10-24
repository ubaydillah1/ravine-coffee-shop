import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";
import { Period } from "./getOverview";

export type GetCategorySalesPayload = {
  category: string;
  total: number;
};

export const getCategorySales = async (period: Period) => {
  const res = await axiosInstance.get<ApiResponse<GetCategorySalesPayload[]>>(
    "/api/admin/overview/category-sales",
    {
      params: {
        period,
      },
    }
  );
  return res.data.result!;
};

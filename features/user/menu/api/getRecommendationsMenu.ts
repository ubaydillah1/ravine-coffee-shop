import { Product } from "@/features/admin/menu-menagement/types";
import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

export const getRecommendationsMenu = async () => {
  const res = await axiosInstance.get<ApiResponse<Product[]>>(
    "/api/products/recommendations"
  );
  return res.data.result!;
};

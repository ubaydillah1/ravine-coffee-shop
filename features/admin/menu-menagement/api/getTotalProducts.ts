import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

export const getTotalProductsQueryKey = () => ["totalProducts"];

export const getTotalProducts = async () => {
  const res = await axiosInstance.get<ApiResponse>(`/api/admin/products/count`);

  return res.data.result!;
};

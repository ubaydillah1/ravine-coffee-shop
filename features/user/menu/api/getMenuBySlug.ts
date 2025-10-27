import { Product } from "@/features/admin/menu-menagement/types";
import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

export const getMenuBySlug = async (slug: string) => {
  const res = await axiosInstance.get<ApiResponse<Product>>(
    `/api/products/${slug}`
  );

  return res.data.result!;
};

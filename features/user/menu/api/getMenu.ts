import {
  GetProductsParams,
  ProductPayload,
} from "@/features/admin/menu-menagement/types";
import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

export const getMenu = async ({
  limit,
  category,
  cursor,
}: GetProductsParams) => {
  const res = await axiosInstance.get<ApiResponse<ProductPayload>>(
    "/api/products",
    {
      params: {
        limit,
        category,
        cursor,
      },
    }
  );

  return res.data.result!;
};

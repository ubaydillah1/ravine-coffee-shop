import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";
import { GetProductsParams, ProductPayload } from "../types";

export const getProducts = async ({
  limit,
  category,
  cursor,
}: GetProductsParams) => {
  const res = await axiosInstance.get<ApiResponse<ProductPayload>>(
    "/api/admin/products",
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

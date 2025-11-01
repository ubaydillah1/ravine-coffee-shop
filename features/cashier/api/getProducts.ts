import { Category } from "@/features/admin/menu-menagement/types";
import axiosInstance from "@/lib/axiosClient";
import { ApiResponse, infiniteScrollParams } from "@/types/api";

export type Product = {
  id: string;
  name: string;
  image: string;
  category: string;
  isAvailable: boolean;
  price: string;
  description: string;
  slug: string;
};

export type Productresponse = {
  products: Product[];
  nextCursor: string | null;
};

export interface GetProductsParams extends infiniteScrollParams {
  category: Category;
  search?: string;
}

export const getProducts = async ({
  limit,
  cursor,
  category,
  search,
}: GetProductsParams) => {
  const res = await axiosInstance.get<ApiResponse<Productresponse>>(
    `/api/cashier/products`,
    {
      params: {
        category,
        limit,
        cursor,
        search,
      },
    }
  );

  return res.data.result!;
};

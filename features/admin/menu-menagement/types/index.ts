import { infiniteScrollParams } from "@/types/api";

export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  isAvailable: boolean;
  price: string;
  description: string;
}

export interface ProductPayload {
  products: Product[];
  nextCursor: string | null;
}

export type Category = "coffee" | "milk" | "tea" | "food" | "snack" | "bundle";

export interface GetProductsParams extends infiniteScrollParams {
  category?: Category;
}

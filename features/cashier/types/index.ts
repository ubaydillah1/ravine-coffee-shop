import { infiniteScrollParams } from "@/types/api";
import { OrderStatus } from "@/types/order";

export interface GetOrdersParams extends infiniteScrollParams {
  status?: OrderStatus;
  orderDate?: string;
  search?: string;
}

export type Order = {
  id: string;
  createdAt: string;
  totalAmount: string;
  tableNumber: string | null;
  orderStatus: OrderStatus;
  Customer: {
    fullName: string;
  } | null;
};

export type GetOrdersResponse = {
  items: Order[];
  nextCursor: string | null;
};

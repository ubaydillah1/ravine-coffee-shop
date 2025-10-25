import { infiniteScrollParams } from "@/types/api";
import { OrderStatus } from "@/types/order";

export interface GetHistoriesPayload {
  history: HistoryItem[];
  nextCursor: string | null;
}

export interface HistoryItem {
  orderStatus: "DRAFT" | "COMPLETED" | "IN_PROGRESS" | "CANCELED" | string;
  id: string;
  Order: OrderDetail;
}

export interface OrderDetail {
  id: string;
  tableNumber: string;
  totalAmount: string;
  Customer: CustomerInfo;
  createdAt: string;
}

export interface CustomerInfo {
  fullName: string;
}

export interface GetHistoriesParams extends infiniteScrollParams {
  date?: string;
  status?: OrderStatus;
}

import { GetOrdersParams } from "../api/getOrders";

export const getOrdersQueryKey = (params: GetOrdersParams) => [
  "cashier-orders",
  params,
];

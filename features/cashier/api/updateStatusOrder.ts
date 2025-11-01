import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";
import { OrderStatus } from "@/types/order";

export const updateStatusOrder = async ({
  id,
  status,
}: {
  id: string;
  status: OrderStatus;
}) => {
  const res = await axiosInstance.patch<ApiResponse>(
    `/api/cashier/orders/${id}`,
    {
      status,
    }
  );

  return res.data.message;
};

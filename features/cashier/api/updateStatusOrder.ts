import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";
import { OrderStatus } from "@/types/order";

export type UpdateStatusOrderParams = {
  id: string;
  status: OrderStatus;
};

export const updateStatusOrder = async ({
  id,
  status,
}: UpdateStatusOrderParams) => {
  const res = await axiosInstance.patch<ApiResponse>(
    `/api/cashier/orders/${id}`,
    {
      status,
    }
  );

  return res.data.message;
};

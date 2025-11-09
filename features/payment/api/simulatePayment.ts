import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

export const simulatePayment = async (midtransOrderId: string) => {
  const res = await axiosInstance.get<ApiResponse>(
    `/api/payment/simulate-payment/${midtransOrderId}`
  );

  return res.data.message;
};

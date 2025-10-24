import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";
import { Period } from "./getOverview";

type PaymentMethod = "CASH" | "QRIS";

export type GetPaymentMethodsPayload = {
  method: PaymentMethod;
  count: number;
  percentage: number;
};

export const getPaymentMethods = async (period: Period) => {
  const res = await axiosInstance.get<ApiResponse<GetPaymentMethodsPayload[]>>(
    "/api/admin/overview/payment-methods",
    {
      params: {
        period,
      },
    }
  );
  return res.data.result!;
};

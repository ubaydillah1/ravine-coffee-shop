import axiosInstance from "@/lib/axiosClient";
import { ApiResponse, infiniteScrollParams } from "@/types/api";

export type Cashier = {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string | null;
  avatar: string | null;
  dateOfBirth: string | null;
  status: "ACTIVE" | "INACTIVE" | string;
  city: string | null;
  role: "CASHIER" | "ADMIN" | string;
  createdAt: string;
  updatedAt: string;
};

export type GetCashiersResponse = {
  cashier: Cashier[];
  nextCursor: string | null;
};

export const getCashiers = async ({ limit, cursor }: infiniteScrollParams) => {
  const res = await axiosInstance.get<ApiResponse<GetCashiersResponse>>(
    `/api/admin/users`,
    {
      params: {
        limit,
        cursor,
      },
    }
  );

  return res.data.result!;
};

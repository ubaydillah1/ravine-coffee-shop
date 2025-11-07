import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

export type CreateCashierParams = {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  city: string;
  dateOfBirth?: Date;
  avatar: File;
};

export const createCashier = async (data: CreateCashierParams) => {
  const formData = new FormData();

  if (data.avatar) formData.append("avatar", data.avatar);
  formData.append("fullName", data.fullName);
  formData.append("phoneNumber", data.phoneNumber);
  formData.append("city", data.city);
  formData.append("email", data.email);
  formData.append("password", data.password);
  if (data.dateOfBirth) formData.append("dateOfBirth", data.dateOfBirth.toISOString());

  const res = await axiosInstance.post<ApiResponse>(
    `/api/admin/users`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data.message;
};

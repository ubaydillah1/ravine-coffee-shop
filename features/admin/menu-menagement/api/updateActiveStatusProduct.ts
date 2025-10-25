import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

export type UpdateActiveStatusParams = {
  id: string;
  active: boolean;
};

export const updateActiveStatusProduct = async ({
  id,
  active,
}: UpdateActiveStatusParams) => {
  const res = await axiosInstance.patch<ApiResponse>(
    `/api/admin/products/status/${id}`,
    {
      isAvailable: active,
    }
  );

  return res.data.message;
};

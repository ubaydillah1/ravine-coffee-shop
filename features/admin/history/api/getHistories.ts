import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";
import { GetHistoriesParams, GetHistoriesPayload } from "../types";

export const getHistories = async ({
  cursor,
  limit,
  date,
  status,
}: GetHistoriesParams) => {
  const res = await axiosInstance.get<ApiResponse<GetHistoriesPayload>>(
    "/api/admin/history",
    {
      params: {
        cursor,
        limit,
        status,
        date,
      },
    }
  );
  return res.data.result!;
};

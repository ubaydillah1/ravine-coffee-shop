import axiosInstance from "@/lib/axiosClient";
import { config } from "@/lib/config";
import { ApiResponse } from "@/types/api";
import { User } from "../types/user";

type LoginResponse = {
  token: string;
  user: User;
};

type LoginPayload = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginPayload) => {
  const res = await axiosInstance.post<ApiResponse<LoginResponse>>(
    `${config.BASE_URL}/api/auth/login`,
    {
      email,
      password,
    }
  );
  return res.data.result!;
};

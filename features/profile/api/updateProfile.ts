import { SettingsFormValues } from "@/app/admin/settings/page";
import { User } from "@/features/auth/types/user";
import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

export const updateProfile = async (data: SettingsFormValues) => {
  const formData = new FormData();

  formData.append("fullName", data.name);
  formData.append("phoneNumber", data.phone);
  formData.append("city", data.city);
  if (data.dateOfBirth)
    formData.append("dateOfBirth", data.dateOfBirth.toISOString());
  if (data.image) formData.append("avatar", data.image!);

  const res = await axiosInstance.put<ApiResponse<User>>(
    `/api/profile`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data.result!;
};

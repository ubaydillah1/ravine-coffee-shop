import axiosInstance from "@/lib/axiosClient";
import { ApiResponse } from "@/types/api";

type CreateProductInput = {
  name: string;
  description: string;
  price: string;
  category: string;
  image: File;
};

export const createProduct = async (data: CreateProductInput) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("price", data.price);
  formData.append("category", data.category);
  formData.append("image", data.image);

  const res = await axiosInstance.post<ApiResponse>(
    `/api/admin/products`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data.message;
};

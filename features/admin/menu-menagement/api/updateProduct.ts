import axiosInstance from "@/lib/axiosClient";
import { ProductEditPayload } from "../types";

export const updateProduct = async ({
  id,
  product,
}: {
  id: string;
  product: ProductEditPayload;
}) => {
  const formData = new FormData();

  formData.append("name", product.name);
  formData.append("description", product.description);
  formData.append("price", product.price);
  formData.append("category", product.category);

  if (product.image instanceof File) {
    formData.append("image", product.image);
  }

  const res = await axiosInstance.put(`/api/admin/products/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data.message;
};

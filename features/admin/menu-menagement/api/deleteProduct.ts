import axiosInstance from "@/lib/axiosClient";

export const deleteProduct = async ({ id }: { id: string }) => {
  return await axiosInstance.delete(`/api/admin/products/${id}`);
};

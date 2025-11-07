"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ModalProps } from "@/features/cashier/types/modal";
import { Upload, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toastError, toastSuccess } from "@/components/ui/sonner";
import Trash from "@/public/assets/icons/trash.svg";
import { Category } from "@/features/admin/menu-menagement/types";
import { useUpdateProduct } from "@/features/admin/menu-menagement/hooks/useUpdateProduct";
import { useDeleteProduct } from "@/features/admin/menu-menagement/hooks/useDeleteProduct";
import { Product } from "@/features/cashier/api/getProducts";

type FormValues = {
  name: string;
  price: string;
  description?: string;
  category: Category;
  image?: File | null;
};

interface EditProductOverlayProps extends ModalProps {
  product: Product;
}

const EditProductOverlay = ({
  openModal,
  closeModal,
  product,
}: EditProductOverlayProps) => {
  const [preview, setPreview] = useState<string | null>(product.image ?? null);
  const { mutate, isPending } = useUpdateProduct({});
  const { mutate: mutateDelete } = useDeleteProduct({});

  const { register, handleSubmit, watch, setValue, reset } =
    useForm<FormValues>();

  useEffect(() => {
    reset({
      name: product.name,
      price: String(product.price),
      description: product.description ?? "",
      category: product.category.toLowerCase() as Category,
      image: null,
    });
    setPreview(product.image ?? null);
  }, [product, reset]);

  watch("image");
  const category = watch("category");

  const onSubmit = async (data: FormValues) => {
    const rawPrice = data.price.replace(/\D/g, "");

    const file = data.image instanceof File ? data.image : undefined;

    mutate(
      {
        id: product.id,
        product: {
          ...product,
          name: data.name,
          price: rawPrice,
          category: data.category.toUpperCase(),
          description: data.description ?? product.description,
          image: file,
        },
      },
      {
        onSuccess: () => {
          toastSuccess("Product updated");
          closeModal();
        },
        onError: () => toastError("Failed to update product"),
      }
    );
  };

  const handleDeleteClick = () => {
    closeModal();

    mutateDelete(
      { id: product.id },
      {
        onSuccess: () => {
          toastSuccess("Product deleted");
        },
        onError: () => {
          toastError("Failed to delete, item restored");
        },
      }
    );
  };

  const handleImage = (file: File | null) => {
    setValue("image", file);
    setPreview(file ? URL.createObjectURL(file) : product.image ?? null);
  };

  return (
    <Dialog open={openModal} onOpenChange={closeModal}>
      <DialogContent
        className="bg-white p-0 flex flex-col outline-0 border-0 overflow-hidden w-[95%] sm:min-w-[490px] rounded-2xl shadow-lg gap-[0]!"
        showCloseButton={true}
      >
        <DialogHeader className="p-0 m-0!">
          <DialogTitle className="bg-neutral-100 text-center py-[12px] font-semibold text-lg m-0">
            Edit Product
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-[24px] w-full flex flex-col gap-6"
        >
          <div className="flex justify-center">
            <label
              htmlFor="product-image"
              className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-neutral-50 transition"
            >
              {preview ? (
                <Image
                  src={preview}
                  alt="preview"
                  width={96}
                  height={96}
                  className="rounded-full object-contain w-24 h-24"
                />
              ) : (
                <Upload className="text-gray-400 w-6 h-6" />
              )}
              <input
                id="product-image"
                type="file"
                accept="image/*"
                onChange={(e) => handleImage(e.target.files?.[0] || null)}
                className="hidden"
              />
            </label>
          </div>

          {/* CATEGORY */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 b2-b">Category</label>
            <Select
              value={category}
              onValueChange={(value: Category) => setValue("category", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {["coffee", "tea", "milk", "food", "snack", "bundle"].map(
                  (c) => (
                    <SelectItem key={c} value={c}>
                      {c.charAt(0).toUpperCase() + c.slice(1)}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>

          {/* NAME */}
          <Input
            placeholder="Enter product name"
            {...register("name", { required: true })}
          />

          {/* PRICE */}
          <Input
            type="text"
            placeholder="Enter price"
            {...register("price", { required: true })}
            onChange={(e) => {
              const raw = e.target.value.replace(/\D/g, "");
              const formatted = new Intl.NumberFormat("id-ID").format(
                Number(raw || 0)
              );
              setValue("price", formatted);
            }}
          />

          {/* DESC */}
          <Textarea
            placeholder="Enter product description..."
            {...register("description")}
          />

          <DialogFooter className="flex justify-between w-full text-accent-r500 hover:text-accent-r500">
            <Button
              type="button"
              variant="ghost"
              className="flex-1 mr-3"
              disabled={isPending}
              onClick={handleDeleteClick}
            >
              <Trash /> Delete Item
            </Button>

            <Button type="submit" disabled={isPending} className="flex-1">
              {isPending ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin w-4 h-4" />
                  Saving...
                </div>
              ) : (
                "Save"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductOverlay;

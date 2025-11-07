"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
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
import { useCreateProduct } from "../../features/admin/menu-menagement/hooks/useCreateProduct";
import { toast } from "sonner";
import { Category } from "../../features/admin/menu-menagement/types";
import { useForm } from "react-hook-form";
import { toastError, toastSuccess } from "@/components/ui/sonner";

type FormValues = {
  name: string;
  price: string;
  description?: string;
  category: Category;
  image: File | null;
};

interface AddProductOverlayProps extends ModalProps {
  category: Category;
}

const AddProductOverlay = ({
  openModal,
  closeModal,
  category: defaultCategory,
}: AddProductOverlayProps) => {
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      price: "",
      category: defaultCategory,
      description: "",
      image: null,
    },
  });

  const selectedCategory = watch("category");

  useEffect(() => {
    if (openModal) {
      reset({
        name: "",
        price: "",
        category: defaultCategory,
        description: "",
        image: null,
      });
      setPreview(null);
    }
  }, [openModal, defaultCategory, reset]);

  const { mutate, isPending } = useCreateProduct({});

  const onSubmit = (data: FormValues) => {
    if (!data.image) {
      toastError("Image is required");
      return;
    }

    const rawPrice = data.price.replace(/\D/g, "");

    mutate(
      {
        name: data.name,
        category: data.category.toUpperCase(),
        price: rawPrice,
        description: data.description || "",
        image: data.image,
      },
      {
        onSuccess: () => {
          toastSuccess("New product has been created");
          reset();
          setPreview(null);
          closeModal();
        },
        onError: () => toast.error("Failed to create product"),
      }
    );
  };

  const handleImage = (file: File | null) => {
    setValue("image", file);
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  const clearAll = () => {
    reset({
      name: "",
      price: "",
      category: defaultCategory, // Kembali ke default category saat clear
      description: "",
      image: null,
    });
    setPreview(null);
  };

  return (
    <Dialog open={openModal} onOpenChange={closeModal}>
      <DialogContent
        className="bg-white p-0 flex flex-col outline-0 border-0 overflow-hidden w-[95%] sm:min-w-[490px] rounded-2xl shadow-lg gap-[0]!"
        showCloseButton={true}
      >
        <DialogHeader className="p-0 m-0!">
          <DialogTitle className="bg-neutral-100 text-center py-[12px] font-semibold text-lg m-0">
            Add Product
          </DialogTitle>
          {/* Tambahkan DialogDescription untuk menghilangkan warning */}
          <DialogDescription className="sr-only">
            Form untuk menambahkan produk baru
          </DialogDescription>
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
                  className="rounded-full object-cover w-24 h-24"
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
          {errors.image && (
            <p className="text-red-500 text-xs text-center">
              Image is required
            </p>
          )}

          {/* Category */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 b2-b">Category</label>
            <Select
              value={selectedCategory}
              onValueChange={(value) => setValue("category", value as Category)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="w-[--radix-select-trigger-width] bg-white">
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

          {/* Product Name */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 b2-b ">Product Name</label>
            <Input
              placeholder="Enter product name"
              {...register("name", { required: true })}
              className="b2-r"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">Name is required</p>
            )}
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 b2-b">Price</label>
            <div className="flex items-center gap-2 relative">
              <span className="text-gray-800 absolute left-3 b2-r">Rp</span>
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
                className="flex-1 pl-10 pr-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            {errors.price && (
              <p className="text-red-500 text-xs">Price is required</p>
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 b2-b flex justify-between">
              <span>Descriptions</span>
              <span className="text-xs text-gray-400">Optional</span>
            </label>
            <Textarea
              placeholder="Enter product description..."
              {...register("description")}
              className="b2-r"
            />
          </div>

          <DialogFooter className="flex justify-between w-full">
            <Button
              type="button"
              variant="outline"
              className="flex-1 mr-3"
              onClick={clearAll}
              disabled={isPending}
            >
              Clear All
            </Button>
            <Button
              type="submit"
              className="flex-1 text-white"
              disabled={isPending}
            >
              {isPending ? (
                <div className="flex items-center gap-2 justify-center">
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

export default AddProductOverlay;

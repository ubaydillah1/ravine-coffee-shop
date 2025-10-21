"use client";

import React, { useState } from "react";
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
import { Upload } from "lucide-react";

type AddProductOverlayProps = ModalProps;

const AddProductOverlay = ({
  openModal,
  closeModal,
}: AddProductOverlayProps) => {
  const [category, setCategory] = useState("Coffee");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const clearAll = () => {
    setCategory("Coffee");
    setName("");
    setPrice("");
    setDescription("");
    setImage(null);
    setPreview(null);
  };

  const handleSave = () => {
    console.log({
      category,
      name,
      price,
      description,
      image,
    });
    closeModal();
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
        </DialogHeader>

        <div className="p-[24px] w-full flex flex-col gap-6">
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
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Category */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 b2-b">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="w-[--radix-select-trigger-width] bg-white">
                <SelectItem value="Coffee">Coffee</SelectItem>
                <SelectItem value="Tea">Tea</SelectItem>
                <SelectItem value="Milk">Milk</SelectItem>
                <SelectItem value="Food">Food</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Product Name */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 b2-b ">Product Name</label>
            <Input
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="b2-r"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 b2-b">Price</label>
            <div className="flex items-center gap-2 relative">
              <span className="text-gray-800 absolute left-3 b2-r">Rp</span>
              <Input
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => {
                  const rawValue = e.target.value.replace(/\D/g, "");
                  const formatted = new Intl.NumberFormat("id-ID").format(
                    Number(rawValue || 0)
                  );
                  setPrice(formatted);
                }}
                className="flex-1 pl-10 pr-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 b2-b flex justify-between">
              <span>Descriptions</span>
              <span className="text-xs text-gray-400">Optional</span>
            </label>
            <Textarea
              placeholder="Enter product description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="b2-r"
            />
          </div>

          <DialogFooter className="flex justify-between w-full">
            <Button
              variant="outline"
              className="flex-1 mr-3"
              onClick={clearAll}
            >
              Clear All
            </Button>
            <Button className="flex-1 text-white" onClick={handleSave}>
              Save
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductOverlay;

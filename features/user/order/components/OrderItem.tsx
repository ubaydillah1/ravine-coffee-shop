"use client";

import React from "react";
import EditSecondForm from "@/public/assets/icons/edit-2.svg";
import Plus from "@/public/assets/icons/plus.svg";
import Minus from "@/public/assets/icons/minus.svg";
import { CartItem, useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";

const OrderItem = ({
  productId,
  productImage,
  productName,
  productPrice,
  productSlug,
  quantity,
  productCategory,
}: CartItem) => {
  const { addItem, decreaseItem } = useCartStore();
  const router = useRouter();

  const handleIncrease = () => {
    if (quantity >= 10) return;

    const itemToAdd: CartItem = {
      productId,
      productName,
      productPrice,
      productImage,
      productSlug,
      productCategory,
      quantity: 1,
      subtotal: productPrice,
    };
    addItem(itemToAdd);
  };

  const handleDecrease = () => {
    decreaseItem(productId);
  };

  const handleEdit = () => {
    router.replace(`/item/${productSlug}`);
  };

  return (
    <div className="flex flex-col gap-[12px] py-3">
      <div className="flex justify-between items-center">
        <div className="b2-b">{productName}</div>
        <div
          className="flex gap-[8px] items-center b3-b text-neutral-n700 cursor-pointer hover:text-neutral-n800 transition-colors"
          onClick={handleEdit}
        >
          <EditSecondForm className="size-[16px]" />
          Edit
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="b2-b">Rp{productPrice.toLocaleString("id-ID")}</p>
        <div className="flex gap-[24px] items-center">
          <button
            onClick={handleDecrease}
            className="p-1 hover:bg-neutral-n100 rounded transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="size-[14px]" />
          </button>
          <span className="min-w-[20px] text-center b2-b">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="p-1 hover:bg-neutral-n100 rounded transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="size-[14px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;

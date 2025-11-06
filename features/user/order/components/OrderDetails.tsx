"use client";

import Edit from "@/public/assets/icons/edit.svg";
import Plus from "@/public/assets/icons/plus.svg";
import { Button } from "@/components/ui/button";
import OrderItem from "./OrderItem";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";
import { useTableStore } from "@/store/useTableStore";
import { useState } from "react";
import NotesOverlay from "../../../../components/overlays/NotesOverlay";

const OrderDetails = () => {
  const { items, totalItems } = useCartStore();
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const tableNumber = useTableStore((state) => state.tableNumber);
  const router = useRouter();

  const handleAddItem = () => {
    router.replace(`/menu/t/${tableNumber}`);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="b2-b">Order Items ({totalItems()})</p>
        <Button
          variant="outline"
          className="rounded-[8px] px-[16px]"
          onClick={handleAddItem}
        >
          <Plus />
          Add Item
        </Button>
      </div>

      <div className="h-[1px] w-full bg-neutral-n300" />

      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.productId}>
            <OrderItem
              productId={item.productId}
              productImage={item.productImage}
              productName={item.productName}
              productPrice={item.productPrice}
              productCategory={item.productImage}
              productSlug={item.productSlug}
              quantity={item.quantity}
            />
            <div className="h-[1px] w-full bg-neutral-n300" />
          </div>
        ))
      ) : (
        <div className="py-4 text-center text-neutral-n500">
          No items in cart
        </div>
      )}

      <div
        className="border-l-[2px] border-primary-b300 pl-[8px] gap-[8px] text-neutral-n600 b2-b flex items-center cursor-pointer"
        onClick={() => setIsNotesOpen(true)}
      >
        <Edit className="size-[20px] text-neutral-700" />
        Add another notes
      </div>

      <NotesOverlay
        openModal={isNotesOpen}
        closeModal={() => setIsNotesOpen(false)}
      />
    </>
  );
};

export default OrderDetails;

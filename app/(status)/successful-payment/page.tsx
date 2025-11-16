"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import { useOrderStore } from "@/store/useOrderStore";
import { useTableStore } from "@/store/useTableStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SuccessfulPaymentPage = () => {
  const tableNumber = useTableStore((state) => state.tableNumber);
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart);
  const clearOrderData = useOrderStore((state) => state.clearOrderData);

  return (
    <div className="h-screen bg-white flex flex-col">
      <Header title="QRIS" withBackArrow={true} />

      <main className="flex flex-center flex-col flex-1 gap-[35px] px-[20px]">
        <div className="text-center space-y-[24px]">
          <div className="size-[240px] mx-auto overflow-hidden relative">
            <Image
              src="/assets/images/order-completed.png"
              alt="success"
              fill
              className="bg-cover"
            />
          </div>

          <div className="space-y-[8px]">
            <p className="b1-b">Payment Successful!</p>
            <p className="b2-r text-neutral-n700 max-w-[309px]">
              Thank you! Your payment was completed successfully.
            </p>
          </div>
        </div>

        <Button
          className="w-full max-w-[348px]"
          onClick={() => {
            clearCart();
            clearOrderData();
            if (tableNumber) {
              router.push(`/menu/t/${tableNumber}`);
            } else {
              router.push("/");
            }
          }}
        >
          New Order
        </Button>
      </main>
    </div>
  );
};

export default SuccessfulPaymentPage;

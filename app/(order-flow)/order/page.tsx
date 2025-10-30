"use client";

import React from "react";
import DineInBadge from "@/features/user/order/components/DineInBadge";
import OrderDetails from "@/features/user/order/components/OrderDetails";
import PaymentDetails from "@/features/user/order/components/PaymentDetails";
import CTAOrder from "@/features/user/order/components/CTAOrder";
import Header from "@/components/Header";
import NotFoundOrder from "@/features/user/order/components/NotFoundOrder";
import { useCartStore } from "@/store/useCartStore";
import { useTableStore } from "@/store/useTableStore";
import CartGuard from "@/components/CartGuard";

const OrderPage = () => {
  const totalItems = useCartStore((state) => state.totalItems);
  const tableNumber = useTableStore((state) => state.tableNumber);

  if (totalItems() === 0) {
    return <NotFoundOrder />;
  }

  return (
    <CartGuard>
      <div className="min-h-screen bg-white flex flex-col relative pb-[80px]">
        <Header
          title="Order"
          withBackArrow={true}
          backTo={`/menu/t/${tableNumber}`}
        />

        <main className="py-[16px] flex flex-col gap-[16px] pb-[16px]">
          <div className="px-[21px]">
            <DineInBadge />
          </div>
          {/* <RelatedMenu /> */}

          <div className="px-[21px] flex flex-col gap-[16px]">
            <OrderDetails />
            <PaymentDetails />
          </div>
        </main>

        <CTAOrder />
      </div>
    </CartGuard>
  );
};

export default OrderPage;

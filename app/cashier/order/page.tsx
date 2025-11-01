import InputCodeCashier from "@/features/cashier/components/InputCodeCashier";
import MenuWrapper from "@/features/cashier/components/MenuWrapper";
import OrderDetail from "@/features/cashier/components/OrderDetail";
import React from "react";

const OrderPage = () => {
  return (
    <>
      <main className="px-[24px] flex-1 overflow-auto flex flex-col gap-[24px] shrink-0">
        <MenuWrapper />
      </main>

      <section className="w-[371px]! h-full border-l border-neutral-n100 px-[24px] py-[32px]">
        <InputCodeCashier />
        <OrderDetail />
      </section>
    </>
  );
};

export default OrderPage;

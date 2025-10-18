import React from "react";
import DineInBadge from "@/features/order-flow/order/components/DineInBadge";
import RelatedMenu from "@/features/order-flow/order/components/RelatedMenu";
import OrderDetails from "@/features/order-flow/order/components/OrderDetails";
import PaymentDetails from "@/features/order-flow/order/components/PaymentDetails";
import CTAOrder from "@/features/order-flow/order/components/CTAOrder";
import Header from "@/components/Header";

const OrderPage = () => {
  return (
    <div>
      <Header title="Order" withBackArrow={true} backTo="/menu" />

      <main className="py-[16px] flex flex-col gap-[16px] pb-[16px]">
        <div className="px-[21px]">
          <DineInBadge />
        </div>
        <RelatedMenu />

        <div className="px-[21px] flex flex-col gap-[16px]">
          <OrderDetails />
          <PaymentDetails />
        </div>
      </main>

      <CTAOrder />
    </div>
    // <NotFoundOrder />
  );
};

export default OrderPage;

import CartGuard from "@/components/CartGuard";
import Header from "@/components/Header";
import DineInBadge from "@/features/user/order/components/DineInBadge";
import PaymentMethodWrapper from "@/features/user/order/components/PaymentMethodWrapper";
import CustomerInformation from "@/features/user/outlet/components/CustomerInformation";
import React from "react";

const PaymentPage = () => {
  return (
    <CartGuard>
      <div className="pb-[80px]">
        <Header title="Order" withBackArrow={true} backTo="/order" />

        <div className="flex flex-col gap-[16px]">
          <div className="py-[24px] flex flex-col gap-[24px] bg-white px-[21px]">
            <DineInBadge />
            <CustomerInformation />
          </div>

          <PaymentMethodWrapper />
        </div>
      </div>
    </CartGuard>
  );
};

export default PaymentPage;

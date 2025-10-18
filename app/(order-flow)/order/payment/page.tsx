// import CompletePayment from "@/features/(root)/order/components/CompletePayment";
import Header from "@/components/Header";
import CTAPayment from "@/features/order-flow/order/components/CTAPayment";
import DineInBadge from "@/features/order-flow/order/components/DineInBadge";
import PaymentIllustration from "@/features/order-flow/order/components/PaymentIllustration";
import PaymentMethod from "@/features/order-flow/order/components/PaymentMethod";
import CustomerInformation from "@/features/order-flow/outlet/components/CustomerInformation";
import React from "react";

const PaymentPage = () => {
  return (
    <div>
      <Header title="Order" withBackArrow={true} backTo="/order" />

      <main className="flex flex-col gap-[16px]">
        <div className="py-[24px] flex flex-col gap-[24px] bg-white px-[21px]">
          <DineInBadge />
          <CustomerInformation />
        </div>

        <PaymentMethod />
        {/* <CompletePayment /> */}
        <PaymentIllustration />
      </main>

      <CTAPayment />
    </div>
  );
};

export default PaymentPage;

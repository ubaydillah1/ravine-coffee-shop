// import CompletePayment from "@/features/(root)/order/components/CompletePayment";
import Header from "@/components/Header";
import CTAPayment from "@/features/user/order/components/CTAPayment";
import DineInBadge from "@/features/user/order/components/DineInBadge";
import PaymentIllustration from "@/features/user/order/components/PaymentIllustration";
import PaymentMethod from "@/features/user/order/components/PaymentMethod";
import CustomerInformation from "@/features/user/outlet/components/CustomerInformation";
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

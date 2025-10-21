import Header from "@/components/Header";
import CallActionSection from "@/features/user/order/components/CallActionSection";
import React from "react";

const QrisPaymentPage = () => {
  return (
    <div className="h-screen bg-white flex flex-col">
      <Header title="QRIS" withBackArrow={true} modalType="CANCELQRISPAYMENT" />

      <main className="flex flex-center flex-col flex-1 gap-[35px]">
        <section className="text-center space-y-[24px]">
          <div>
            <p className="b1-b">Complete payment in</p>
            <p className="h3">09:53</p>
          </div>

          <div className="size-[240px] mx-auto bg-black"></div>

          <div>
            <p className="b1-r">Payment Total</p>
            <p className="sub-h1">$4.80</p>
          </div>
        </section>

        <CallActionSection />
      </main>
    </div>
  );
};

export default QrisPaymentPage;

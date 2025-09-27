import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Download from "@/public/assets/icons/download.svg";
import React from "react";

const QrisPaymentPage = () => {
  return (
    <div className="h-screen bg-white flex flex-col">
      <Header title="QRIS" withBackArrow={true} />

      <main className="flex flex-center flex-col flex-1 gap-[35px]">
        <div className="text-center space-y-[24px]">
          <div>
            <p className="b1-b">Complete payment in</p>
            <p className="h3">09:53</p>
          </div>

          <div className="size-[240px] mx-auto bg-black"></div>

          <div>
            <p className="b1-r">Payment Total</p>
            <p className="sub-h1">$4.80</p>
          </div>
        </div>

        <div className="flex gap-[16px]">
          <Button>Check Payment Status</Button>
          <div className="flex-center size-[52px] border-2 border-primary-b300 rounded-[6px] overflow-hidden">
            <Download className="text-primary-b300" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default QrisPaymentPage;

import React from "react";
import QrCode from "@/public/assets/icons/qrcode.svg";

const CompletePayment = () => {
  return (
    <div className="px-[21px] py-[24px] bg-white flex flex-col gap-[24px]">
      <strong className="sub-h2">Complete Payment</strong>
      <div className="border border-primary-b300 rounded-[8px] py-[12px] px-[20px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <QrCode />
            <p className="l2-r">Online Payment</p>
          </div>

          <div className="rounded-full size-[24px] border-[2px] border-primary-b300 flex-center">
            <div className="rounded-full size-[12px] bg-primary-b300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletePayment;

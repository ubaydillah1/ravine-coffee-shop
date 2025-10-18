import Image from "next/image";
import React from "react";

const PaymentIllustration = () => {
  return (
    <div className="py-[24px] px-[21px] flex flex-col justify-center items-center gap-[24px] bg-white">
      <div className="relative w-[188px] h-[200px]">
        <Image
          src={"/assets/illustrations/payment-with-qr-illustration.webp"}
          alt="qr-payment-illustration"
          fill
        />
      </div>

      <p className="b2-r">
        Click <span className="font-bold">‘Pay at Cashier’</span> and show QR
        code to the cashier
      </p>
    </div>
  );
};

export default PaymentIllustration;

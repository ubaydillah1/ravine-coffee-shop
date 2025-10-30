import React from "react";
import MobilePhone from "@/public/assets/icons/mobile-phone.svg";
import Wallet from "@/public/assets/icons/Wallet.svg";
import type { PaymentMethod } from "@/store/useUserInfoStore";

const PaymentMethod = ({
  paymentMethod,
  setPaymentMethod,
}: {
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
}) => {
  return (
    <div className="py-[24px] flex flex-col gap-[24px] bg-white px-[21px] sub-h2">
      Payment Method
      <div className="flex justify-between gap-[20px]">
        <button
          className={`cursor-pointer l2-r relative rounded-[8px] py-[12px] px-[2.5px] w-full
            ${
              paymentMethod === "QRIS"
                ? "border border-primary-b300 bg-primary-b200"
                : "border border-neutral-n300 bg-white"
            }`}
          onClick={() => setPaymentMethod("QRIS")}
        >
          <MobilePhone
            className={
              paymentMethod === "QRIS"
                ? "text-primary-b300"
                : "text-neutral-n200"
            }
          />
          <div
            className={`absolute right-0 top-0 bottom-0 rounded-[8px] h-full flex-center px-[16px] 
              ${
                paymentMethod === "QRIS"
                  ? "bg-white border border-primary-b300"
                  : "bg-white border border-neutral-n300"
              }`}
          >
            <p className="l2-r">Online Payment</p>
          </div>
        </button>

        <button
          className={`cursor-pointer l2-r relative rounded-[8px] py-[12px] px-[2.5px] w-full transition-all duration-300
            ${
              paymentMethod === "CASH"
                ? "border border-primary-b300 bg-primary-b200"
                : "border border-neutral-n300 bg-white"
            }`}
          onClick={() => setPaymentMethod("CASH")}
        >
          <Wallet
            className={
              paymentMethod === "CASH"
                ? "text-primary-b300"
                : "text-neutral-n200"
            }
          />
          <div
            className={`absolute right-0 top-0 bottom-0 rounded-[8px] h-full flex-center px-[16px] transition-all duration-300
              ${
                paymentMethod === "CASH"
                  ? "bg-white border border-primary-b300"
                  : "bg-white border border-neutral-n300"
              }`}
          >
            <p className="l2-r">Pay at Cashier</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;

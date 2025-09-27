import React from "react";
import MobilePhone from "@/public/assets/icons/mobile-phone.svg";
import Wallet from "@/public/assets/icons/wallet.svg";

const PaymentMethod = () => {
  return (
    <div className="py-[24px] flex flex-col gap-[24px] bg-white px-[21px] sub-h2">
      Payment Method
      <div className="flex justify-between gap-[20px]">
        <button className="l2-r relative rounded-[8px] border border-primary-b300 bg-primary-b200 py-[12px] px-[2.5px]  w-full ">
          <MobilePhone className="text-primary-b300" />
          <div className="absolute right-0 top-0 bottom-0 rounded-[8px] bg-white h-full flex-center px-[16px] border border-primary-b300">
            <p className="l2-r">Online Payment</p>
          </div>
        </button>
        <button className="l2-r relative rounded-[8px] border border-neutral-n300 bg-white py-[12px] px-[2.5px] w-full">
          <Wallet className="text-neutral-n200" />
          <div className="absolute right-0 top-0 bottom-0 rounded-[8px] bg-white h-full flex-center px-[16px] border border-neutral-n300">
            <p className="l2-r">Pay at Cashier</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;

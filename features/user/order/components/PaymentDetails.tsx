import React from "react";

const PaymentDetails = () => {
  return (
    <div className="rounded-[8px] p-[16px] border border-neutral-n300 flex flex-col gap-[12px]">
      <strong className="text-center">Payment Details</strong>

      <div className="flex justify-between b2-b">
        <p>
          Sub Total <span className="text-neutral-n500">(2 Menu)</span>
        </p>
        Rp4.50
      </div>
      <div className="flex justify-between b2-b">
        <p>Tax</p>
        Rp4.50
      </div>

      <div className="w-full border-t border-dashed border-[#EDF0F7] my-2"></div>

      <div className="flex justify-between b2-b">
        <p>Total</p>
        Rp4.50
      </div>
    </div>
  );
};

export default PaymentDetails;

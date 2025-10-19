import React from "react";
import ComparisonPieChart from "./charts/ComparisonPieChart";

const PaymentMethodSection = () => {
  return (
    <div className="flex flex-col gap-[12px] sm:gap-[24px] p-[12px] sm:p-[24px] border rounded-[16px] border-neutral-n300 w-full">
      <p className="sm:b1-b l3-b text-neutral-n900 font-bold">
        Payment Methods
      </p>
      <div className="mx-auto">
        <ComparisonPieChart type="payment" />
      </div>
    </div>
  );
};

export default PaymentMethodSection;

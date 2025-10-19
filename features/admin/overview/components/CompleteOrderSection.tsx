import React from "react";
import ProductInfo from "./ProductInfo";

const CompleteOrderSection = () => {
  return (
    <div className="flex flex-col gap-[12px] sm:gap-[24px] p-[12px] sm:p-[24px] border rounded-[16px] border-neutral-n300 w-full lg:w-[298px] h-fit">
      <p className="sm:b1-b l3-b text-neutral-n900 text-[12px] font-bold">
        Today Completed Order
      </p>

      <div className="w-full h-[1px] bg-neutral-n300"></div>

      <ProductInfo />
      <ProductInfo />
      <ProductInfo />
      <ProductInfo />
      <ProductInfo />
      <ProductInfo />
    </div>
  );
};

export default CompleteOrderSection;

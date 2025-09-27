import React from "react";
import CheckCircle from "@/public/assets/icons/check-circle.svg";

const DineInBadge = () => {
  return (
    <div className="border border-primary-b300 rounded-[8px] px-[12px] py-[8px] flex justify-between items-center bg-primary-b200">
      <p className="l3-r">Order Type</p>
      <div className="flex items-center gap-[8px]">
        <p className="l3-b">Dine In</p>
        <CheckCircle className="w-[16px] h-[16px]" />
      </div>
    </div>
  );
};

export default DineInBadge;

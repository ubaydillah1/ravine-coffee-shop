"use client";

import React from "react";

const OrderDetailsSkeleton = () => {
  return (
    <div className="px-[32px] py-[24px] w-full flex flex-col gap-[24px] animate-pulse">
      {/* HEADER */}
      <div className="w-full flex justify-between items-end">
        <div className="space-y-[16px] w-1/2">
          <div className="h-[24px] w-[80px] bg-neutral-n200 rounded-md" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col gap-[4px]">
              <div className="w-[100px] h-[12px] bg-neutral-n200 rounded" />
              <div className="w-[160px] h-[16px] bg-neutral-n200 rounded" />
            </div>
          ))}
        </div>

        <div className="space-y-[16px] w-[140px]">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col gap-[4px]">
              <div className="w-[100px] h-[12px] bg-neutral-n200 rounded" />
              <div className="w-[100px] h-[16px] bg-neutral-n200 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* ITEMS */}
      <div className="space-y-[16px]">
        <div className="w-full h-[40px] bg-neutral-n200 rounded-[8px]" />
        <div className="space-y-[12px]">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-[32px] px-[16px]">
              <div className="w-[246px] h-[40px] bg-neutral-n200 rounded-[6px]" />
              <div className="w-[24px] h-[16px] bg-neutral-n200 rounded" />
              <div className="flex-1 h-[16px] bg-neutral-n200 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* TOTAL SECTION */}
      <div className="space-y-[8px] bg-neutral-n100 p-[16px] rounded-[8px]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex justify-between">
            <div className="w-[120px] h-[16px] bg-neutral-n200 rounded" />
            <div className="w-[60px] h-[16px] bg-neutral-n200 rounded" />
          </div>
        ))}
        <div className="w-full h-px bg-neutral-n300" />
        <div className="flex justify-between">
          <div className="w-[80px] h-[18px] bg-neutral-n200 rounded" />
          <div className="w-[80px] h-[18px] bg-neutral-n200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsSkeleton;

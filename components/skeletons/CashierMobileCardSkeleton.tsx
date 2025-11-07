"use client";

import React from "react";

const MobileCardSkeleton = () => {
  return (
    <div className="block sm:hidden rounded-[12px] border border-neutral-n300 p-[16px] space-y-[12px] mb-[16px] bg-white w-full animate-pulse">
      <div className="flex justify-between items-center">
        <div className="h-[18px] w-[40%] bg-neutral-n200 rounded-md" />
        <div className="h-[16px] w-[16px] bg-neutral-n200 rounded-md" />
      </div>

      <div className="w-full h-[1px] bg-neutral-n300" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          <div className="h-[40px] w-[40px] rounded-full bg-neutral-n200" />
          <div className="space-y-[6px]">
            <div className="h-[14px] w-[120px] bg-neutral-n200 rounded-md" />
            <div className="h-[12px] w-[160px] bg-neutral-n200 rounded-md" />
          </div>
        </div>

        <div className="h-[20px] w-[60px] bg-neutral-n200 rounded-md" />
      </div>

      <div className="w-full h-[1px] bg-neutral-n300" />

      <div className="flex justify-between items-center">
        <div className="h-[12px] w-[80px] bg-neutral-n200 rounded-md" />
        <div className="h-[14px] w-[140px] bg-neutral-n200 rounded-md" />
      </div>
    </div>
  );
};

export default MobileCardSkeleton;

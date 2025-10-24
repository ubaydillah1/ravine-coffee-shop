import React from "react";

const IndicatorSkeleton = () => {
  return (
    <div
      className="
        p-[16px] rounded-[12px] space-y-[24px] bg-primary-b100 w-[calc(50%-8px)] sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)]
        animate-pulse flex flex-col justify-between
      "
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-[8px]">
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
          <div className="h-8 w-32 bg-gray-400 rounded"></div>
        </div>
        <div className="size-[28px] sm:size-[56px] bg-gray-300 rounded-full"></div>
      </div>
      <div className="py-[4px] px-[8px] rounded-full bg-gray-300 w-16 h-6"></div>
    </div>
  );
};

export default IndicatorSkeleton;

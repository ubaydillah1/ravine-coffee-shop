import React from "react";

const ProductInfoSkeleton = () => {
  return (
    <div className="flex justify-between items-center animate-pulse">
      <div className="flex gap-[8px] items-center">
        <div className="w-[64px] h-[64px] bg-gray-300 rounded-[5px]"></div>
        <div className="flex flex-col gap-[8px]">
          <div className="h-3 w-28 bg-gray-300 rounded"></div>
          <div className="h-3 w-10 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="h-4 w-16 bg-gray-300 rounded"></div>
    </div>
  );
};

export default ProductInfoSkeleton;

import Image from "next/image";
import React from "react";

const ProductInfo = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-[8px] items-center">
        <div className="w-[64px] h-[64px] bg-primary-b100 relative rounded-[5px] overflow-hidden flex-center">
          <Image
            src={"/assets/images/Varian 1.png"}
            fill
            alt="bg-image"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-[4px]">
          <span className="l3-b text-neutral-n900">Hazelnut Latte </span>
          <span className="l3-r text-neutral-n600">5x</span>
        </div>
      </div>
      <span className="l2-b sm:l3-b text-neutral-n900 sm:text-[14px]!">
        Rp20.000
      </span>
    </div>
  );
};

export default ProductInfo;

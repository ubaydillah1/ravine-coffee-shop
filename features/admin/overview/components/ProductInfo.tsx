import Image from "next/image";
import React from "react";
import { TodayCompletedOrdersPayload } from "../api/getTodayCompleteOrders";

type ProductInfoProps = {
  data: TodayCompletedOrdersPayload;
};

const formatRupiah = (amount: number) => {
  return `Rp${amount.toLocaleString("id-ID")}`;
};

const ProductInfo = ({ data }: ProductInfoProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-[8px] items-center">
        <div className="w-[64px] h-[64px] bg-primary-b100 relative rounded-[5px] overflow-hidden flex-center">
          <Image
            src={data.image || "/assets/images/default.png"}
            fill
            alt={data.name}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-[4px]">
          <span className="l3-b text-neutral-n900">{data.name}</span>
          <span className="l3-r text-neutral-n600">{data.qty}x</span>
        </div>
      </div>
      <span className="l2-b sm:l3-b text-neutral-n900 sm:text-[14px]!">
        {formatRupiah(data.price)}
      </span>
    </div>
  );
};

export default ProductInfo;

import React from "react";
import ProductInfo from "./ProductInfo";
import { TodayCompletedOrdersPayload } from "../api/getTodayCompleteOrders";
import ProductInfoSkeleton from "./skeletons/ProductInfoSkeleton";

type CompleteOrderSectionProps = {
  data: TodayCompletedOrdersPayload[] | undefined;
  isPending: boolean;
};

const DUMMY_SKELETON_COUNT = 5;

const CompleteOrderSection = ({
  data,
  isPending,
}: CompleteOrderSectionProps) => {
  if (isPending) {
    return (
      <div className="flex flex-col gap-[12px] sm:gap-[24px] p-[12px] sm:p-[24px] border rounded-[16px] border-neutral-n300 w-full lg:w-[298px] h-fit">
        <p className="sm:b1-b l3-b text-neutral-n900 text-[12px] font-bold">
          Today Completed Order
        </p>

        <div className="w-full h-[1px] bg-neutral-n300"></div>

        {Array.from({ length: DUMMY_SKELETON_COUNT }).map((_, idx) => (
          <ProductInfoSkeleton key={idx} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[12px] sm:gap-[24px] p-[12px] sm:p-[24px] border rounded-[16px] border-neutral-n300 w-full lg:w-[298px] h-fit">
      <p className="sm:b1-b l3-b text-neutral-n900 text-[12px] font-bold">
        Today Completed Order
      </p>

      <div className="w-full h-[1px] bg-neutral-n300"></div>

      {data && data.length > 0 ? (
        data.map((item) => <ProductInfo key={item.id} data={item} />)
      ) : (
        <p className="text-center text-neutral-n600 l4-r">No completed order</p>
      )}
    </div>
  );
};

export default CompleteOrderSection;

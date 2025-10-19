import React from "react";
import Order from "@/public/assets/icons/coffe-1.svg";
import CheckCircle from "@/public/assets/icons/check-circle.svg";
import XCircle from "@/public/assets/icons/x-circle.svg";
import Clock from "@/public/assets/icons/clock.svg";

const indicators = [
  {
    title: "Total Orders",
    value: "164",
    type: "orders",
  },
  { title: "Total Orders", value: "320", type: "complete" },
  {
    title: "Average Expenses",
    value: "Rp32.000",
    type: "canceled",
  },
  {
    title: "Average Revenue",
    value: "Rp1.100.000",
    type: "inProgress",
  },
];

const Indicators = () => {
  return (
    <div className="flex flex-wrap justify-between gap-[16px] sm:gap-[32px]">
      {indicators.map((item, idx) => (
        <div
          key={idx}
          className="
           pl-[24px]! p-[16px] rounded-[12px] space-y-[24px] bg-primary-b100 w-[calc(50%-8px)] sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] transition-all duration-200 flex flex-col justify-center h-[80px] sm:h-[120px]
          "
        >
          <div className="flex justify-between">
            <div className="flex flex-col gap-[4px]">
              <span className="l4-r sm:l2-r text-neutral-700">
                {item.title}
              </span>
              <strong className="l2-b sm:sub-h1">{item.value}</strong>
            </div>
            {item.type === "complete" && (
              <CheckCircle className="size-[28px] sm:size-[56px] text-primary-b200" />
            )}

            {item.type === "orders" && (
              <Order className="size-[28px] sm:size-[56px] text-primary-b200" />
            )}

            {item.type === "canceled" && (
              <XCircle className="size-[28px] sm:size-[56px] text-primary-b200" />
            )}

            {item.type === "inProgress" && (
              <Clock className="size-[28px] sm:size-[56px] text-primary-b200" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Indicators;

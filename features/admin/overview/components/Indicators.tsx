import React from "react";
import Chart from "@/public/assets/icons/chart.svg";
import Order from "@/public/assets/icons/coffe-1.svg";
import Expenses from "@/public/assets/icons/Money.svg";
import Money from "@/public/assets/icons/money-paper.svg";

const indicators = [
  {
    title: "Total Revenue",
    value: "Rp1.280.000",
    growth: "+7%",
    type: "revenue",
  },
  { title: "Total Orders", value: "320", growth: "+12%", type: "orders" },
  {
    title: "Average Expenses",
    value: "Rp32.000",
    growth: "+4%",
    type: "expenses",
  },
  {
    title: "Average Revenue",
    value: "Rp1.100.000",
    growth: "+9%",
    type: "averageRevenue",
  },
];

const Indicators = () => {
  return (
    <div className="flex flex-wrap justify-between gap-[16px] sm:gap-[32px]">
      {indicators.map((item, idx) => (
        <div
          key={idx}
          className="
            p-[16px] rounded-[12px] space-y-[24px] bg-primary-b100 w-[calc(50%-8px)] sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] transition-all duration-200 flex flex-col justify-between
          "
        >
          <div className="flex justify-between">
            <div className="flex flex-col gap-[4px]">
              <span className="l4-r sm:l2-r text-neutral-700">
                {item.title}
              </span>
              <strong className="l2-b sm:sub-h1">{item.value}</strong>
            </div>
            {item.type === "revenue" && (
              <Chart className="size-[28px] sm:size-[56px] text-primary-b200" />
            )}

            {item.type === "orders" && (
              <Order className="size-[28px] sm:size-[56px] text-primary-b200" />
            )}

            {item.type === "expenses" && (
              <Expenses className="size-[28px] sm:size-[56px] text-primary-b200" />
            )}

            {item.type === "averageRevenue" && (
              <Money className="size-[28px] sm:size-[56px] text-primary-b200" />
            )}
          </div>

          <div className="py-[4px] px-[8px] rounded-full bg-accent-g500 w-fit text-white l4-r sm:l3-r">
            {item.growth}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Indicators;

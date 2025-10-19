import React from "react";
import ComparisonBarChart from "./charts/ComparisonBarChart";
import { RangeDropdown } from "./RangeDropdown";

const RevenueOrderSection = () => {
  return (
    <section className="flex flex-col gap-[12px] sm:gap-[24px] p-[12px] sm:p-[24px] border rounded-[16px] border-neutral-n300">
      <div className="flex justify-between items-center">
        <div className="flex gap-[12px] items-center">
          <span className="l3-b sm:b1-b font-bold">Total Revenue</span>
          <span className="l4-r sm:l2-r text-neutral-n600">Total Order</span>
        </div>

        <RangeDropdown
          ranges={["Weekly", "Monthly", "Annual"]}
          defaultValue="Weekly"
        />
      </div>
      <ComparisonBarChart />
    </section>
  );
};

export default RevenueOrderSection;

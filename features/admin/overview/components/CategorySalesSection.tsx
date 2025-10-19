import React from "react";
import HorizontalBarChart from "./charts/HorizontalBarChart";

const CategorySalesSection = () => {
  return (
    <div className="flex flex-col gap-[12px] sm:gap-[24px] p-[12px] sm:p-[24px] border rounded-[16px] border-neutral-n300 w-full">
      <p className="sm:b1-b l3-b text-neutral-n900 font-bold">Category Sales</p>

      <HorizontalBarChart />
    </div>
  );
};

export default CategorySalesSection;

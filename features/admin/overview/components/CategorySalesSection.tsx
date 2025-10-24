"use client";

import React from "react";
import HorizontalBarChart from "./charts/HorizontalBarChart";
import { Period } from "../api/getOverview";
import { useGetCategorySales } from "../hooks/useGetCategorySales";

const CategorySalesSection = ({ period }: { period: Period }) => {
  const { data, isPending } = useGetCategorySales({ period });

  if (!data) return null;

  return (
    <div className="flex flex-col gap-[12px] sm:gap-[24px] p-[12px] sm:p-[24px] border rounded-[16px] border-neutral-n300 w-full">
      <p className="sm:b1-b l3-b text-neutral-n900 font-bold">Category Sales</p>

      <HorizontalBarChart data={data} isPending={isPending} />
    </div>
  );
};

export default CategorySalesSection;

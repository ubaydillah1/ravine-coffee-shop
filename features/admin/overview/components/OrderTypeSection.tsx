"use client";

import React from "react";
import ComparisonPieChart from "./charts/ComparisonPieChart";
import { Period } from "../api/getOverview";
import { useGetOrderTypes } from "../hooks/useGetOrderTypes";
import { GetOrderTypesPayload } from "../api/getOrderTypes";

const OrderTypeSection = ({ period }: { period: Period }) => {
  const { data, isPending } = useGetOrderTypes({ period });

  const chartData = React.useMemo(() => {
    if (!data) return undefined;

    return data.map((d: GetOrderTypesPayload) => ({
      name: d.type === "DINE_IN" ? "Dine In" : "Take Away",
      value: d.percentage,
      color: d.type === "DINE_IN" ? "#C9ad91" : "#F5f0eb",
    }));
  }, [data]);

  return (
    <div className="flex flex-col gap-[12px] sm:gap-[24px] p-[12px] sm:p-[24px] border rounded-[16px] border-neutral-n300 w-full">
      <p className="sm:b1-b l3-b text-neutral-n900 font-bold">Order Type</p>
      <div className="mx-auto">
        <ComparisonPieChart data={chartData} isPending={isPending} />
      </div>
    </div>
  );
};

export default OrderTypeSection;

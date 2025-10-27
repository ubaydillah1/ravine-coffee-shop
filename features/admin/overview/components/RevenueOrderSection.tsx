"use client";

import React, { useState } from "react";
import ComparisonBarChart, { ChartData } from "./charts/ComparisonBarChart";
import { RangeDropdown } from "./RangeDropdown";
import { useGetRevenue } from "../hooks/useGetRevenue";
import { RevenuePeriod, GetRevenuePayload } from "../api/getRevenue";

const RevenueOrderSection = () => {
  const [period, setPeriod] = useState<RevenuePeriod>("weekly");
  const { data, isPending } = useGetRevenue({ period });

  const chartData: ChartData[] | undefined = React.useMemo(() => {
    if (!data) return undefined;

    return data.map((item: GetRevenuePayload) => ({
      name: item.label,
      CurrentPeriod: item.current,
      LastPeriod: item.last,
      amt: Math.max(item.current, item.last),
    }));
  }, [data]);

  return (
    <section className="flex flex-col gap-[12px] sm:gap-[24px] p-[12px] sm:p-[24px] border rounded-[16px] border-neutral-n300">
      <div className="flex justify-between items-center">
        <div className="flex gap-[12px] items-center">
          <span className="l3-b sm:b1-b font-bold">Total Revenue</span>
          {/* <span className="l4-r sm:l2-r text-neutral-n600">Total Order</span> */}
        </div>

        <RangeDropdown
          ranges={["Weekly", "Monthly", "Annual"]}
          defaultValue="Weekly"
          onChange={(value) => setPeriod(value.toLowerCase() as RevenuePeriod)}
        />
      </div>

      <ComparisonBarChart
        data={chartData}
        isPending={isPending}
        period={period}
      />
    </section>
  );
};

export default RevenueOrderSection;

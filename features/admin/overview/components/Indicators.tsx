"use client";

import React from "react";
import Chart from "@/public/assets/icons/chart.svg";
import Order from "@/public/assets/icons/coffe-1.svg";
import Expenses from "@/public/assets/icons/Money.svg";
import Money from "@/public/assets/icons/money-paper.svg";
import IndicatorSkeleton from "./skeletons/IndicatorSceleton";
import { OverviewPayload } from "../api/getOverview";

type IndicatorItem = {
  title: string;
  value: string;
  growth: number;
  type: "revenue" | "orders" | "expenses" | "averageRevenue";
};

type IndicatorsProps = {
  data: OverviewPayload | undefined;
  isPending: boolean;
};

const formatRupiah = (amount: number) => `Rp${amount.toLocaleString("id-ID")}`;

const DUMMY_SKELETON_COUNT = 4;

const Indicators = ({ data, isPending }: IndicatorsProps) => {
  const indicatorData = React.useMemo(() => {
    if (!data) return [];
    const {
      totalRevenue,
      totalOrders,
      averageExpenses,
      averageRevenue,
      growth,
    } = data;
    return [
      {
        title: "Total Revenue",
        value: formatRupiah(totalRevenue),
        growth: growth.totalRevenue,
        type: "revenue",
      },
      {
        title: "Total Orders",
        value: totalOrders.toString(),
        growth: growth.totalOrders,
        type: "orders",
      },
      {
        title: "Average Expenses",
        value: formatRupiah(averageExpenses),
        growth: growth.averageExpenses,
        type: "expenses",
      },
      {
        title: "Average Revenue",
        value: formatRupiah(averageRevenue),
        growth: growth.averageRevenue,
        type: "averageRevenue",
      },
    ] as IndicatorItem[];
  }, [data]);

  if (isPending) {
    return (
      <div className="flex flex-wrap justify-between gap-[16px] sm:gap-[32px]">
        {Array.from({ length: DUMMY_SKELETON_COUNT }).map((_, idx) => (
          <IndicatorSkeleton key={idx} />
        ))}
      </div>
    );
  }

  if (!indicatorData || indicatorData.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        Tidak ada data tersedia untuk periode ini.
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-between gap-[16px] sm:gap-[32px]">
      {indicatorData.map((item, idx) => {
        const percentage = Number(item.growth);
        const isNegative = percentage < 0;
        const badgeColor = isNegative ? "bg-accent-r500" : "bg-accent-g500";
        const displayText = isNegative ? `${percentage}%` : `+${percentage}%`;
        return (
          <div
            key={idx}
            className="p-[16px] rounded-[12px] space-y-[24px] bg-primary-b100 w-[calc(50%-8px)] sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] transition-all duration-200 flex flex-col justify-between"
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

            <div
              className={`py-[4px] px-[8px] rounded-full w-fit text-white l4-r sm:l3-r ${badgeColor}`}
            >
              {displayText}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Indicators;

"use client";

import { Period } from "@/features/admin/overview/api/getOverview";
import CompleteOrderSection from "@/features/admin/overview/components/CompleteOrderSection";
import GraphicSection from "@/features/admin/overview/components/GraphicSection";
import Indicators from "@/features/admin/overview/components/Indicators";
import { Title } from "@/features/admin/overview/components/Title";
import { useGetOverview } from "@/features/admin/overview/hooks/useGetOverview";
import { useGetTodayCompletedOrders } from "@/features/admin/overview/hooks/useGetTodayCompleteOrders";
import React, { useState } from "react";

const OverviewPage = () => {
  const [period, setPeriod] = useState<Period>("today");
  console.log(period);
  const { data: overviewData, isPending: overviewIsPending } = useGetOverview({
    period,
  });
  const {
    data: todayCompletedOrders,
    isPending: todayCompletedOrdersIsPending,
  } = useGetTodayCompletedOrders();

  return (
    <section className="space-y-[12px] sm:space-y-[24px] h-full md:py-[40px] sm:py-[24px] py-[12px]">
      <Title setPeriod={setPeriod} />
      <Indicators data={overviewData} isPending={overviewIsPending} />

      <div className="flex flex-col lg:flex-row gap-[24px] sm:pb-[24px] py-[8px]">
        <GraphicSection period={period} />
        <CompleteOrderSection
          data={todayCompletedOrders}
          isPending={todayCompletedOrdersIsPending}
        />
      </div>
    </section>
  );
};

export default OverviewPage;

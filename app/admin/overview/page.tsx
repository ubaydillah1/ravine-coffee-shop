"use client";

import CompleteOrderSection from "@/features/admin/overview/components/CompleteOrderSection";
import GraphicSection from "@/features/admin/overview/components/GraphicSection";
import Indicators from "@/features/admin/overview/components/Indicators";
import { Title } from "@/features/admin/overview/components/Title";
import React from "react";

const OverviewPage = () => {
  return (
    <section className="space-y-[12px] sm:space-y-[24px] h-full md:py-[40px] sm:py-[24px] py-[12px]">
      <Title />
      <Indicators />

      <div className="flex flex-col lg:flex-row gap-[24px] sm:pb-[24px] py-[8px]">
        <GraphicSection />
        <CompleteOrderSection />
      </div>
    </section>
  );
};

export default OverviewPage;

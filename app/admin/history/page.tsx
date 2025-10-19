"use client";

import StatusFilterBar from "@/components/StatusFilterBar";
import HistoryTable from "@/features/admin/history/components/historyTable";
import Indicators from "@/features/admin/history/components/Indicators";
import React, { useState } from "react";

const HistoryPage = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <section className="space-y-[12px] sm:space-y-[24px] h-full md:py-[40px] sm:py-[24px] py-[12px]">
      <Indicators />
      <StatusFilterBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        showSearch={false}
        mobileTitle="Orders in:"
      />
      <HistoryTable />
    </section>
  );
};

export default HistoryPage;

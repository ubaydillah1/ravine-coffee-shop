"use client";

import StatusFilterBar from "@/components/StatusFilterBar";
import HistoryTable from "@/features/admin/history/components/historyTable";
import Indicators from "@/features/admin/history/components/Indicators";
import { OrderTableType } from "@/types/order";
import React, { useState } from "react";

const HistoryPage = () => {
  const [activeTab, setActiveTab] = useState<OrderTableType>("all-orders");
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <section className="space-y-[12px] sm:space-y-[24px] h-full md:py-[40px] sm:py-[24px] py-[12px]">
      <Indicators />
      <StatusFilterBar
        setDate={setDate}
        date={date}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        showSearch={false}
        mobileTitle="Orders in:"
      />
      <HistoryTable status={activeTab} date={date} />
    </section>
  );
};

export default HistoryPage;

"use client";

import React, { useState } from "react";
import StatusSection from "@/features/cashier/components/StatusSection";
import StatusFilterBar from "@/components/StatusFilterBar";
import { OrderTableType } from "@/types/order";

const StatusPage = () => {
  const [activeTab, setActiveTab] = useState<OrderTableType>("all-orders");

  return (
    <main className="px-[24px] flex-1 flex flex-col">
      <StatusFilterBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        title="Order Status"
        setDate={() => {}}
      />
      <StatusSection />
    </main>
  );
};

export default StatusPage;

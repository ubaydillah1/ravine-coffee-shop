"use client";

import React, { useState } from "react";
import StatusSection from "@/features/cashier/components/StatusSection";
import StatusFilterBar from "@/components/StatusFilterBar";
import { OrderStatus, OrderTableType } from "@/types/order";
import { mapTableTypeToOrderStatus } from "@/features/cashier/helpers";

const StatusPage = () => {
  const [activeTab, setActiveTab] = useState<OrderTableType>("all-orders");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [search, setSearch] = useState<string>("");

  return (
    <main className="px-[24px] flex-1 flex flex-col">
      <StatusFilterBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        title="Order Status"
        setDate={setDate}
        date={date}
        search={search}
        setSearch={setSearch}
      />
      <StatusSection
        status={mapTableTypeToOrderStatus(activeTab) as OrderStatus}
        date={date}
        search={search}
      />
    </main>
  );
};

export default StatusPage;

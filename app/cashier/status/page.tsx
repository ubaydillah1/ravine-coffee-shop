"use client";

import React from "react";
import StatusSection from "@/features/cashier/components/StatusSection";
import StatusFilterBar from "@/components/StatusFilterBar";

const StatusPage = () => {
  const [activeTab, setActiveTab] = React.useState("All Orders");

  return (
    <main className="px-[24px] flex-1 flex flex-col">
      <StatusFilterBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        title="Order Status"
      />
      <StatusSection />
    </main>
  );
};

export default StatusPage;

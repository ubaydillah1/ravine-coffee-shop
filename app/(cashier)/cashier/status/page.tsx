import StatusHeader from "@/features/(cashier)/components/StatusHeader";
import StatusSection from "@/features/(cashier)/components/StatusSection";
import React from "react";

const StatusPage = () => {
  return (
    <main className="px-[24px] flex-1 flex flex-col">
      <StatusHeader />
      <StatusSection />
    </main>
  );
};

export default StatusPage;

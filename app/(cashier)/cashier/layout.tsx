import Sidebar from "@/features/(cashier)/components/Sidebar";
import React from "react";

const CashierPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden max-w-[1280px] mx-auto">
      <Sidebar />
      {children}
    </div>
  );
};

export default CashierPage;

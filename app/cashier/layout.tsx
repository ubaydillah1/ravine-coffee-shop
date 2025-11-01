import AuthGuard from "@/components/AuthGuard";
import ErrorDialog from "@/components/ErrorDialog";
import Sidebar from "@/features/cashier/components/Sidebar";
import React from "react";

const CashierPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden max-w-[1280px] mx-auto non-draggable">
      <Sidebar />
      <AuthGuard allowedRoles={["CASHIER"]}>{children}</AuthGuard>
      <ErrorDialog  />
    </div>
  );
};

export default CashierPage;

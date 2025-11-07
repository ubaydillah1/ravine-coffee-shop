import AuthGuard from "@/components/AuthGuard";
import ErrorDialog from "@/components/ErrorDialog";
import Sidebar from "@/features/cashier/components/Sidebar";
import React from "react";

const CashierPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="lg:flex h-screen overflow-hidden max-w-[1280px] mx-auto non-draggable hidden">
        <Sidebar />
        <AuthGuard allowedRoles={["CASHIER"]}>{children}</AuthGuard>
        <ErrorDialog />
      </div>

      <div className="flex-center min-h-screen lg:hidden">
        <p>
          Mobile version is not available yet — it’s coming soon. Please use a
          desktop or landscape tablet for now
        </p>
      </div>
    </>
  );
};

export default CashierPage;

import React from "react";
import Sidebar from "../../features/admin/components/Sidebar";
import Header from "@/features/admin/components/Header";
import AuthGuard from "@/components/AuthGuard";
import ErrorDialog from "@/components/ErrorDialog";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <AuthGuard allowedRoles={["ADMIN"]}>
          <main className="px-[16px] sm:px-[40px] flex-1 overflow-auto hide-scrollbar">
            <ErrorDialog  />
            {children}
          </main>
        </AuthGuard>
      </div>
    </div>
  );
};

export default Layout;

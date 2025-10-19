import React from "react";
import Sidebar from "../../features/admin/components/Sidebar";
import Header from "@/features/admin/components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="px-[16px] sm:px-[40px] flex-1 overflow-auto hide-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

import ErrorDialog from "@/components/ErrorDialog";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-300">
      <div className="max-w-[390px] w-full mx-auto relative bg-neutral-n100 sm:border-x sm:rounded-2xl sm:shadow-lg">
        {children}
        <ErrorDialog />
      </div>
    </div>
  );
};

export default Layout;

import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[650px] mx-auto relative bg-neutral-n100">
      {children}
    </div>
  );
};

export default Layout;

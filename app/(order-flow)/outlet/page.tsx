import Header from "@/components/Header";
import OperationalHours from "@/features/user/outlet/components/OperationalHours";
import OutletCard from "@/features/user/outlet/components/OutletCard";
import React from "react";

const OutletPage = () => {
  return (
    <main>
      <Header title="Outlet Info" withBackArrow={true} />
      <OutletCard />
      <OperationalHours />
    </main>
  );
};

export default OutletPage;

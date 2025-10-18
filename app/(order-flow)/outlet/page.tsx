import Header from "@/components/Header";
import OperationalHours from "@/features/order-flow/outlet/components/OperationalHours";
import OutletCard from "@/features/order-flow/outlet/components/OutletCard";
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

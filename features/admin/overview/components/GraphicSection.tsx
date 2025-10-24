import React from "react";
import RevenueOrderSection from "./RevenueOrderSection";
import OrderTypeSection from "./OrderTypeSection";
import PaymentMethodSection from "./PaymentMethodSection";
import CategorySalesSection from "./CategorySalesSection";
import { Period } from "../api/getOverview";

const GraphicSection = ({ period }: { period: Period }) => {
  return (
    <div className="flex-1 flex flex-col gap-[24px]">
      <RevenueOrderSection />

      <div className="flex gap-[24px]">
        <OrderTypeSection period={period} />
        <PaymentMethodSection period={period} />
      </div>

      <CategorySalesSection period={period} />
    </div>
  );
};

export default GraphicSection;

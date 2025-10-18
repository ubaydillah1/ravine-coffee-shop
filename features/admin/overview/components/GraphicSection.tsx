import React from "react";
import RevenueOrderSection from "./RevenueOrderSection";
import OrderTypeSection from "./OrderTypeSection";
import PaymentMethodSection from "./PaymentMethodSection";
import CategorySalesSection from "./CategorySalesSection";

const GraphicSection = () => {
  return (
    <div className="flex-1 flex flex-col gap-[24px]">
      <RevenueOrderSection />

      <div className="flex gap-[24px]">
        <OrderTypeSection />
        <PaymentMethodSection />
      </div>

      <CategorySalesSection />
    </div>
  );
};

export default GraphicSection;

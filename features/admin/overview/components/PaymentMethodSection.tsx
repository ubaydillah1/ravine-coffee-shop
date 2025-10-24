import React from "react";
import ComparisonPieChart from "./charts/ComparisonPieChart";
import { Period } from "../api/getOverview";
import { useGetPaymentMethods } from "../hooks/useGetPaymentMethods";
import { GetPaymentMethodsPayload } from "../api/getPaymentMethods";

const PaymentMethodSection = ({ period }: { period: Period }) => {
  const { data, isPending } = useGetPaymentMethods({ period });

  const chartData =
    data?.map((d: GetPaymentMethodsPayload) => ({
      name:
        d.method === "QRIS" ? "Qris" : d.method === "CASH" ? "Cash" : d.method,
      value: d.percentage,
      color: d.method === "QRIS" ? "#C9ad91" : "#F5f0eb",
    })) || [];

  return (
    <div className="flex flex-col gap-[12px] sm:gap-[24px] p-[12px] sm:p-[24px] border rounded-[16px] border-neutral-n300 w-full">
      <p className="sm:b1-b l3-b text-neutral-n900 font-bold">
        Payment Methods
      </p>
      <div className="mx-auto">
        <ComparisonPieChart
          type="payment"
          data={chartData}
          isPending={isPending}
        />
      </div>
    </div>
  );
};

export default PaymentMethodSection;

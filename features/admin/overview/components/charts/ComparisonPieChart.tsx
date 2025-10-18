/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const defaultOrderTypeData = [
  { name: "Dine In", value: 35, color: "#C9ad91" },
  { name: "Take Away", value: 25, color: "#F5f0eb" },
];

const defaultPaymentMethodData = [
  { name: "Qris", value: 45, color: "#C9ad91" },
  { name: "Cash", value: 20, color: "#F5f0eb" },
];

interface PieChartProps {
  type?: "order" | "payment";
  data?: { name: string; value: number; color?: string }[];
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <foreignObject x={x - 30} y={y - 10} width={60} height={20}>
      <div className="l3-r text-center text-neutral-n700 text-[5.6px] sm:text-[12px]">
        {name}
      </div>
    </foreignObject>
  );
};

export const ComparisonPieChart = ({ type, data }: PieChartProps) => {
  const chartData =
    data ||
    (type === "order"
      ? defaultOrderTypeData
      : type === "payment"
      ? defaultPaymentMethodData
      : defaultOrderTypeData);

  return (
    <div className="sm:w-[193px] sm:h-[193px] w-[90px] h-[90px]">
      <ResponsiveContainer
        width="100%"
        height="100%"
        className={"l3-r text-[5.67px] sm:text-[12px]"}
      >
        <RechartsPieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius="100%"
            fill="#8884d8"
            dataKey="value"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || "#b8956a"} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonPieChart;

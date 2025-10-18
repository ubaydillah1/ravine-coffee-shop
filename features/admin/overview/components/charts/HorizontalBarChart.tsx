/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

const data = [
  { category: "Coffee", sales: 50 },
  { category: "Tea", sales: 18 },
  { category: "Pastry", sales: 22 },
  { category: "Juice", sales: 12 },
  { category: "Bread", sales: 15 },
  { category: "Dessert", sales: 10 },
];

const BAR_COLOR = "#c9ad91";
const BORDER_COLOR = "#8b6d4f";

const CustomBar = (props: any) => {
  const { x, y, width, height } = props;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={BAR_COLOR} />
      <rect
        x={x + width - 3}
        y={y}
        width={3}
        height={height}
        fill={BORDER_COLOR}
      />
    </g>
  );
};

export default function HorizontalBarChart() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-w-full h-[135px] sm:h-[300px] l3-r text-[5.67px] sm:text-[12px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          layout="vertical"
          margin={{ left: isSmall ? -20 : 0, top: -10 }}
          barCategoryGap={8}
        >
          <XAxis
            type="number"
            stroke="#6b7280"
            tickCount={11}
            tickFormatter={(value) => `${value}%`}
            tickLine={false}
            axisLine={false}
            orientation="top"
          />
          <YAxis
            dataKey="category"
            type="category"
            stroke="#6b7280"
            tickLine={false}
            width={50}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
            }}
            formatter={(value) => `${value}%`}
            cursor={{ fill: "#f5f5f5" }}
          />
          <Bar
            dataKey="sales"
            shape={<CustomBar />}
            barSize={isSmall ? 13 : 25}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}

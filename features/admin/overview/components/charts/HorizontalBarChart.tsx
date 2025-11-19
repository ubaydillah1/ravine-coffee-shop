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

type HorizontalBarData = {
  category: string;
  total: number;
};

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

export default function HorizontalBarChart({
  data,
  isPending,
}: {
  data: HorizontalBarData[];
  isPending: boolean;
}) {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isPending) {
    return (
      <div className="min-w-full h-[135px] sm:h-[300px] flex flex-col justify-center gap-3 animate-pulse">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-[20px] sm:h-[30px] w-full bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 rounded-[8px]"
            style={{
              animation: "shimmer 1.5s infinite linear",
              backgroundSize: "200% 100%",
            }}
          ></div>
        ))}
        <style jsx>{`
          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
        `}</style>
      </div>
    );
  }

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
            tickFormatter={(value) => `${Math.round(Number(value))}%`}
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
            formatter={(value) => `${Math.round(Number(value))}%`}
            cursor={{ fill: "#f5f5f5" }}
          />
          <Bar
            dataKey="total"
            shape={<CustomBar />}
            barSize={isSmall ? 13 : 25}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}

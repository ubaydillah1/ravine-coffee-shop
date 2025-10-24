/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { RevenuePeriod } from "../../api/getRevenue";

// INI ADALAH TIPE DATA YANG DIHARAPKAN KOMPONEN INI
export interface ChartData {
  name: string;
  CurrentPeriod: number;
  LastPeriod: number;
  amt: number;
}

interface BarShapeProps {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    dataKey: string;
    value: number;
  }[];
  label?: string;
}

// PERBAIKAN: KOMPONEN INI SEHARUSNYA MENGHARAPKAN ChartData[]
interface ComparisonBarChartProps {
  data: ChartData[] | undefined;
  isPending: boolean;
  period: RevenuePeriod;
}

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

const CustomLegend = ({ period }: { period: RevenuePeriod }) => {
  const currentText =
    period === "weekly"
      ? "This Week"
      : period === "monthly"
      ? "This Month"
      : "This Year";
  const lastText =
    period === "weekly"
      ? "Last Week"
      : period === "monthly"
      ? "Last Month"
      : "Last Year";

  return (
    <div
      style={{ display: "flex" }}
      className="w-full flex-center sm:mt-[24px] sm:gap-[1rem] gap-[8px]"
    >
      <div
        style={{ display: "flex", alignItems: "center" }}
        className="sm:gap-[0.5rem] gap-[4px]"
      >
        <div
          style={{
            borderRadius: 2,
            background: "#C9AD91",
          }}
          className="sm:size-[12px] size-[6px]"
        />
        <span className="text-neutral-n700 sm:l3-b text-[8px]">
          {currentText}
        </span>
      </div>

      <div
        style={{ display: "flex", alignItems: "center" }}
        className="sm:gap-[0.5rem] gap-[4px]"
      >
        <div
          style={{
            borderRadius: 2,
            background: "#F5F0EB",
            border: "1px solid #d5c9b8",
          }}
          className="sm:size-[12px] size-[6px]"
        />
        <span className="text-neutral-n700 sm:l3-b text-[8px]">{lastText}</span>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const current = payload.find((p) => p.dataKey === "CurrentPeriod");
    const last = payload.find((p) => p.dataKey === "LastPeriod");

    return (
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e5e5e5",
          borderRadius: "8px",
          padding: "8px 12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        }}
      >
        <p style={{ margin: 0, fontWeight: 700 }}>{label}</p>

        {last && (
          <p style={{ margin: "4px 0 0 0", fontSize: "13px" }}>
            Last: <span>{last.value.toLocaleString()}</span>
          </p>
        )}

        {current && (
          <p style={{ margin: "2px 0 0 0", fontSize: "13px" }}>
            Current: <span>{current.value.toLocaleString()}</span>
          </p>
        )}
      </div>
    );
  }

  return null;
};

const ChartSkeleton = () => (
  <div
    className="w-full h-[300px] bg-gray-100 rounded-lg flex flex-col justify-end animate-pulse overflow-hidden"
    style={{ aspectRatio: 1.618 }}
  >
    <div className="flex justify-around items-end h-[85%] p-4">
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className="w-8 mx-1 bg-gray-300 rounded-t-lg"
          style={{ height: `${20 + Math.random() * 70}%` }}
        />
      ))}
    </div>
    <div className="h-[15%] flex justify-center items-center">
      <div className="h-2 w-full bg-gray-200" />
    </div>
  </div>
);

const ComparisonBarChart = ({
  data,
  isPending,
  period,
}: ComparisonBarChartProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  if (isPending) {
    return <ChartSkeleton />;
  }

  if (!data || data.length === 0) {
    return (
      <div className="p-4 text-center text-neutral-n600">
        Tidak ada data pendapatan untuk periode ini.
      </div>
    );
  }

  return (
    <BarChart
      style={{
        width: "100%",
        maxHeight: "364px",
        aspectRatio: 1.618,
      }}
      className="text-neutral-n700! l3-r!"
      responsive
      data={data} 
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <Legend content={<CustomLegend period={period} />} />
      <XAxis
        dataKey="name"
        tickLine={false}
        tickFormatter={(value: string) => {
          if (period === "annual") return value;
          if (isMobile) return value.slice(0, 3);
          return value;
        }}
        className="text-neutral-n700 text-[8px] sm:l3-r"
      />
      <YAxis
        width="auto"
        axisLine={false}
        tickLine={false}
        tickFormatter={(value: number) => {
          // Cari nilai terbesar dari dataset untuk menentukan skala
          const maxValue = Math.max(
            ...data.map((d) => Math.max(d.CurrentPeriod, d.LastPeriod))
          );

          let divisor = 1;
          let suffix = "";

          if (maxValue >= 1_000_000_000) {
            divisor = 1_000_000_000;
            suffix = " Miliar";
          } else if (maxValue >= 1_000_000) {
            divisor = 1_000_000;
            suffix = " Juta";
          } else if (maxValue >= 1_000) {
            divisor = 1_000;
            suffix = " Ribu";
          }

          const num = value / divisor;
          const formatted = num % 1 === 0 ? num.toFixed(0) : num.toFixed(1);

          return `${formatted}${suffix}`;
        }}
        className="text-neutral-n700 text-[8px] sm:l3-r"
      />
      <Tooltip
        content={<CustomTooltip />}
        cursor={{ fill: "rgba(0,0,0,0.04)" }}
      />

      <Bar
        dataKey="CurrentPeriod"
        fill="#C9Ad91"
        shape={(props: any) => {
          const { x, y, width, height, fill } = props as BarShapeProps;
          return (
            <g>
              <rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill={fill}
                rx={2}
                shapeRendering="geometricPrecision"
              />
              <rect x={x} y={y - 2} width={width} height={3} fill="#8b5e3c" />
            </g>
          );
        }}
      />

      <Bar
        dataKey="LastPeriod"
        fill="#F5F0EB"
        shape={(props: any) => {
          const { x, y, width, height, fill } = props as BarShapeProps;
          return (
            <g>
              <rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill={fill}
                rx={2}
              />
              <rect x={x} y={y - 2} width={width} height={3} fill="#EEE6de" />
            </g>
          );
        }}
      />
    </BarChart>
  );
};

export default ComparisonBarChart;

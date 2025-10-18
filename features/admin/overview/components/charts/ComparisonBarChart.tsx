/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

interface ChartData {
  name: string;
  Lastweek: number;
  pv: number;
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

interface SimpleBarChartProps {
  data?: ChartData[];
}

const defaultData: ChartData[] = [
  { name: "Monday", Lastweek: 4000, pv: 2400, amt: 2400 },
  { name: "Tuesday", Lastweek: 3000, pv: 1398, amt: 2210 },
  { name: "Wednesday", Lastweek: 2000, pv: 9800, amt: 2290 },
  { name: "Thursday", Lastweek: 2780, pv: 3908, amt: 2000 },
  { name: "Friday", Lastweek: 1890, pv: 4800, amt: 2181 },
  { name: "Saturday", Lastweek: 2390, pv: 3800, amt: 2500 },
  { name: "Sunday", Lastweek: 3490, pv: 4300, amt: 2100 },
];

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

const CustomLegend = () => {
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
        <span className="text-neutral-n700 sm:l3-b text-[8px]">This Week</span>
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
        <span className="text-neutral-n700 sm:l3-b text-[8px]">Last Week</span>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const current = payload.find((p) => p.dataKey === "pv");
    const last = payload.find((p) => p.dataKey === "Lastweek");

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
            Last Week: <span>{last.value.toLocaleString()}</span>
          </p>
        )}

        {current && (
          <p style={{ margin: "2px 0 0 0", fontSize: "13px" }}>
            This Week: <span>{current.value.toLocaleString()}</span>
          </p>
        )}
      </div>
    );
  }

  return null;
};

const ComparisonBarChart = ({ data = defaultData }: SimpleBarChartProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

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
      <Legend content={<CustomLegend />} />
      <XAxis
        dataKey="name"
        tickLine={false}
        tickFormatter={(value: string) =>
          isMobile ? value.slice(0, 3) : value
        }
        className="text-neutral-n700 text-[8px] sm:l3-r"
      />
      <YAxis
        width="auto"
        axisLine={false}
        tickLine={false}
        tickFormatter={(value: number) => {
          const num = value / 1000;
          return `${num % 1 === 0 ? num.toFixed(0) : num.toFixed(1)} jt`;
        }}
        className="text-neutral-n700 text-[8px] sm:l3-r"
      />
      <Tooltip
        content={<CustomTooltip />}
        cursor={{ fill: "rgba(0,0,0,0.04)" }}
      />

      <Bar
        dataKey="pv"
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
        dataKey="Lastweek"
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

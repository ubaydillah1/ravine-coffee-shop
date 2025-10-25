"use client";

import * as React from "react";
import { RangeDropdown } from "./RangeDropdown";
import { Period } from "../api/getOverview";

export const Title = ({
  setPeriod,
}: {
  setPeriod: (period: Period) => void;
}) => {
  const ranges = ["Today", "This week", "This month"];

  const handleRangeChange = (value: string) => {
    if (value === "Today") setPeriod("today");
    if (value === "This week") setPeriod("this-week");
    if (value === "This month") setPeriod("this-month");
  };

  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="sm:sub-h1 b1-b">Performance Summary</h1>

      <RangeDropdown
        ranges={ranges}
        defaultValue="Today"
        onChange={handleRangeChange}
      />
    </div>
  );
};

"use client";

import * as React from "react";
import { RangeDropdown } from "./RangeDropdown";

export const Title: React.FC = () => {
  const ranges = ["Today", "This week", "This month"];

  const handleRangeChange = (value: string) => {
    console.log("Selected range:", value);
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

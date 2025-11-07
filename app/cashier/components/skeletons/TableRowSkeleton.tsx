"use client";

import React from "react";

const TableRowSkeleton = () => {
  return (
    <tr className="animate-pulse bg-white">
      {Array(4)
        .fill(null)
        .map((_, j) => (
          <td key={j} className="px-[32px] py-[16px]">
            <div className="h-[16px] w-[80%] bg-neutral-n200 rounded-md" />
          </td>
        ))}
    </tr>
  );
};

export default TableRowSkeleton;

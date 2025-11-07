"use client";

import React from "react";
import TableRowSkeleton from "./TableRowSkeleton";
import MobileCardSkeleton from "./CashierMobileCardSkeleton";

const CashierInfiniteScrollSkeleton = () => {
  return (
    <>
      <div className="hidden sm:table-row-group">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <TableRowSkeleton key={`inf-desktop-${i}`} />
          ))}
      </div>

      <div className="block sm:hidden">
        {Array(2)
          .fill(null)
          .map((_, i) => (
            <MobileCardSkeleton key={`inf-mobile-${i}`} />
          ))}
      </div>
    </>
  );
};

export default CashierInfiniteScrollSkeleton;

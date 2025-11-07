"use client";

import React from "react";
import TableRowSkeleton from "./TableRowSkeleton";
import MobileCardSkeleton from "./CashierMobileCardSkeleton";

const CashierPendingSkeleton = () => {
  return (
    <section className="py-[40px] space-y-[24px]">
      <span className="sub-h1">Loading Cashiers...</span>

      <div className="hidden sm:block overflow-y-scroll hide-scrollbar mt-[24px]">
        <table className="w-full text-sm border-separate border-spacing-y-[24px] -mt-[24px] pb-[24px]">
          <tbody>
            {Array(10)
              .fill(null)
              .map((_, i) => (
                <TableRowSkeleton key={i} />
              ))}
          </tbody>
        </table>
      </div>

      <div className="block sm:hidden mt-[16px]">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <MobileCardSkeleton key={i} />
          ))}
      </div>
    </section>
  );
};

export default CashierPendingSkeleton;

import React from "react";
import Search from "@/public/assets/icons/search.svg";
import SortDropdown from "@/features/cashier/components/SortDropdown";
import FilterDropdown from "@/features/cashier/components/FilterDropdown";

const StatusHeader = () => {
  return (
    <header className="flex justify-between items-center w-full mt-[23px]">
      <h1 className="sub-h1">Order Status</h1>

      <div className="flex gap-[24px]">
        <div
          className="w-[348px] rounded-[6px] border border-neutral-n400 p-[11px] flex items-center gap-[8px] 
     focus-within:border-neutral-n500 focus-within:text-neutral-n900"
        >
          <Search className="size-[20px] group-focus-within:text-neutral-n900 text-neutral-n700" />

          <input
            className="focus:outline-0 w-full b2-r text-neutral-n700 placeholder:text-neutral-n700"
            placeholder="Search order ID or customer’s name"
          />
        </div>

        <SortDropdown />
        <FilterDropdown />
      </div>
    </header>
  );
};

export default StatusHeader;

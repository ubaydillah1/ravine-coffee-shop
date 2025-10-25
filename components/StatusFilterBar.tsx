"use client";

import React from "react";
import Search from "@/public/assets/icons/search.svg";
import { DatePicker } from "@/components/ui/date-picker";
import { cn } from "@/lib/utils";
import { OrderTableType } from "@/types/order";

interface StatusFilterBarProps {
  activeTab: OrderTableType;
  onTabChange: (tab: OrderTableType) => void;
  showSearch?: boolean;
  title?: string;
  mobileTitle?: string;
  date?: Date;
  setDate: (date: Date | undefined) => void;
}

const tabs: { label: string; value: OrderTableType }[] = [
  { label: "All Orders", value: "all-orders" },
  { label: "Completed", value: "completed" },
  { label: "In Progress", value: "in-progress" },
  { label: "Open Bill", value: "open-bill" },
  { label: "Canceled", value: "canceled" },
];

export const StatusFilterBar = ({
  activeTab,
  onTabChange,
  showSearch = true,
  title,
  mobileTitle,
  date,
  setDate,
}: StatusFilterBarProps) => {
  return (
    <header
      className={cn(
        "flex flex-col w-full",
        title ? "gap-[24px] mt-[40px]" : "mt-[8px]"
      )}
    >
      {title && <h1 className="sub-h1">{title}</h1>}

      <div className="flex sm:justify-between w-full sm:items-center sm:flex-row flex-col gap-[16px]">
        <div className="flex gap-[24px] overflow-x-scroll hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => onTabChange(tab.value)}
              className={cn(
                "transition-all duration-150 cursor-pointer shrink-0",
                activeTab === tab.value
                  ? "l2-b sm:b1-b text-neutral-n900 underline"
                  : "b2-r text-neutral-n600 hover:text-neutral-n800"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex gap-[24px] items-center -order-1 sm:order-0 justify-end sm:justify-start">
          {showSearch && (
            <div
              className="w-[220px] rounded-[6px] border border-neutral-n400 p-[11px] flex items-center gap-[8px]
              focus-within:border-neutral-n500 focus-within:text-neutral-n900"
            >
              <Search className="size-[20px] text-neutral-n600 group-focus-within:text-neutral-n900" />
              <input
                className="focus:outline-0 w-full b3-r text-neutral-n700 placeholder:text-neutral-n600"
                placeholder="Search order ID or customer"
              />
            </div>
          )}

          <div className="w-full flex justify-between items-center">
            <p className="b1-b text-neutral-n900 sm:hidden">{mobileTitle}</p>
            <DatePicker value={date} onChange={setDate} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default StatusFilterBar;

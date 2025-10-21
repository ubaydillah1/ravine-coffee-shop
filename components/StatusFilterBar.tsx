"use client";

import React from "react";
import Search from "@/public/assets/icons/search.svg";
import { DatePicker } from "@/components/ui/date-picker";
import { cn } from "@/lib/utils";

interface StatusFilterBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showSearch?: boolean;
  title?: string;
  mobileTitle?: string;
}

const tabs = [
  "All Orders",
  "Completed",
  "In Progress",
  "Open Bill",
  "Canceled",
];

export const StatusFilterBar = ({
  activeTab,
  onTabChange,
  showSearch = true,
  title,
  mobileTitle,
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
              key={tab}
              onClick={() => onTabChange(tab)}
              className={cn(
                "transition-all duration-150 cursor-pointer shrink-0",
                activeTab === tab
                  ? "l2-b sm:b1-b text-neutral-n900 underline"
                  : "b2-r text-neutral-n600 hover:text-neutral-n800"
              )}
            >
              {tab}
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
            <DatePicker />
          </div>
        </div>
      </div>
    </header>
  );
};

export default StatusFilterBar;

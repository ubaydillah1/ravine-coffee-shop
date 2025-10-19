"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ChevronDown from "@/public/assets/icons/chevron-down.svg";

interface RangeDropdownProps {
  ranges: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const RangeDropdown: React.FC<RangeDropdownProps> = ({
  ranges,
  defaultValue,
  onChange,
}) => {
  const [selected, setSelected] = React.useState<string>(
    defaultValue || ranges[0]
  );

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="none"
          className="flex items-center gap-2 text-sm font-medium px-0 active:ring-0 active:border-0 text-[12px] sm:text-[14px] l2-b"
        >
          {selected}
          <ChevronDown className="w-4 h-4 opacity-70" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="p-[8px] rounded-[8px] dark:bg-neutral-900 bg-white shadow-md"
      >
        {ranges.map((range) => (
          <DropdownMenuItem
            key={range}
            onClick={() => handleSelect(range)}
            className={`${
              selected === range
                ? "font-semibold text-gray-900 dark:text-gray-100"
                : "text-gray-500"
            } cursor-pointer l2-b text-[12px] sm:text-[14px]`}
          >
            {range}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

"use client";

import React from "react";
import Chair from "@/public/assets/icons/chair.svg";
import { useTableStore } from "@/store/useTableStore";

const TableNumber = () => {
  const tableNumber = useTableStore((state) => state.tableNumber);
  return (
    <div className="bg-neutral-n100 border border-neutral-n300 flex gap-[8px] p-[11px] rounded-[6px] items-center">
      <Chair className="size-[24px]" />

      <span className="b3-r text-neutral-n700">{tableNumber ?? "..."}</span>
    </div>
  );
};

export default TableNumber;

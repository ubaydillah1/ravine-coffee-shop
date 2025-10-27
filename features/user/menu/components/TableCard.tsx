"use client";

import { useTableStore } from "@/store/useTableStore";

const TableCard = () => {
  const { tableNumber } = useTableStore();

  return (
    <div className="h-[45px] flex-center text-neutral-n900 b2-b bg-primary-b200 rounded-[8px] border border-neutral-n300">
      Table Number {tableNumber ?? "..."}
    </div>
  );
};

export default TableCard;

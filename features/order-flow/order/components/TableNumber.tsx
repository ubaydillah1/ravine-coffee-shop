import React from "react";
import Chair from "@/public/assets/icons/chair.svg";

const TableNumber = () => {
  return (
    <div className="bg-neutral-n100 border border-neutral-n300 flex gap-[8px] p-[11px] rounded-[6px] items-center">
      <Chair className="size-[24px]" />

      <span className="b3-r text-neutral-n700">23</span>
    </div>
  );
};

export default TableNumber;

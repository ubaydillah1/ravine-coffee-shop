import React from "react";

const TableCard = ({ tableNumber }: { tableNumber: number }) => {
  return (
    <div className="h-[45px] flex-center text-neutral-n900 b2-b bg-primary-b200 rounded-[8px] border border-neutral-n300">
      Table Number {tableNumber}
    </div>
  );
};

export default TableCard;

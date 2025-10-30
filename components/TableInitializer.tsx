"use client";

import { useEffect } from "react";
import { useTableStore } from "@/store/useTableStore";

const TableInitializer = ({ tableNumber }: { tableNumber: string }) => {
  const { setTableNumber } = useTableStore();

  useEffect(() => {
    setTableNumber(tableNumber);
  }, [setTableNumber, tableNumber]);

  return null;
};

export default TableInitializer;

"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Exclamation from "@/public/assets/icons/Blood.svg";
import Link from "next/link";
import { useTableStore } from "@/store/useTableStore";

const ExpiredPage = () => {
  const tableNumber = useTableStore((state) => state.tableNumber);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-n50 p-6">
      <div className="bg-white shadow-md rounded-[12px] px-[32px] py-[40px] max-w-[420px] text-center flex flex-col items-center gap-[20px]">
        <div className="size-[80px] bg-red-100 rounded-full flex items-center justify-center">
          <Exclamation className="text-red-600 size-[40px]" />
        </div>

        <h1 className="h3 text-black">QR Code Expired</h1>

        <p className="text-neutral-n700 b2-r">
          We are sorry, but an unexpected error has occurred. Please try again
          in a few moments.
        </p>

        <Link href={tableNumber ? `/menu/t/${tableNumber}` : "/"}>
          <Button className="w-full mt-[12px">
            {tableNumber ? "Go to Menu" : "Back to Home"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ExpiredPage;

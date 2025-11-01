"use client";

import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";
import React, { useState } from "react";

const InputCodeCashier = () => {
  const { totalItems } = useCartStore();
  const [value, setValue] = useState("");

  return (
    <div
      className={cn(
        "flex-center flex-col gap-[24px] h-full",
        totalItems() > 0 && "hidden"
      )}
    >
      <div className="text-center space-y-[8px]">
        <h2 className="sub-h1">Code from customer</h2>
        <p className="b2-r text-neutral-n700">
          Add 8 digit code from customer or scan
        </p>
      </div>

      <div className="w-full p-[12px] border rounded-[6px] border-neutral-n400">
        <input
          className="w-full focus:outline-0 text-neural-n400!"
          value={value}
          onChange={(e) => setValue(e.target.value.toUpperCase())}
        />
      </div>
    </div>
  );
};

export default InputCodeCashier;

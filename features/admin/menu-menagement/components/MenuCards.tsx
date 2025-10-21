"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const MenuCards = () => {
  const [displayStates, setDisplayStates] = useState(Array(10).fill(true));

  const handleToggle = (index: number) => {
    setDisplayStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <section className="w-full flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[16px] sm:gap-[32px]">
      {Array(10)
        .fill(null)
        .map((_, i) => {
          const active = displayStates[i];

          return (
            <div
              key={i}
              className="border border-neutral-n100 rounded-[16px] p-[16px] flex flex-col gap-[16px]"
            >
              <div className="bg-[#fdf7f1] rounded-[12px] p-[2px]">
                <div className="w-full aspect-square relative">
                  <Image
                    src="/assets/images/Varian 1.png"
                    alt="coffee"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-[8px]">
                <Badge className="text-white">Coffee</Badge>
                <p className="l2-b">Hazelnut Latte</p>
                <p className="l2-r text-neutral-n700">Rp20.000</p>
              </div>

              <div className="flex justify-between items-center pt-[8px] border-t border-neutral-n100">
                <span className="l3-r text-neutral-n800">Display</span>

                <button
                  onClick={() => handleToggle(i)}
                  className="relative w-[40px] h-[22px] flex items-center rounded-full transition-colors"
                  style={{
                    backgroundColor: active ? "#a37343" : "#d4d4d4",
                  }}
                >
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 600, damping: 30 }}
                    className="absolute bg-white rounded-full w-[18px] h-[18px] shadow-sm"
                    style={{
                      left: active ? "calc(100% - 20px)" : "2px",
                    }}
                  />
                </button>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default MenuCards;

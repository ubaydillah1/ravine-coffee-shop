"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { Category } from "@/features/admin/menu-menagement/types";

const categories = [
  { name: "Coffee", icon: "/assets/colored-icons/Coffee.svg" },
  { name: "Milk", icon: "/assets/colored-icons/Milk.png" },
  { name: "Tea", icon: "/assets/colored-icons/Tea.png" },
  { name: "Food", icon: "/assets/colored-icons/Food.png" },
  { name: "Snack", icon: "/assets/colored-icons/Snack.png" },
  { name: "Bundle", icon: "/assets/colored-icons/Bundle.png" },
];

interface CategoryButtonListProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CategoryButtonList = ({
  activeCategory,
  onSelectCategory,
}: CategoryButtonListProps) => {
  return (
    <div className="flex gap-[24px] sm:gap-[40px] overflow-x-scroll hide-scrollbar justify-between min-w-0 shrink-0">
      {categories.map(({ name, icon }) => {
        const lowerName = name.toLowerCase() as Category;
        const isActive = activeCategory === lowerName;

        return (
          <button
            key={name}
            onClick={() => onSelectCategory(lowerName)}
            className={clsx(
              "flex items-center gap-[12px] sm:gap-[16px] px-[20px] sm:px-[24px] py-[10px] sm:py-[12px] rounded-[8px] transition-colors w-full min-w-[120px]",
              isActive
                ? "bg-neutral-n200"
                : "bg-neutral-n100 hover:bg-neutral-n200"
            )}
          >
            <div
              className={clsx(
                "relative flex items-center justify-center bg-white rounded-full size-[24px] sm:size-[32px] shrink-0",
                isActive && "ring-2 ring-neutral-n400"
              )}
            >
              <Image
                src={icon}
                alt={name}
                fill
                sizes="100%"
                className="object-contain p-[4px]"
              />
            </div>
            <span
              className={clsx(
                "b2-b sm:l1-b whitespace-nowrap transition-colors",
                isActive ? "text-neutral-n900" : "text-neutral-n700"
              )}
            >
              {name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryButtonList;

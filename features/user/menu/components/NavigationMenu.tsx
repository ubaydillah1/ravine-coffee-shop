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

interface NavigationMenuProps {
  category: Category;
  onSelectCategory: (category: Category) => void;
}

const NavigationMenu = ({
  category,
  onSelectCategory,
}: NavigationMenuProps) => {
  return (
    <nav className="w-full flex items-center gap-[20px] overflow-x-scroll hide-scrollbar px-[21px] pt-[16px] bg-white">
      {categories.map(({ name, icon }) => {
        const lowerName = name.toLowerCase() as Category;
        const isActive = lowerName === category;

        return (
          <button
            key={name}
            onClick={() => onSelectCategory(lowerName)}
            className={clsx(
              "flex items-center gap-[12px] cursor-pointer transition-colors px-[20px] py-[10px] rounded-[8px] min-w-[120px]",
              isActive
                ? "bg-neutral-n200"
                : "bg-neutral-n100 text-neutral-n600 hover:bg-neutral-n200"
            )}
          >
            <div
              className={clsx(
                "relative flex items-center justify-center bg-white rounded-full size-[24px]",
                isActive && "ring-2 ring-primary-b200"
              )}
            >
              <Image
                src={icon}
                fill
                alt={name}
                sizes="100%"
                className="object-contain p-[4px]"
              />
            </div>

            <span className="l2-b whitespace-nowrap">{name}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default NavigationMenu;

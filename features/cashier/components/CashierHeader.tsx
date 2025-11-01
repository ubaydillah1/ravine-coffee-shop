"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

type Category = "coffee" | "milk" | "tea" | "food" | "snack" | "bundle";

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const categories = [
  { name: "Coffee", icon: "/assets/colored-icons/Coffee.svg" },
  { name: "Milk", icon: "/assets/colored-icons/Milk.png" },
  { name: "Tea", icon: "/assets/colored-icons/Tea.png" },
  { name: "Food", icon: "/assets/colored-icons/Food.png" },
  { name: "Snack", icon: "/assets/colored-icons/Snack.png" },
  { name: "Bundle", icon: "/assets/colored-icons/Bundle.png" },
];

interface CashierHeaderProps {
  activeCategory: Category;
  search: string;
  setSearch: (search: string) => void;
  onSelectCategory: (category: Category) => void;
}

const CashierHeader = ({
  activeCategory,
  onSelectCategory,
  search,
  setSearch,
}: CashierHeaderProps) => {
  const [localSearch, setLocalSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(localSearch);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [localSearch, setSearch]);

  return (
    <header className="flex flex-col gap-[24px] mt-[32px]">
      <div className="flex justify-between items-center w-full">
        <h1 className="sub-h1">Category</h1>

        <div className="flex items-center gap-[8px] p-[11px] rounded-[6px] border border-neutral-300 max-w-[348px] w-full bg-white">
          <SearchIcon className="size-[20px] text-neutral-500" />
          <input
            placeholder="Search for coffee"
            className="border-0 outline-none focus:ring-0 w-full text-neutral-700 placeholder-neutral-500 text-sm"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-scroll hide-scrollbar flex gap-[16px] sm:gap-[24px]">
        {categories.map(({ name, icon }) => {
          const lowerName = name.toLowerCase() as Category;
          const isActive = activeCategory === lowerName;

          return (
            <button
              key={name}
              onClick={() => onSelectCategory(lowerName)}
              className={clsx(
                "w-[97px] h-[117px] rounded-[8px] flex flex-col items-center justify-center gap-[8px] shrink-0 transition-all duration-200 ease-in-out cursor-pointer",
                isActive
                  ? "bg-neutral-n200 border-2 border-primary-b200 shadow-sm"
                  : "bg-neutral-n100 border border-neutral-200 hover:bg-neutral-n200"
              )}
            >
              <div className="flex items-center justify-center size-[40px] rounded-full bg-white p-[4px] shadow-sm">
                <Image
                  src={icon}
                  alt={name}
                  width={40}
                  height={40}
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/40x40/f3f4f6/000000?text=?";
                  }}
                />
              </div>
              <p
                className={clsx(
                  "l2-b whitespace-nowrap",
                  isActive ? "text-neutral-n900" : "text-neutral-n600"
                )}
              >
                {name}
              </p>
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default CashierHeader;

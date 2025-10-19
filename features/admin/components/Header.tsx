"use client";

import React from "react";
import Search from "@/public/assets/icons/search.svg";
import Bell from "@/public/assets/icons/bell.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import HamburgerButton from "./HamburgerButton";

const Header = () => {
  const pathname = usePathname();

  const rawTitle = pathname.split("/").pop() || "overview";

  const title = rawTitle
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return (
    <header className="py-[16px] px-[16px] sm:px-[40px] flex justify-between border-b border-neutral-n300 w-full">
      <div className="flex items-center gap-[16px]">
        <HamburgerButton />
        <span className="sm:sub-h1 b1-b">{title}</span>
      </div>

      <div className="flex gap-[16px] sm:gap-[24px] items-center">
        <Search
          className={`size-[24px] ${
            pathname.includes("search")
              ? "text-neutral-n900 brightness-125"
              : ""
          }`}
        />
        <Bell
          className={`size-[24px] ${
            pathname.includes("notifications")
              ? "text-neutral-n900 brightness-125"
              : ""
          }`}
        />
        <div className="rounded-full size-[32px] bg-black relative flex-center overflow-hidden">
          <Image src={"/assets/images/ba-image.png"} fill alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import Search from "@/public/assets/icons/search.svg";
import Bell from "@/public/assets/icons/bell.svg";
import Image from "next/image";

const Header = ({ title = "Overview" }: { title: string }) => {
  return (
    <header className="py-[16px] px-[16px] sm:px-[40px] flex justify-between border-b border-neutral-n300 w-full">
      <span className="sm:sub-h1 b1-b">{title}</span>

      <div className="flex gap-[24px] items-center">
        <Search className="size-[24px]" />
        <Bell className="size-[24px]" />

        <div className="rounded-full size-[32px] bg-black relative flex-center overflow-hidden">
          <Image src={"/assets/images/ba-image.png"} fill alt="avatar " />
        </div>
      </div>
    </header>
  );
};

export default Header;

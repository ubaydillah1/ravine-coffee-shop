import Image from "next/image";
import React from "react";
import Coffee from "@/public/assets/icons/coffe.svg";
import Hourglass from "@/public/assets/icons/Hourglass.svg";
import Logout from "@/public/assets/icons/log-out.svg";

const Sidebar = () => {
  return (
    <nav className="w-[159px] h-full py-[24px] px-[16px] flex flex-col justify-between items-center ">
      <div className="space-y-[24px]">
        <Image
          src={"/assets/images/logo.png"}
          width={127}
          height={69}
          alt="logo"
        />

        <div className="space-y-[40px]">
          <div className="flex-center cursor-pointer flex-col gap-[4px] text-neutral-n400 p-[16px] rounded-[8px]">
            <Coffee className="size-[32px] font-thin" />
            <p className="l2-b">Order</p>
          </div>
          <div className="flex-center cursor-pointer flex-col gap-[4px] p-[16px] rounded-[8px] bg-primary text-white">
            <Hourglass className="size-[32px]" />
            <p className="l2-b">Status</p>
          </div>
        </div>
      </div>

      <div className="flex-center w-full cursor-pointer flex-col gap-[4px] p-[16px] rounded-[8px] text-neutral-n400">
        <Logout className="size-[32px] rotate-180" />
        <p className="l2-b">Log out</p>
      </div>
    </nav>
  );
};

export default Sidebar;

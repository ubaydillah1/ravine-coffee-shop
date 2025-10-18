import React from "react";
import Logout from "@/public/assets/icons/log-out.svg";
import PieChart from "@/public/assets/icons/pie-chart.svg";
import History from "@/public/assets/icons/history.svg";
import Coffee from "@/public/assets/icons/coffe-1.svg";
import Users from "@/public/assets/icons/user.svg";
import Settings from "@/public/assets/icons/settings.svg";
import Coupon from "@/public/assets/icons/coupon.svg";
import Image from "next/image";

const Sidebar = () => {
  return (
    <nav className="w-[254px] h-screen p-[32px] hidden flex-col justify-between bg-neutral-n900 xl:flex ">
      <div className="space-y-[32px] w-full">
        <div className="w-full space-y-[24px]">
          <div className="relative w-full h-[69px]">
            <Image
              src={"/assets/images/white-logo.png"}
              fill
              alt="Logo"
              className="object-contain"
            />
          </div>

          <div className="w-full h-[1px] bg-neutral-500"></div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <span className="b1-b text-white">Dashboard</span>

          <div className="rounded-[4px] cursor-pointer py-[8px] px-[12px] hover:bg-neutral-n800 transition-all flex gap-[8px] text-white bg-neutral-n800 b2-r">
            <PieChart className="size-[20px]" />
            Overview
          </div>
          <div className="rounded-[4px] cursor-pointer py-[8px] px-[12px] hover:bg-neutral-n800 transition-all flex gap-[8px] text-white/32 b2-r">
            <History className="size-[20px]" />
            History
          </div>
          <div className="rounded-[4px] cursor-pointer py-[8px] px-[12px] hover:bg-neutral-n800 transition-all flex gap-[8px] text-white/32 b2-r">
            <Coffee className="size-[20px]" />
            Menu Management
          </div>
          <div className="rounded-[4px] cursor-pointer py-[8px] px-[12px] hover:bg-neutral-n800 transition-all flex gap-[8px] text-white/32 b2-r">
            <Coupon className="size-[20px]" />
            Voucher Management
          </div>
          <div className="rounded-[4px] cursor-pointer py-[8px] px-[12px] hover:bg-neutral-n800 transition-all flex gap-[8px] text-white/32 b2-r">
            <Users className="size-[20px]" />
            Cashier Account
          </div>
          <div className="rounded-[4px] cursor-pointer py-[8px] px-[12px] hover:bg-neutral-n800 transition-all flex gap-[8px] text-white/32 b2-r">
            <Settings className="size-[20px]" />
            Settings
          </div>
        </div>
      </div>

      <div className="flex-center gap-[8px] b2-r text-white/32 w-full py-[20px] hover:bg-neutral-n800 transition-all rounded-[4px] cursor-pointer">
        <Logout />
        <p className="font-bold">Logout</p>
      </div>
    </nav>
  );
};

export default Sidebar;

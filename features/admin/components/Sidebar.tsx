"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Logout from "@/public/assets/icons/log-out.svg";
import PieChart from "@/public/assets/icons/pie-chart.svg";
import History from "@/public/assets/icons/history.svg";
import Coffee from "@/public/assets/icons/coffe-1.svg";
// import Users from "@/public/assets/icons/user.svg";
// import Settings from "@/public/assets/icons/settings.svg";
// import Coupon from "@/public/assets/icons/coupon.svg";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/admin/overview", label: "Overview", Icon: PieChart },
    { href: "/admin/history", label: "History", Icon: History },
    { href: "/admin/menu-management", label: "Menu Management", Icon: Coffee },
    // { href: "/admin/voucher", label: "Voucher Management", Icon: Coupon },
    // { href: "/admin/cashier", label: "Cashier Account", Icon: Users },
    // { href: "/admin/settings", label: "Settings", Icon: Settings },
  ];

  return (
    <nav className="w-[254px] h-screen p-[32px] hidden flex-col justify-between bg-neutral-n900 xl:flex">
      <div className="space-y-[32px] w-full">
        <div className="w-full space-y-[24px]">
          <div className="relative w-full size-[69px]">
            <Image
              src={"/assets/images/white-logo.png"}
              fill
              alt="Logo"
              className="object-contain"
            />
          </div>
          <div className="w-full h-[1px] bg-neutral-500" />
        </div>

        <div className="flex flex-col gap-[16px]">
          <span className="b1-b text-white">Dashboard</span>
          {links.map(({ href, label, Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-[4px] cursor-pointer py-[8px] px-[12px] flex gap-[8px] transition-all b2-r ${
                  isActive
                    ? "bg-neutral-n800 text-white"
                    : "text-white/32 hover:bg-neutral-n800 hover:text-white"
                }`}
              >
                <Icon className="size-[20px]" />
                {label}
              </Link>
            );
          })}
        </div>
      </div>

      <Link
        href="/logout"
        className="flex-center gap-[8px] b2-r text-white/32 w-full py-[20px] hover:bg-neutral-n800 hover:text-white transition-all rounded-[4px] cursor-pointer"
      >
        <Logout />
        <p className="font-bold">Logout</p>
      </Link>
    </nav>
  );
};

export default Sidebar;

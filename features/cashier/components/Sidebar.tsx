"use client";

import Image from "next/image";
import React from "react";
import Coffee from "@/public/assets/icons/coffe.svg";
import Hourglass from "@/public/assets/icons/Hourglass.svg";
import Logout from "@/public/assets/icons/log-out.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-[159px] h-full py-[24px] px-[16px] flex flex-col justify-between items-center">
      <div className="space-y-[24px]">
        <Image
          src={"/assets/images/logo.png"}
          width={127}
          height={69}
          alt="logo"
        />

        <div className="space-y-[40px]">
          <Link
            href="/cashier/status"
            className={cn(
              "flex-center cursor-pointer flex-col gap-[4px] p-[16px] rounded-[8px] transition",
              isActive("/cashier/status")
                ? "bg-primary-b300 text-white"
                : "text-neutral-n400 hover:bg-neutral-100"
            )}
          >
            <Coffee className="size-[32px]" />
            <p className="l2-b">Order</p>
          </Link>

          <Link
            href="/cashier/order"
            className={cn(
              "flex-center cursor-pointer flex-col gap-[4px] p-[16px] rounded-[8px] transition",
              isActive("/cashier/order")
                ? "bg-primary-b300 text-white"
                : "text-neutral-n400 hover:bg-neutral-100"
            )}
          >
            <Hourglass className="size-[32px]" />
            <p className="l2-b">Status</p>
          </Link>
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

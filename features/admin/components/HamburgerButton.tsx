"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Menu from "@/public/assets/icons/menu.svg";
import ChevronsLeft from "@/public/assets/icons/chevrons-left.svg";
import Logout from "@/public/assets/icons/log-out.svg";
import PieChart from "@/public/assets/icons/pie-chart.svg";
import History from "@/public/assets/icons/history.svg";
import Coffee from "@/public/assets/icons/coffe-1.svg";
import Users from "@/public/assets/icons/user.svg";
import Settings from "@/public/assets/icons/settings.svg";
import Coupon from "@/public/assets/icons/coupon.svg";
import Image from "next/image";
import Link from "next/link";

const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/admin/overview", label: "Overview", Icon: PieChart },
    { href: "/admin/history", label: "History", Icon: History },
    { href: "/admin/menu-management", label: "Menu Management", Icon: Coffee },
    { href: "/admin/voucher", label: "Voucher Management", Icon: Coupon },
    { href: "/admin/cashier", label: "Cashier Account", Icon: Users },
    { href: "/admin/settings", label: "Settings", Icon: Settings },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button>
          <Menu className="size-[24px] cursor-pointer xl:hidden" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="max-w-[450px] w-full bg-neutral-n900 p-[32px] flex flex-col justify-between text-white [&>button]:hidden"
      >
        <div className="space-y-[32px]">
          <div className="flex flex-col gap-[24px] items-end">
            <div
              onClick={() => setIsOpen(false)}
              className="cursor-pointer transition-transform hover:scale-105"
            >
              <ChevronsLeft className="size-[24px] text-white" />
            </div>

            <div className="relative w-full h-[69px]">
              <Image
                src={"/assets/images/white-logo.png"}
                fill
                alt="Logo"
                className="object-contain"
              />
            </div>

            <div className="w-full h-[1px] bg-neutral-n500"></div>
          </div>

          <div className="flex flex-col gap-[16px]">
            <SheetTitle className="text-white b1-b">Dashboard</SheetTitle>
            {links.map(({ href, label, Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-center gap-[8px] b2-r text-white/32 w-full py-[20px] hover:bg-neutral-n800 hover:text-white transition-all rounded-[4px] cursor-pointer"
        >
          <Logout />
          <p className="font-bold">Logout</p>
        </Link>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerButton;

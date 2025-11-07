"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import CashierInfiniteScrollSkeleton from "@/components/skeletons/CashierInfiniteScrollSkeleton";
import { Cashier } from "../api/getCashiers";
import CashierEditDeleteAction from "./CashierEditDeleteAction";

type Props = {
  cashiers: Cashier[];
  isFetchingNextPage: boolean;
  refObserver: (node?: Element | null) => void;
};

const CashierTable = ({ cashiers, isFetchingNextPage, refObserver }: Props) => {
  return (
    <div className="flex-1 overflow-y-scroll hide-scrollbar mt-[24px]">
      <table className="w-full text-sm border-separate border-spacing-y-[24px] -mt-[24px] pb-[24px]">
        <thead>
          <tr className="bg-neutral-n100">
            <th className="px-[32px] py-[16px] text-left font-semibold text-neutral-n600 rounded-l-[8px]">
              Cashier Name
            </th>
            <th className="px-[32px] py-[16px] text-left font-semibold text-neutral-n600">
              Status
            </th>
            <th className="px-[32px] py-[16px] text-left font-semibold text-neutral-n600">
              Joined
            </th>
            <th className="px-[32px] py-[16px] text-left font-semibold text-neutral-n600">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {cashiers.map((cashier) => (
            <tr key={cashier.id} className="bg-white relative">
              <td className="px-[32px] py-[16px] l2-r rounded-l-[8px] w-[350px]">
                <div className="flex gap-[16px] items-center w-fit">
                  <Image
                    src={cashier.avatar || "/assets/images/ba-image.png"}
                    width={56}
                    height={56}
                    className="rounded-full"
                    alt={cashier.fullName}
                  />
                  <div className="space-y-[4px]">
                    <p className="l2-r line-clamp-1">{cashier.fullName}</p>
                    <p className="l3-r text-neutral-n700 line-clamp-1">
                      {cashier.email}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-[32px] py-[16px] l2-r">
                <Badge
                  variant={
                    cashier.status === "ACTIVE" ? "success" : "secondary"
                  }
                >
                  {cashier.status}
                </Badge>
              </td>
              <td className="px-[32px] py-[16px] l2-r">
                {new Date(cashier.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
              <td className="px-[32px] py-[16px]">
               <CashierEditDeleteAction cashier={cashier}/>
              </td>
              <td className="absolute left-0 right-0 -bottom-3 h-px bg-neutral-n400" />
             
            </tr>
          ))}

          {isFetchingNextPage && <CashierInfiniteScrollSkeleton />}

          <tr>
            <td ref={refObserver} colSpan={4} className="h-[1px]" />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CashierTable;

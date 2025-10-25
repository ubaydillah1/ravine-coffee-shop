"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import User from "@/public/assets/icons/user.svg";
import { useGetHistories } from "../hooks/useGetHistories";
import { OrderStatus, OrderTableType } from "@/types/order";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { HistoryItem } from "../types";

interface HistoryTableProps {
  status: OrderTableType;
  date: Date | undefined;
}

const statusVariantMap: Record<
  OrderStatus | string,
  "success" | "warning" | "destructive" | "info" | "danger" | "secondary"
> = {
  COMPLETED: "success",
  INPROGRESS: "warning",
  OPENBILL: "info",
  CANCELED: "destructive",
  DRAFT: "secondary",
};

const HistoryTable = ({ status, date }: HistoryTableProps) => {
  const formattedDate = date ? format(date, "yyyy-MM-dd") : "";

  const statusRequest =
    status === "all-orders"
      ? ""
      : (status.replace("-", "").toLowerCase() as OrderStatus);

  const {
    data,
    isPending,
    isFetchingNextPage,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useGetHistories({
    limit: 10,
    date: formattedDate,
    status: statusRequest === "" ? undefined : statusRequest,
  });

  const histories = data?.pages.flatMap((page) => page.history) ?? [];

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isError)
    return (
      <div className="flex justify-center items-center h-[200px] text-neutral-n600">
        Something went wrong.
      </div>
    );

  // ✅ Skeleton awal
  if (isPending) {
    return (
      <div className="flex-1 overflow-y-scroll hide-scrollbar mt-[24px] animate-pulse">
        <div className="hidden sm:block">
          <table className="w-full border-separate border-spacing-y-[24px] -mt-[24px] pb-[24px]">
            <thead>
              <tr className="bg-neutral-n100">
                {[
                  "Order ID",
                  "Order date",
                  "Customer",
                  "Table Number",
                  "Total",
                  "Status",
                ].map((head, i) => (
                  <th
                    key={i}
                    className="px-[32px] py-[16px] text-left text-neutral-n600 b2-b font-semibold"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array(6)
                .fill(null)
                .map((_, i) => (
                  <tr key={i}>
                    {Array(6)
                      .fill(null)
                      .map((_, j) => (
                        <td key={j} className="px-[32px] py-[16px]">
                          <div className="h-[16px] w-[80%] bg-neutral-n200 rounded-md" />
                        </td>
                      ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-[24px] sm:hidden pb-[24px]">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="flex flex-col rounded-[12px] border border-neutral-n300 p-[16px] gap-[16px]"
              >
                <div className="h-[20px] w-[50%] bg-neutral-n200 rounded-md" />
                <div className="h-[12px] w-[40%] bg-neutral-n200 rounded-md" />
                <div className="h-[1px] bg-neutral-n300" />
                <div className="h-[16px] w-[70%] bg-neutral-n200 rounded-md" />
                <div className="h-[16px] w-[60%] bg-neutral-n200 rounded-md" />
              </div>
            ))}
        </div>
      </div>
    );
  }

  // ✅ Kosong
  if (histories.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[300px] text-neutral-n600 animate-pulse">
        <p className="text-sm">No orders found for this filter.</p>
      </div>
    );
  }

  // ✅ Data tampil
  return (
    <div className="flex-1 overflow-y-scroll hide-scrollbar mt-[24px]">
      <table className="w-full text-sm text-neutral-n900 border-separate border-spacing-y-[24px] -mt-[24px] pb-[24px] hidden sm:table">
        <thead>
          <tr className="bg-neutral-n100">
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 font-semibold rounded-l-[8px]">
              Order ID
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 font-semibold">
              Order date
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 font-semibold">
              Customer
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 font-semibold">
              Table Number
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 font-semibold">
              Total
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 font-semibold">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {histories.map((item: HistoryItem, i: number) => (
            <tr key={i} className="transition-colors relative">
              <td className="px-[32px] py-[16px] l2-r rounded-l-[8px]">
                #{item.id.slice(0, 8).toUpperCase()}
              </td>
              <td className="px-[32px] py-[16px] l2-r flex flex-col gap-[4px]">
                {format(new Date(item.Order.createdAt), "dd MMM yyyy", {
                  locale: id,
                })}
                <span className="l3-r text-neutral-n700">
                  {format(new Date(item.Order.createdAt), "HH.mm")}
                </span>
              </td>
              <td className="px-[32px] py-[16px] l2-r">
                {item.Order.Customer.fullName}
              </td>
              <td className="px-[32px] py-[16px] l2-r">
                {item.Order.tableNumber}
              </td>
              <td className="px-[32px] py-[16px] l2-r">
                {item.Order.totalAmount}
              </td>
              <td className="px-[32px] py-[16px] l2-r">
                <Badge
                  variant={statusVariantMap[item.orderStatus] ?? "secondary"}
                >
                  {item.orderStatus}
                </Badge>
              </td>
              <td className="absolute left-0 right-0 -bottom-3 h-px bg-neutral-n400" />
            </tr>
          ))}

          {isFetchingNextPage &&
            Array(2)
              .fill(null)
              .map((_, i) => (
                <tr key={`skeleton-${i}`} className="animate-pulse">
                  {Array(6)
                    .fill(null)
                    .map((_, j) => (
                      <td key={j} className="px-[32px] py-[16px]">
                        <div className="h-[16px] w-[80%] bg-neutral-n200 rounded-md" />
                      </td>
                    ))}
                </tr>
              ))}
        </tbody>
      </table>

      <div className="flex flex-col gap-[24px] sm:hidden pb-[24px]">
        {histories.map((item: HistoryItem, i: number) => (
          <div
            key={i}
            className="flex flex-col rounded-[12px] border border-neutral-n300 p-[16px] gap-[16px]"
          >
            <div>
              <span className="l2-b">#{item.id.slice(0, 8).toUpperCase()}</span>
              <div className="mt-[4px] flex gap-[9px] l4-r text-neutral-n600">
                <span>
                  {format(new Date(item.Order.createdAt), "dd MMM yyyy", {
                    locale: id,
                  })}
                </span>
                <span className="l3-r text-neutral-n700">
                  {format(new Date(item.Order.createdAt), "HH.mm")}
                </span>
              </div>
            </div>

            <div className="h-[1px] w-full bg-neutral-n300"></div>

            <div className="flex justify-between items-center">
              <div className="flex gap-[8px] items-center">
                <User className="size-[16px]" />
                <span className="l2-b">{item.Order.Customer.fullName}</span>
              </div>
              <Badge
                variant={statusVariantMap[item.orderStatus] ?? "secondary"}
              >
                {item.orderStatus}
              </Badge>
            </div>

            <div className="flex justify-between">
              <span className="l3-r text-neutral-n700">Table Number</span>
              <span className="l3-b">{item.Order.tableNumber}</span>
            </div>

            <div className="flex justify-between">
              <span className="l3-r text-neutral-n700">Total</span>
              <span className="l3-b">{item.Order.totalAmount}</span>
            </div>
          </div>
        ))}

        {isFetchingNextPage &&
          Array(2)
            .fill(null)
            .map((_, i) => (
              <div
                key={`mobile-skeleton-${i}`}
                className="flex flex-col rounded-[12px] border border-neutral-n300 p-[16px] gap-[16px] animate-pulse"
              >
                <div className="h-[20px] w-[50%] bg-neutral-n200 rounded-md" />
                <div className="h-[12px] w-[40%] bg-neutral-n200 rounded-md" />
                <div className="h-[1px] bg-neutral-n300" />
                <div className="h-[16px] w-[70%] bg-neutral-n200 rounded-md" />
                <div className="h-[16px] w-[60%] bg-neutral-n200 rounded-md" />
              </div>
            ))}
      </div>

      {hasNextPage && <div ref={ref} className="h-[80px]" />}
    </div>
  );
};

export default HistoryTable;

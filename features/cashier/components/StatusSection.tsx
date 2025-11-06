"use client";

import React, { useEffect, useState } from "react";
import StatusChangeOverlay from "../../../components/overlays/StatusChangeOverlay";
import OrderDetailsAction from "./OrderDetailsAction";
import { useGetOrders } from "../hooks/useGetOrders";
import { OrderStatus } from "@/types/order";
import { format } from "date-fns";
import { useInView } from "react-intersection-observer";
import { getTextStatus } from "../helpers";

const SkeletonRow = () => (
  <tr className="animate-pulse">
    {Array.from({ length: 7 }).map((_, i) => (
      <td key={i} className="px-[32px] py-[16px] rounded-md">
        <div className="h-4 bg-neutral-n200 rounded w-3/4" />
      </td>
    ))}
  </tr>
);

function getVariantType(status: OrderStatus) {
  switch (status.toLowerCase()) {
    case "completed":
      return "success";
    case "canceled":
      return "danger";
    case "inprogress":
      return "warning";
    case "openbill":
      return "info";
    case "draft":
      return "neutral";
    default:
      return "neutral";
  }
}

const StatusSection = ({
  status,
  date,
  search,
}: {
  status: OrderStatus;
  date: Date | undefined;
  search: string;
}) => {
  const { data, isPending, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGetOrders({
      orderDate: date ? format(date, "yyyy-MM-dd") : undefined,
      status,
      search,
    });

  const [optimisticOrders, setOptimisticOrders] = useState<
    Record<string, OrderStatus>
  >({});

  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    setOptimisticOrders((prev) => ({
      ...prev,
      [orderId]: newStatus,
    }));
  };

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const products = data?.pages.flatMap((page) => page.items) ?? [];

  return (
    <div className="flex-1 overflow-y-scroll hide-scrollbar mt-[24px]">
      <table className="w-full text-sm text-neutral-n900 border-separate border-spacing-y-[24px] -mt-[24px] pb-[24px]">
        <thead>
          <tr className="bg-neutral-n100">
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 b2-b font-semibold rounded-l-[8px]">
              Order ID
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 b2-b font-semibold">
              Order date
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 b2-b font-semibold">
              Customer
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 b2-b font-semibold">
              Table Number
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 b2-b font-semibold">
              Total
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 b2-b font-semibold">
              Status
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 b2-b font-semibold rounded-r-[8px]">
              Details
            </th>
          </tr>
        </thead>

        <tbody>
          {isPending &&
            Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />)}

          {!isPending && products.length === 0 && (
            <tr>
              <td
                colSpan={7}
                className="text-center py-8 text-neutral-n500 italic"
              >
                No orders found.
              </td>
            </tr>
          )}

          {!isPending &&
            products.length > 0 &&
            products.map((order) => {
              const currentStatus =
                optimisticOrders[order.id] || order.orderStatus;

              return (
                <tr key={order.id} className="transition-colors relative">
                  <td className="px-[32px] py-[16px] text-neutral-n900 l2-r rounded-l-[8px]">
                    #{order.id}
                  </td>
                  <td className="px-[32px] py-[16px] text-neutral-n900 l2-r flex flex-col gap-[4px]">
                    {new Date(order.createdAt).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                    <span className="l3-r text-neutral-n700">
                      {new Date(order.createdAt).toLocaleTimeString("id-ID", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </td>
                  <td className="px-[32px] py-[16px] text-neutral-n900 l2-r">
                    {order.Customer?.fullName || "-"}
                  </td>
                  <td className="px-[32px] py-[16px] text-neutral-n900 l2-r">
                    {order.tableNumber || "-"}
                  </td>
                  <td className="px-[32px] py-[16px] text-neutral-n900 l2-r">
                    Rp{Number(order.totalAmount).toLocaleString("id-ID")}
                  </td>
                  <td className="px-[32px] py-[16px] text-neutral-n900 l2-r">
                    <StatusChangeOverlay
                      text={getTextStatus(currentStatus)}
                      variant={getVariantType(currentStatus)}
                      currentStatus={order.orderStatus}
                      orderId={order.id}
                      onStatusChange={(newStatus) =>
                        handleStatusChange(order.id, newStatus)
                      }
                    />
                  </td>
                  <td className="px-[32px] py-[16px] text-neutral-n900 l2-r rounded-r-[8px]">
                    <OrderDetailsAction orderId={order.id} />
                  </td>

                  <td className="absolute left-0 right-0 -bottom-3 h-px bg-neutral-n400" />
                </tr>
              );
            })}

          {isFetchingNextPage &&
            Array.from({ length: 3 }).map((_, i) => (
              <SkeletonRow key={`next-${i}`} />
            ))}

          <tr ref={ref}>
            <td colSpan={7} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatusSection;

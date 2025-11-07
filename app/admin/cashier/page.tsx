"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CashierPendingSkeleton from "@/components/skeletons/CashierPendingSkeleton";
import CashierInfiniteScrollSkeleton from "@/components/skeletons/CashierInfiniteScrollSkeleton";
import { useGetCashiers } from "@/features/admin/cashier/hooks/useGetCashiers";
import CashierTable from "@/features/admin/cashier/components/CashierTable";
import CashierCard from "@/features/admin/cashier/components/CashierCard";
import CreateCashierAction from "@/features/admin/cashier/components/CreateCashierAction";

const CashierPage = () => {
  const { ref, inView } = useInView();
  const { data, isPending, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGetCashiers({ limit: 10 });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isPending) return <CashierPendingSkeleton />;

  const cashiers = data?.pages.flatMap((page) => page.cashier) ?? [];

  return (
    <section className="sm:py-[40px] py-[20px] space-y-[24px]">
      <div className="sub-h1">Total Account: {cashiers.length}</div>

      <div className="hidden sm:block">
        <CashierTable
          cashiers={cashiers}
          refObserver={ref}
          isFetchingNextPage={isFetchingNextPage}
        />
      </div>

      <div className="sm:hidden">
        {cashiers.map((cashier) => (
          <CashierCard key={cashier.id} cashier={cashier} />
        ))}
        {isFetchingNextPage && <CashierInfiniteScrollSkeleton />}
        <div ref={ref} className="h-[1px]" />
      </div>

      <CreateCashierAction />
    </section>
  );
};

export default CashierPage;

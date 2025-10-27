"use client";

import React, { useEffect, useState } from "react";
import { Category } from "../types";
import { useGetProducts } from "../hooks/useGetProducts";
import { useInView } from "react-intersection-observer";
import ProductCard from "./ProductCart";

const MenuCards = ({ category }: { category: Category }) => {
  const { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetProducts({ category, limit: 8 });

  const products = data?.pages.flatMap((page) => page.products) ?? [];

  const [displayStates, setDisplayStates] = useState<boolean[]>([]);

  useEffect(() => {
    if (products.length > displayStates.length) {
      setDisplayStates((prev) => [
        ...prev,
        ...Array(products.length - prev.length).fill(true),
      ]);
    }
  }, [products.length, displayStates.length]);

  const { ref, inView } = useInView({
    root: null,
    rootMargin: "300px",
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) fetchNextPage();
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const skeletons = new Array(8).fill(null);

  return (
    <main className="min-h-screen w-full pb-[24px] sm:pb-[40px]">
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[16px] sm:gap-[32px]">
        {isPending &&
          skeletons.map((_, i) => (
            <div
              key={`sk-${i}`}
              className="border border-neutral-n100 rounded-[16px] p-[16px] flex flex-col gap-[16px] animate-pulse"
            >
              <div className="bg-neutral-n200 rounded-[12px] w-full aspect-square" />
              <div className="space-y-[8px]">
                <div className="bg-neutral-n200 w-1/3 h-[20px] rounded" />
                <div className="bg-neutral-n200 w-2/3 h-[20px] rounded" />
                <div className="bg-neutral-n200 w-1/2 h-[20px] rounded" />
              </div>
              <div className="w-full h-[22px] bg-neutral-n200 rounded" />
            </div>
          ))}

        {!isPending && products.length === 0 && (
          <p className="col-span-full text-center py-[60px] text-neutral-n700">
            No products available
          </p>
        )}

        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}

        {hasNextPage && (
          <div
            ref={ref}
            className="col-span-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[16px] sm:gap-[32px] pt-[12px]"
          >
            {isFetchingNextPage &&
              [...Array(4)].map((_, i) => (
                <div
                  key={`fetch-sk-${i}`}
                  className="border border-neutral-n100 rounded-[16px] p-[16px] flex flex-col gap-[16px] animate-pulse"
                >
                  <div className="bg-neutral-n200 rounded-[12px] w-full aspect-square" />
                  <div className="space-y-[8px]">
                    <div className="bg-neutral-n200 w-1/3 h-[20px] rounded" />
                    <div className="bg-neutral-n200 w-2/3 h-[20px] rounded" />
                    <div className="bg-neutral-n200 w-1/2 h-[20px] rounded" />
                  </div>
                  <div className="w-full h-[22px] bg-neutral-n200 rounded" />
                </div>
              ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default MenuCards;

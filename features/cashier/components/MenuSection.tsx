"use client";

import { Category } from "@/features/admin/menu-menagement/types";
import Image from "next/image";
import React from "react";
import { useGetProducts } from "../hooks/useGetProducts";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useCartStore } from "@/store/useCartStore";
import { Product } from "../api/getProducts";

const MenuSection = ({
  activeCategory,
  search,
}: {
  activeCategory: Category;
  search?: string;
}) => {
  const addItem = useCartStore((state) => state.addItem);
  const { data, isPending } = useGetProducts({
    category: activeCategory,
    search,
    limit: 6,
  });

  if (isPending)
    return (
      <div className="flex-1 flex-center">
        <LoadingSpinner />
      </div>
    );

  const products = data?.pages.flatMap((page) => page.products) ?? [];

  const handleAddItem = ({ data }: { data: Product }) => {
    addItem({
      productId: data.id,
      quantity: 1,
      productName: data.name,
      productImage: data.image,
      productPrice: Number(data.price),
      productCategory: data.category,
      productSlug: data.slug,
    });
  };

  return (
    <section className="flex-1 flex flex-col gap-[24px] w-full overflow-auto">
      <h1 className="sub-h1">Order Menu</h1>

      <div className="flex flex-wrap gap-[24px] flex-1 overflow-y-scroll hide-scrollbar pb-[32px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="
                h-[255px]
                w-[calc((100%-48px)/3)]
                flex-center flex-col gap-4
                border border-neutral-n100
                rounded-lg cursor-pointer
                shadow-sm hover:shadow-lg
                transition-all duration-300
                hover:-translate-y-1
                hover:border-neutral-200
                bg-white
              "
            onClick={() => handleAddItem({ data: product })}
          >
            <div className="size-[132px] relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="100%"
                priority
                className="object-contain"
              />
            </div>

            <div className="space-y-[8px] text-center">
              <p className="l2-b">{product.name}</p>
              <p className="l2-r text-neutral-n700">
                Rp{Number(product.price).toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        ))}

        {products.length === 0 && (
          <div className="text-center text-neutral-500 w-full flex-1 flex-center text-sm">
            No products found
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;

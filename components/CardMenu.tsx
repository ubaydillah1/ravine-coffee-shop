"use client";

import { Button } from "@/components/ui/button";
import { ProductCardProps } from "@/features/user/menu/types/CardMenuTypes";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CardMenu = ({ layout = "vertical", data }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const router = useRouter();

  const handleAddItem = () => {
    const quantity = 1;
    const price = Number(data.price);

    addItem({
      productId: data.id,
      quantity,
      productName: data.name,
      productImage: data.image,
      productPrice: price,
      productCategory: data.category,
      productSlug: data.slug,
    });
  };

  return (
    <div
      onClick={() => router.push("/item/" + data.slug)}
      className={`${layout === "vertical" && "w-[164px] flex-col gap-[8px]"} ${
        layout === "small-vertical" && "p-[8px]! w-[112px] flex-col gap-[8px]"
      } ${
        layout === "small-horizontal" && "min-w-[240px]"
      } p-[16px] border border-neutral-n100 shadow-md rounded-[8px] flex gap-[12px] reltaive bg-white cursor-pointer`}
    >
      <div className="w-auto">
        <div
          className={`${layout === "vertical" && "h-[132px] w-[132px]"} ${
            layout === "horizontal" && "w-[74px] h-[74px]"
          } ${layout === "small-vertical" && "w-[96px] h-[96px]"} ${
            layout === "vertical" && "h-[132px] w-[132px]"
          } ${
            layout === "small-horizontal" && "w-[64px] h-[64px]"
          } relative rounded-[8px] overflow-hidden bg-white`}
        >
          <Image
            src={data.image ?? "/assets/images/ba-image.png"}
            fill
            alt={data.name}
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[8px] justify-between w-full">
        <p
          className={`${layout === "vertical" && "l2-b"} ${
            layout === "horizontal" && "l1-b"
          } ${layout === "small-horizontal" && "l3-r"} ${
            layout === "small-vertical" && "l3-r"
          } text-neutral-n900`}
        >
          {data.name}
        </p>

        <div
          className={`${layout === "vertical" && "flex-col gap-[8px]"} ${
            layout === "horizontal" && "justify-between items-center"
          } ${
            layout === "small-horizontal" && "justify-between items-center"
          } flex `}
        >
          <p className="text-primary-b300 l2-b">
            Rp {Number(data.price).toLocaleString("id-ID")}
          </p>
          <Button
            variant={"outline"}
            size={"sm"}
            className={`${layout === "vertical" && "w-ful"} ${
              layout === "horizontal" && "w-[72px]"
            } ${layout === "small-horizontal" && "hidden"}  ${
              layout === "small-vertical" && "hidden"
            } text-primary-b500 font-bold rounded-[6px]!`}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              e.stopPropagation();
              handleAddItem();
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;

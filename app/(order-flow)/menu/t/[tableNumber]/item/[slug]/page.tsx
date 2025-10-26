import Image from "next/image";
import React from "react";
import Minus from "@/public/assets/icons/minus.svg";
import Plus from "@/public/assets/icons/plus.svg";
import { Button } from "@/components/ui/button";
import XIcon from "@/public/assets/icons/x.svg";
import ShoppingCart from "@/public/assets/icons/shopping-cart.svg";

const ItemPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (!slug) return null;

  return (
    <main className="min-h-screen flex flex-col justify-between relative">
      <div className="flex-center size-[28px] bg-white z-90 rounded-full absolute left-4 top-4 cursor-pointer">
        <XIcon className="size-[12px]" />
      </div>
      <div className="flex-center size-[28px] bg-white z-90 rounded-full absolute right-4 top-4 cursor-pointer">
        <ShoppingCart className="size-[12px]" />
      </div>
      <div className="relative aspect-square w-full h-[268px]">
        <Image
          src={"/assets/images/ba-image.png"}
          fill
          alt="product-image"
          sizes="100%"
          className="object-cover"
          priority
        />
      </div>
      <div className="w-full gap-[8px] flex-1 rounded-t-[16px] overflow-hidden bg-white mb-[10px]">
        <div className="px-[21px] py-[16px] flex flex-col gap-[8px]">
          <p className="b1-r">Bundling Coffee + Toast + French Fries</p>
          <p className="sub-h2 font-bold">$9.9</p>
        </div>

        <div className="px-[21px] py-[16px] bg-white flex flex-col gap-[8px] h-[300px]">
          <div className="flex justify-between">
            <p className="b2-b">Notes</p>
            <p className="b2-r text-gray-600">Optional</p>
          </div>
          <textarea
            name=""
            id=""
            className="p-[12px] rounded-[6px] text-neutral-n900 border placeholder:text-neutral-n300 border-neutral-n300 h-[160px] focus:outline-none resize-none"
            placeholder="Example: Make my dish delicious"
          ></textarea>
        </div>
      </div>

      <div className="px-[21px] py-[24px] bg-white flex flex-col gap-[14px] sticky bottom-0">
        <div className="flex justify-between">
          <p className="b3-r">Total Order</p>
          <div className="flex gap-[24px] items-center b3-r text-black">
            <Minus className="w-[15px] h-[15px]" />
            <span>1</span>
            <Plus className="w-[15px] h-[15px]" />
          </div>
        </div>
        <Button className="rounded-[8px] w-full">Add Orders - $9.9</Button>
      </div>
    </main>
  );
};

export default ItemPage;

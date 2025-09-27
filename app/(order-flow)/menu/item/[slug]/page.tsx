import Image from "next/image";
import React from "react";
import Minus from "@/public/assets/icons/minus.svg";
import Plus from "@/public/assets/icons/plus.svg";
import { Button } from "@/components/ui/button";

const ItemPage = ({ params }: Promise<{ params: string }>) => {
  return (
    <main className="min-h-screen">
      <div className="relative aspect-square w-full max-h-[320px]">
        <Image
          src={"/assets/images/ba-image.png"}
          fill
          alt="product-image"
          className="object-cover"
        />
      </div>
      <div className="w-full bottom-0 left-0 right-0 absolute flex flex-col gap-[8px] bg-neutral-n100 rounded-t-[16px] overflow-hidden">
        <div className="bg-white px-[21px] py-[16px] flex flex-col gap-[8px]">
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

        <div className="px-[21px] py-[16px] bg-white flex flex-col gap-[14px]">
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
      </div>
    </main>
  );
};

export default ItemPage;

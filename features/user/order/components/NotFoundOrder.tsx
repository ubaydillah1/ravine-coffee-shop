import { Button } from "@/components/ui/button";
import React from "react";
import EmptyCart from "@/public/assets/icons/empty-cart.svg";
import Header from "@/components/Header";

const NotFoundOrder = () => {
  return (
    <div className="max-w-[390px] mx-auto border min-h-screen flex-col flex justify-between">
      <Header title="Order" withBackArrow={true} />

      <div className="flex-center flex-col text-center gap-[26px] ">
        <div className="w-[200px] h-[200px] relative">
          <EmptyCart className="absolute inset-0" />
        </div>

        <div className="flex flex-col gap-[16px]">
          <p className="b2-b">You haven’t orders anything</p>
          <p className="text-neutral-n700 b2-r">
            Let’s find some items and you’ll see them here.
          </p>
        </div>
      </div>

      <div className="sticky bottom-[21px] px-[21px]">
        <Button className="rounded-[8px] w-full">Find Menu</Button>
      </div>
    </div>
  );
};

export default NotFoundOrder;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { ProductCardProps } from "../features/(order-flow)/menu/types/CardMenuTypes";

const CardMenu = ({ layout = "vertical" }: ProductCardProps) => {
  return (
    <div
      className={`${layout === "vertical" && "w-[164px] flex-col gap-[8px]"} ${
        layout === "small-vertical" && "p-[8px]! w-[112px] flex-col gap-[8px]"
      } ${
        layout === "small-horizontal" && "min-w-[240px]"
      } p-[16px] border border-neutral-n100 shadow-md rounded-[8px] flex gap-[12px] reltaive bg-white`}
    >
      <div className="w-auto">
        <div
          className={`${layout === "vertical" && "h-[132px] w-[132px]"} ${
            layout === "horizontal" && "w-[74px] h-[74px]"
          } ${layout === "small-vertical" && "w-[96px] h-[96px]"} ${
            layout === "vertical" && "h-[132px] w-[132px]"
          } ${
            layout === "small-horizontal" && "w-[64px] h-[64px]"
          } relative rounded-[8px] overflow-hidden bg-black`}
        >
          <Image
            src={"/assets/images/ba-image.png"}
            fill
            alt="menu-image"
            className="object-cover"
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
          Bundling Coffee + Toast + French Fries
        </p>

        {/* <div className="flex-center bg-accent-g500 rounded-full p-[2px] aspect-square h-fit w-fit">
          <Check className="h-[16px] w-[16px] text-white" />
        </div> */}

        <div
          className={`${layout === "vertical" && "flex-col gap-[8px]"} ${
            layout === "horizontal" && "justify-between items-center"
          } ${
            layout === "small-horizontal" && "justify-between items-center"
          } flex `}
        >
          <p className="text-primary-b300 l2-b">$9.9</p>
          <Button
            variant={"outline"}
            size={"sm"}
            className={`${layout === "vertical" && "w-ful"} ${
              layout === "horizontal" && "w-[72px]"
            } ${layout === "small-horizontal" && "hidden"}  ${
              layout === "small-vertical" && "hidden"
            } text-primary-b500 font-bold`}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;

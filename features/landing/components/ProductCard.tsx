import Image from "next/image";
import React from "react";
import Star from "@/public/assets/icons/Star-fully.svg";
import ArrowRight from "@/public/assets/icons/arrow-right.svg";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  src: string;
  title: string;
  price: number;
  prevPrice: number;
  rating: number;
};

const ProductCard = ({
  src,
  title,
  price,
  prevPrice,
  rating,
}: ProductCardProps) => {
  return (
    <div className="relative w-full md:max-w-[280px] group">
      <div className="absolute left-0 right-0 top-0 -bottom-[5px] bg-neutral-n200 rounded-[16px] z-0 blur-[8px] transition-all duration-300 group-hover:bg-neutral-n300 group-hover:translate-y-4 group-hover:translate-x-4" />

      <div className="flex flex-col rounded-[16px] w-full h-full p-[16px] gap-[24px] relative z-10 bg-primary-b100">
        <div className="relative w-full h-[203px] md:h-[308px] -mt-24">
          <Image src={src} alt="variant" fill className="object-contain" />
        </div>

        <div>
          <strong className="l2-b text-center">{title}</strong>
          <div className="flex justify-between mt-[12px]">
            <div className="flex gap-2">
              <p className="l2-r">${price}</p>
              <p className="text-neutral-n600 text-[8px] line-through">
                ${prevPrice}
              </p>
            </div>

            <div className="flex gap-1 items-center">
              <Star width={14} height={14} />
              <p className="l2-b">{rating}</p>
            </div>
          </div>
        </div>

        <Button variant="ghost" size="full" className="bg-white text-[12px]">
          Order
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

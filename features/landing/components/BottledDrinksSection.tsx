import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { FadeInAndSlideUp, SlideInFromLeft } from "@/components/MotionWrapper";

const BottledDrinksSection = () => {
  return (
    <section className="h-full lg:h-screen bg-primary-b100 px-[20px] md:px-[40px] pt-[80px] lg:pt-0 my-[140px] lg:my-0">
      <div className="max-w-[1232px] mx-auto h-full flex flex-col lg:flex-row justify-between gap-[80px] items-center">
        <div className="h-full flex items-end order-2 lg:order-1">
          <SlideInFromLeft className="relative md:h-[623px] md:w-[543px] h-[400px] w-[349.28px]">
            <Image
              src="/assets/illustrations/variants.png"
              alt="bottle-drink-illustration"
              fill
            />
          </SlideInFromLeft>
        </div>
        <FadeInAndSlideUp className="order-1 lg:order-2 flex flex-col gap-[24px]">
          <h2 className="h2 text-[22px] sm:h2">
            Comes in Handy 250 Ml Bottles
          </h2>
          <p className="b1-r text-[12px] sm:b1-r">
            Our 250 ml bottle fits right into your day. Smooth flavors in a
            compact size. Easy to carry, easy to love. Whether you&apos;re on
            the move or taking a break, enjoy your coffee on your way.
          </p>
          <Button variant={"outline"} className="text-[14px] sm:text-[16px]">
            Grab Yours Today
          </Button>
        </FadeInAndSlideUp>
      </div>
    </section>
  );
};

export default BottledDrinksSection;

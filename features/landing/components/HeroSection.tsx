import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FadeInAndSlideUp, SlideInFromRight } from "@/components/MotionWrapper";

const HeroSection = () => {
  return (
    <section className="lg:h-screen bg-primary-b100 w-full px-[20px] md:px-[40px] pt-[90px] lg:pt-0 pb-[30px] md:pb-[0px]">
      <div className="max-w-[1232px] mx-auto flex h-full flex-col lg:flex-row justify-between">
        <FadeInAndSlideUp className="flex flex-col justify-between order-2 lg:order-1 text-center lg:text-left gap-[22px] sm:gap-[53px]">
          <div></div>
          <div className="flex flex-col gap-[24px]">
            <h1 className="t1 hidden lg:block lg:t1">
              Brewing Connections, One Story at a Time
            </h1>

            <p className="b1-r md:text-2xl md:max-w-[600px] md:mx-auto lg:b1-r lg:mx-0">
              Heartfelt coffee, designed to enhance every taste and memory.
            </p>
            <Button className="mx-auto lg:mx-0">Order Now</Button>
          </div>

          <div className="flex w-full lg:max-w-[336px] lg:w-full justify-between md:justify-center md:gap-[60px] lg:justify-between lg:gap-0 text-center items-center mx-auto lg:mx-0 mt-[50px] md:mt-0 md:mb-[42px]">
            <div className="flex flex-col gap-[4px] w-[96px]">
              <strong className="sub-h1 text-black">+500</strong>
              <p className="l3-r">Our Product</p>
            </div>

            <div className="h-[32px] w-[1px] bg-neutral-n400"></div>

            <div className="flex flex-col gap-[4px] w-[96px]">
              <strong className="sub-h1 text-black">+3500</strong>
              <p className="l3-r">Total Sales</p>
            </div>

            <div className="h-[32px] w-[1px] bg-neutral-n400"></div>

            <div className="flex flex-col gap-[4px] w-[96px]">
              <strong className="sub-h1 text-black">+1500</strong>
              <p className="l3-r">Total Customer</p>
            </div>
          </div>
        </FadeInAndSlideUp>

        <div className="order-1 lg:order-2 w-full h-full lg:max-w-[530px] relative">
          <h1 className="t2 text-center lg:hidden md:text-[48px]">
            Brewing Connections, One Story at a Time
          </h1>
          <SlideInFromRight className="h-[400px] md:h-[600px] w-full relative lg:h-full">
            <Image
              src="/assets/illustrations/coffee-price.png"
              alt="illustrations"
              fill
              className="object-contain mt-[0px]"
            />
          </SlideInFromRight>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FadeInAndSlideUp, SlideInFromRight } from "@/components/MotionWrapper";

const AboutSection = () => {
  return (
    <section className="lg:h-screen flex-center my-[70px] lg:my-0 lg:p-0 md:p-[40px] p-[20px]">
      <div className="max-w-[1232px] mx-auto flex flex-col lg:flex-row items-center justify-between h-full w-full">
        <FadeInAndSlideUp className="flex flex-col gap-[32px] lg:gap-[24px] max-w-full w-full lg:max-w-[608px] order-2 lg:order-1">
          <h2 className="h2 hidden lg:block">Brew Joy into Every Morning</h2>
          <p className="lg:b1-r b3-r text-center lg:text-left md:text-[16px] md:max-w-[500px] mx-auto lg:max-w-full">
            Stay inspired, stay focused. Ravine Coffee offers the warmth and
            clarity you need to begin your day strong. Fuel your ideas with
            every sip.
          </p>

          <Button className="mx-auto lg:mx-0">Discover More</Button>
        </FadeInAndSlideUp>

        <div className="order-1 lg:order-2">
          <h2 className="sub-h1 lg:hidden text-center md:text-[40px]">
            Brew Joy into Every Morning
          </h2>
          <SlideInFromRight className="relative w-[240px] h-[240px] lg:w-[444px] lg:h-[444px] rounded-full overflow-hidden my-[48px] lg:my-0 mx-auto md:w-[400px] md:aspect-square! md:h-full">
            <Image src={"/assets/images/ba-image.png"} fill alt="bg-image" />
          </SlideInFromRight>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

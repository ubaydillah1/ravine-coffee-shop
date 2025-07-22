import React from "react";
import { Button } from "@/components/ui/button";
import ArrowRight from "@/public/assets/icons/arrow-right.svg";
import ProductCard from "./ProductCard";
import { FadeInAndSlideUp } from "@/components/MotionWrapper";

const VariantSection = () => {
  return (
    <section className="py-10 md:py-24 flex flex-col justify-center items-center text-center max-w-[1232px] w-full mx-auto gap-x-[40px] md:gap-[56px] px-[20px] md:px-0 gap-[40px] min-h-screen">
      <FadeInAndSlideUp>
        <h2 className="md:text-[40px] h2 text-[22px]">
          Premium Sips for Every Mood
        </h2>
        <p className="body-1 mt-[12px] text-[12px] md:body-1 max-w-[295px] md:text-[18px] md:max-w-full">
          Find the flavor that matches your vibe today. Start your day with a
          delicious splash.
        </p>
      </FadeInAndSlideUp>

      <FadeInAndSlideUp className="md:flex justify-center w-full gap-7 mt-20 md:mt-18 h-full flex-wrap gap-y-32 grid grid-cols-2">
        <ProductCard
          src="/assets/images/Varian 1.png"
          prevPrice={15}
          price={2.9}
          rating={4.9}
          title="Hazelnut Coffee"
        />
        <ProductCard
          src="/assets/images/Varian 4.png"
          prevPrice={15}
          price={2.9}
          rating={4.9}
          title="Red Velvet"
        />
        <ProductCard
          src="/assets/images/Varian 3.png"
          prevPrice={15}
          price={2.9}
          rating={4.9}
          title="Matcha Latte"
        />
        <ProductCard
          src="/assets/images/Varian 2.png"
          prevPrice={15}
          price={2.9}
          rating={4.9}
          title="Americano"
        />
      </FadeInAndSlideUp>

      <Button variant={"outline"} size={"lg"} className="group transition-all">
        See All Menu
        <ArrowRight
          className="text-primary group-hover:text-white transition-all"
          width={20}
          height={20}
        />
      </Button>
    </section>
  );
};

export default VariantSection;

import React from "react";
import Star from "@/public/assets/icons/Star-fully.svg";
import Image from "next/image";
import Quote from "@/public/assets/icons/quote.svg";

const TestimonialSection = () => {
  return (
    <div className="lg:h-screen h-full flex-center p-[20px] md:p-[40px] mb-[100px] lg:mb-0">
      <div className="max-w-[1230px] ">
        <div className="flex flex-col gap-[86px]">
          <div className="flex flex-col gap-[16px] w-fit mx-auto text-center">
            <h2 className="h2">Hear From Our Happy Customers</h2>
            <p className="b1-b">
              Join hundreds who&apos;ve experienced the difference.
            </p>
          </div>

          <div className="flex gap-[80px]">
            <div className="p-[12px] max-w-[551px] border border-primary-b400 rounded-[12px]">
              <div className="bg-neutral-n100 rounded-[8px] px-[24px] pb-[24px] pt-[56px] relative flex flex-col gap-[24px]">
                <Quote className="absolute -top-[27px] left-14 bg-white text-primary" />
                <Quote className="absolute -bottom-[27px] right-14 bg-white text-primary rotate-180" />
                <div className="w-[96px] aspect-square absolute -top-[65px] left-1/2 -translate-x-1/2">
                  <Image
                    src={"/assets/images/dummy-profile.png"}
                    alt={"profile"}
                    fill
                  />
                </div>
                <p className="text-center b3-r">
                  As a coffee lover, I&apos;ve tried many cafes, but Ravine
                  Coffee is truly different! The taste and aroma of their coffee
                  are so distinct, fresh, and consistently good. The ordering
                  process is easy and delivery is fast. Now, every morning I
                  can&apos;t live without Ravine coffee!
                </p>

                <div className="flex justify-between items-end">
                  <div>
                    <strong className="b1-b">Ayu Pratiwi</strong>
                    <p className="b2-b">Graphic Designer</p>
                  </div>

                  <div className="flex gap-[8px]">
                    <Star className="text-accent-y500 w-[13px]" />
                    <Star className="text-accent-y500 w-[13px]" />
                    <Star className="text-accent-y500 w-[13px]" />
                    <Star className="text-accent-y500 w-[13px]" />
                    <Star className="text-accent-y500 w-[13px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

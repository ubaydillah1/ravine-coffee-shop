import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import ArrowRight from "@/public/assets/icons/arrow-right.svg";

const ContactSection = () => {
  return (
    <section className="h-full lg:h-screen flex-center px-[20px] md:px-[40px] lg:pt-0 my-[140px] lg:my-0">
      <div className="max-w-[1232px] mx-auto h-full flex-center flex-col gap-[56px]">
        <div className="gap-[16px] text-center flex flex-col">
          <h2 className="h2 text-[22px] sm:h2">Ready to Order?</h2>
          <p className="b1-r text-[12px] md:b1-r text-neutral-n900">
            Reach out to our baristas for more details and to place your order.
          </p>
        </div>

        <div className="flex-center md:gap-[120px] gap-[40px]">
          <div className="w-full flex-center flex-col gap-[16px]">
            <div className="relative w-[120px] md:w-[240px] aspect-square">
              <Image
                src="/assets/illustrations/Barista 5.png"
                alt="profile"
                fill
              />
            </div>

            <p className="sub-h1">Fandy</p>

            <Button variant={"outline"}>
              Order Now <ArrowRight />
            </Button>
          </div>
          <div className="w-full flex-center flex-col gap-[16px]">
            <div className="relative w-[120px] md:w-[240px] aspect-square">
              <Image
                src="/assets/illustrations/Barista 5.png"
                alt="profile"
                fill
              />
            </div>

            <p className="sub-h1">Azel</p>

            <Button variant={"outline"}>
              Order Now <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

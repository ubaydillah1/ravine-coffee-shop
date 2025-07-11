import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ArrowRight from "@/public/assets/icons/arrow-right.svg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="lg:h-screen bg-primary-b100 w-full px-[20px] md:px-[40px]">
          <div className="max-w-[1232px] mx-auto flex h-full flex-col lg:flex-row justify-between">
            <div className="lg:pt-[90px] flex flex-col justify-between mt-5 lg:mt-[100px] order-2 lg:order-1 text-center lg:text-left gap-[72px]">
              <div className="flex flex-col gap-[24px]">
                <h1 className="t1 hidden lg:block lg:text-[48px] lg:t1">
                  Brewing Connections, One Story at a Time
                </h1>
                <p className="b1-r md:text-2xl md:max-w-[600px] md:mx-auto lg:b1-r lg:mx-0">
                  Heartfelt coffee, designed to enhance every taste and memory.
                </p>
                <Button className="mx-auto lg:mx-0">Order Now</Button>
              </div>

              <div className="flex w-full lg:max-w-[336px] lg:w-full justify-between md:justify-center md:gap-[60px] lg:justify-between lg:gap-0 text-center items-center lg:mb-[80px] mx-auto lg:mx-0 mb-[40px]">
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
            </div>

            <div className="order-1 lg:order-2 w-full h-full lg:max-w-[530px] relative">
              <h1 className="t2 text-center mt-[90px] lg:hidden md:text-[48px]">
                Brewing Connections, One Story at a Time
              </h1>
              <div className="h-[400px] md:h-[600px] w-full relative lg:h-full">
                <Image
                  src="/assets/illustrations/coffee-price.png"
                  alt="illustrations"
                  fill
                  className="object-contain mt-[0px]"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="lg:h-screen flex flex-col justify-center items-center text-center max-w-[1232px] w-full mx-auto">
          <div>
            <h2 className="h2">Premium Sips for Every Mood</h2>
            <p className="body-1 mt-[12px]">
              Find the flavor that matches your vibe today. Start your day with
              a delicious splash.
            </p>
          </div>

          <div className="flex justify-center bg-blue-500 w-full">
            <div></div>
          </div>

          <Button
            variant={"outline"}
            size={"lg"}
            className="group transition-all"
          >
            See All Menu
            <ArrowRight
              className="text-primary group-hover:text-white transition-all"
              width={20}
              height={20}
            />
          </Button>
        </section>
      </main>
    </>
  );
}

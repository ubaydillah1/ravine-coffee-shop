import Image from "next/image";
import React from "react";
import ArrowRight from "@/public/assets/icons/arrow-right.svg";
import FacebookIcon from "@/public/assets/icons/facebook-1.svg";
import InstagramIcon from "@/public/assets/icons/instagram-1.svg";
import XIcon from "@/public/assets/icons/twitter-1.svg";
import YoutubeIcon from "@/public/assets/icons/youtube-1.svg";

import { Button } from "./ui/button";

const FooterSection = () => {
  return (
    <footer className="bg-neutral-n900 text-neutral-n400 lg:py-[80px] lg:px-[104px] px-[20px] py-[40px] md:px-[40px]">
      <div className="flex flex-col gap-[16px] mb-[32px] md:hidden">
        <p className="sub-h2 text-white">Get Closer with Us</p>
        <div className="relative w-full rounded-[6px] pl-3 pr-9 py-2 bg-white">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="outline-none ring-0 placeholder:text-neutral-n800 text-black w-full"
          />
          <div className="absolute -right-5 top-1/2 -translate-y-1/2">
            <Button variant={"none"}>
              <ArrowRight className="text-black" />
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-[1232px] mx-auto flex flex-col gap-[10px]">
        <div className="flex justify-between flex-col lg:flex-row w-full gap-[32px]">
          <div className="flex flex-col gap-[8px] lg:max-w-[289px]">
            <div>
              <Image
                src={"/assets/images/logo.png"}
                alt="logo-compony"
                width={127}
                height={69}
                className="w-[91px] h-[59px] mx-auto lg:mx-0 inline-block"
              />
            </div>
            <p className="b2-r text-[14px] md:b2-r">
              Experience premium coffe delivered to your doorstep. Follow us for
              exclusive deals, brewing tips, and more!
            </p>
          </div>
          <div className="md:flex lg:gap-x-[130px] gap-[40px] flex-wrap justify-between lg:justify-start grid grid-cols-2">
            <div className="flex flex-col gap-[12px]">
              <strong className="text-white b1-b">Privacy</strong>
              <p className="b2-r">Terms of use</p>
              <p className="b2-r">Privacy policy</p>
              <p className="b2-r">Cookies</p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <strong className="text-white b1-b">Services</strong>
              <p className="b2-r">Shop</p>
              <p className="b2-r">Order ahead</p>
              <p className="b2-r">Menu</p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <strong className="text-white b1-b">About us</strong>
              <p className="b2-r">Find a location</p>
              <p className="b2-r">About us</p>
              <p className="b2-r">Our story</p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <strong className="text-white b1-b">Need help</strong>
              <p className="b2-r">Plans & pricing</p>
              <p className="b2-r">Jobs</p>
              <p className="b2-r">Sell your product</p>
            </div>
          </div>
        </div>

        <div className="flex md:justify-between items-end justify-end">
          <div className="md:flex flex-col gap-[16px] hidden">
            <p className="sub-h2 text-white">Get Closer with Us</p>
            <div className="relative w-[240px] rounded-[6px] bg-white px-3 py-2 pr-5">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="outline-none ring-0 placeholder:text-neutral-n800 text-black"
              />
              <div className="absolute -right-5 top-1/2 -translate-y-1/2">
                <Button variant={"none"}>
                  <ArrowRight className="text-black" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex gap-[40px] items-center my-[32px] md:my-0">
            <FacebookIcon className="text-white" />
            <InstagramIcon className="text-white" />
            <XIcon className="text-white" />
            <YoutubeIcon className="text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

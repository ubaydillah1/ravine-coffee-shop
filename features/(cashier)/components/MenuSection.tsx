import Image from "next/image";
import React from "react";

const MenuSection = () => {
  return (
    <section className="flex-1 flex flex-col gap-[24px] w-full overflow-auto">
      <h1 className="sub-h1">Order Menu</h1>

      <div className="flex flex-wrap gap-[24px] flex-1 overflow-y-scroll hide-scrollbar pb-[32px]">
        {new Array(9).fill(null).map((_, i) => {
          return (
            <div
              className="h-[255px] w-[calc((100%-48px)/3)] flex-center flex-col gap-[16px] border border-neutral-n100 rounded-[8px]"
              style={{ boxShadow: "0px 4px 4px #0000000A" }}
              key={i}
            >
              <div className="size-[132px] relative">
                <Image
                  src="/assets/images/Varian 1.png"
                  alt="coffee"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-[8px]">
                <p className="l2-b">Hazelnut Latte</p>
                <p className="l2-r text-neutral-n700">Rp20.000</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MenuSection;

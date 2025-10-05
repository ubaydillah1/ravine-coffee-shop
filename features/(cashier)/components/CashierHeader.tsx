import Image from "next/image";
import React from "react";
import IconSearch from "@/public/assets/icons/search.svg";

const CashierHeader = () => {
  return (
    <header className="flex flex-col gap-[24px] mt-[32px]">
      <div className="flex justify-between items-center w-full">
        <h1 className="sub-h1">Category</h1>
        <div className="flex items-center gap-[8px] p-[11px] rounded-[6px] border border-neutral-n300 max-w-[348px] w-full">
          <IconSearch className="size-[20px] text-neutral-n500" />
          <input
            placeholder="Search for coffee"
            className="border-0 outline-0 focus:ring-0 w-full"
          />
        </div>
      </div>

      <div className="overflow-x-scroll hide-scrollbar flex gap-[24px]">
        {Array(8)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="w-[97px] h-[117px] rounded-[8px] bg-neutral-n100 flex-center flex-col gap-[8px] shrink-0"
            >
              <div className="flex-center size-[40px] rounded-full bg-white">
                <Image
                  src={"/assets/colored-icons/Coffee.svg"}
                  alt="coffee"
                  width={40}
                  height={40}
                />
              </div>
              <p className="b2-b">Coffee</p>
            </div>
          ))}
      </div>
    </header>
  );
};

export default CashierHeader;

import React from "react";
import ChevronRight from "@/public/assets/icons/chevron-right.svg";
import Link from "next/link";

const TitleCard = () => {
  return (
    <Link
      href={"/outlet"}
      className="w-full px-[16px] py-[12px] flex items-center bg-white justify-between border border-neutral-n300 rounded-[8px] ursor-pointer"
    >
      <div>
        <p className="b1-b text-neutral-n900">
          Ravine Coffee Shop - Manhattan City
        </p>
        <p className="b3-r tet-neutral-n600 mt-[4px]">
          Open today 08.00 - 23.00
        </p>
      </div>
      <div>
        <ChevronRight className="text-neutral-n700" />
      </div>
    </Link>
  );
};

export default TitleCard;

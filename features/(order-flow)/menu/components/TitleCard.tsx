import React from "react";
import ChevronRight from "@/public/assets/icons/chevron-right.svg";

const TitleCard = () => {
  return (
    <div className="w-full px-[16px] py-[12px] flex items-center bg-white justify-between border border-neutral-n300 rounded-[8px]">
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
    </div>
  );
};

export default TitleCard;

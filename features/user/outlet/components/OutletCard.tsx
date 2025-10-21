import React from "react";
import ChevronRight from "@/public/assets/icons/chevron-right.svg";
import MapPin from "@/public/assets/icons/map-pin.svg";
import Phone from "@/public/assets/icons/phone.svg";
import Share from "@/public/assets/icons/share-2.svg";
import { Button } from "@/components/ui/button";

const OutletCard = () => {
  return (
    <div className="w-full px-[16px] py-[12px] flex items-center bg-white justify-between my-[16px]">
      <div className="flex flex-col gap-[16px]">
        <p className="b1-b text-neutral-n900">
          Ravine Coffee Shop - Manhattan City
        </p>
        <div className="flex justify-between gap-[18px]">
          <MapPin className="w-[16px] h-[16px] b3-r" />
          <p className="flex-1 b3-r">
            Jl. Boulevard Raya No.20 Blok RA 11, Pegangsaan Dua, Kec. Klp.
            Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240, Indonesia
          </p>
          <button>
            <ChevronRight />
          </button>
        </div>
        <div className="flex gap-[22px] justify-between">
          <Button className="flex-1 gap-[8px] rounded-[8px]" variant={"light"}>
            <Phone />
            <p className="b3-b">Contact us</p>
          </Button>
          <Button className="flex-1 gap-[8px] rounded-[8px]" variant={"light"}>
            <Share />
            <p className="b3-b">Share</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OutletCard;

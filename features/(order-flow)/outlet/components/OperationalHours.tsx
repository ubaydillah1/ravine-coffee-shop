import React from "react";

const OperationalHours = () => {
  return (
    <div className="pt-[16px] px-[21px] bg-white pb-[100px]">
      <strong className="b2-b">Operational Hours</strong>

      <div className="mt-[8px]">
        <div className="border-b border-neutral-n300 py-[16px] flex b3-b gap-[48px]">
          <p className="w-[72px]">Monday</p>
          <p>08.00 - 23.00</p>
        </div>
        <div className="border-b border-neutral-n300 py-[16px] flex b3-b gap-[48px] text-neutral-n600">
          <p className="w-[72px]">Tuesday</p>
          <p>08.00 - 23.00</p>
        </div>
        <div className="border-b border-neutral-n300 py-[16px] flex b3-b gap-[48px] text-neutral-n600">
          <p className="w-[72px]">Wednesday</p>
          <p>08.00 - 23.00</p>
        </div>
        <div className="border-b border-neutral-n300 py-[16px] flex b3-b gap-[48px] text-neutral-n600">
          <p className="w-[72px]">Thursday</p>
          <p>08.00 - 23.00</p>
        </div>
        <div className="border-b border-neutral-n300 py-[16px] flex b3-b gap-[48px] text-neutral-n600">
          <p className="w-[72px]">Friday</p>
          <p>08.00 - 23.00</p>
        </div>
        <div className="border-b border-neutral-n300 py-[16px] flex b3-b gap-[48px] text-neutral-n600">
          <p className="w-[72px]">Saturday</p>
          <p>08.00 - 23.00</p>
        </div>
        <div className="border-b border-neutral-n300 py-[16px] flex b3-b gap-[48px] text-neutral-n600">
          <p className="w-[72px]">Sunday</p>
          <p>08.00 - 23.00</p>
        </div>
      </div>
    </div>
  );
};

export default OperationalHours;

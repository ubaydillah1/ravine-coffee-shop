import React from "react";
import { Badge } from "@/components/ui/badge";
import Eye from "@/public/assets/icons/eye.svg";
import ChevronDown from "/public/assets/icons/chevron-down.svg";

const StatusSection = () => {
  return (
    <div className="flex-1 overflow-y-scroll hide-scrollbar mt-[24px]">
      <table className="w-full text-sm text-neutral-n900 border-separate border-spacing-y-[24px] -mt-[24px] pb-[24px]">
        <thead>
          <tr className="bg-neutral-n100">
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 b2-b font-semibold rounded-l-[8px]">
              Order ID
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 b2-b font-semibold">
              Order date
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 b2-b font-semibold">
              Customer
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 b2-b font-semibold">
              Total
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 b2-b font-semibold">
              Status
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 b2-b font-semibold rounded-r-[8px]">
              Details
            </th>
          </tr>
        </thead>

        <tbody>
          {Array(9)
            .fill(null)
            .map((_, i) => (
              <tr key={i} className="transition-colors relative">
                <td className="px-[32px] py-[16px] text-neutral-n900 l2-r rounded-l-[8px]">
                  #A230900{i + 1}
                </td>
                <td className="px-[32px] py-[16px] text-neutral-n900 l2-r flex flex-col gap-[4px]">
                  23 Sep 2025
                  <span className="l3-r text-neutral-n700">14.30</span>
                </td>
                <td className="px-[32px] py-[16px] text-neutral-n900 l2-r">
                  John Doe
                </td>
                <td className="px-[32px] py-[16px] text-neutral-n900 l2-r">
                  Rp44.000
                </td>
                <td className="px-[32px] py-[16px] text-neutral-n900 l2-r cursor-pointer">
                  <Badge variant="success">Completed</Badge>
                  <ChevronDown className="size-[16px] inline-block ml-[8px]" />
                </td>
                <td className="px-[32px] py-[16px] text-neutral-n900 l2-r rounded-r-[8px] ">
                  <div className="size-[36px] rounded-full border border-neutral-n300 flex-center cursor-pointer hover:bg-neutral-n100">
                    <Eye className="text-neutral-n700 size-[16px]" />
                  </div>
                </td>

                <td className="absolute left-0 right-0 -bottom-3 h-px bg-neutral-n400" />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatusSection;

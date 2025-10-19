import { Badge } from "@/components/ui/badge";
import User from "@/public/assets/icons/user.svg";
import React from "react";

const HistoryTable = () => {
  return (
    <div className="flex-1 overflow-y-scroll hide-scrollbar mt-[24px]">
      <table className="w-full text-sm text-neutral-n900 border-separate border-spacing-y-[24px] -mt-[24px] pb-[24px] hidden sm:table">
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
              Table Number
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 b2-b font-semibold">
              Total
            </th>
            <th className="px-[32px] py-[16px] text-left text-neutral-n600 b2-b font-semibold">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {Array(10)
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
                  23
                </td>
                <td className="px-[32px] py-[16px] text-neutral-n900 l2-r">
                  Rp44.000
                </td>
                <td className="px-[32px] py-[16px] text-neutral-n900 l2-r">
                  <Badge variant="success">Completed</Badge>
                </td>

                <td className="absolute left-0 right-0 -bottom-3 h-px bg-neutral-n400" />
              </tr>
            ))}
        </tbody>
      </table>

      <div className="flex flex-col gap-[24px] sm:hidden pb-[24px]">
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="flex flex-col rounded-[12px] border border-neutral-n300 p-[16px] gap-[16px]"
            >
              <div>
                <span className="l2-b">#A2309001</span>
                <div className="mt-[4px] flex gap-[9px] l4-r text-neutral-n600">
                  <span>23 Sept 2025</span>
                  <span>13.15</span>
                </div>
              </div>

              <div className="h-[1px] w-full bg-neutral-n300"></div>

              <div className="flex justify-between">
                <div className="flex gap-[8px]">
                  <User className="size-[16px]" />
                  <span className="l2-b">John Doe</span>
                </div>
                <Badge variant={"success"}>Completed</Badge>
              </div>

              <div className="flex justify-between">
                <span className="l3-r text-neutral-n700">Table Number</span>
                <span className="l3-b">23</span>
              </div>

              <div className="flex justify-between">
                <span className="l3-r text-neutral-n700">Total</span>
                <span className="l3-b">Rp44.000</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HistoryTable;

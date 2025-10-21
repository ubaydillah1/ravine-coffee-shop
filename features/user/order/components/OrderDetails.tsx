import React from "react";
import OrderItemNotes from "@/public/assets/icons/data.svg";
import EditSecondForm from "@/public/assets/icons/edit-2.svg";
import Edit from "@/public/assets/icons/edit.svg";
import Minus from "@/public/assets/icons/minus.svg";
import Plus from "@/public/assets/icons/plus.svg";
import { Button } from "@/components/ui/button";

const OrderDetails = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="b2-b">Order Items (2)</p>
        <Button variant={"outline"} className="rounded-[8px] px-[16px]">
          <Plus />
          Add Item
        </Button>
      </div>

      <div className="h-[1px] w-full bg-neutral-n300"></div>

      <div className="flex flex-col gap-[12px]">
        <div className="flex justify-between items-center">
          <div className="b2-b">Mineral Water</div>
          <div className="flex gap-[8px] items-center b3-b text-neutral-n700">
            <EditSecondForm className="size-[16px]" />
            Edit
          </div>
        </div>

        <div className="flex gap-[8px] items-center text-neutral-600">
          <OrderItemNotes className="size-[20px]" />
          <p className="b3-b">No notes yet</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="b2-b">$1.9</p>
          <div className="flex gap-[24px] items-center">
            <span>
              <Minus className="size-[14px]" />
            </span>
            <span>1</span>
            <span>
              <Plus className="size-[14px]" />
            </span>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-neutral-n300"></div>

      <div className="flex flex-col gap-[12px]">
        <div className="flex justify-between items-center">
          <div className="b2-b">Mineral Water</div>
          <div className="flex gap-[8px] items-center b3-b text-neutral-n700">
            <EditSecondForm className="size-[16px]" />
            Edit
          </div>
        </div>

        <div className="flex gap-[8px] items-center text-neutral-600">
          <OrderItemNotes className="size-[20px]" />
          <p className="b3-b">No notes yet</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="b2-b">$1.9</p>
          <div className="flex gap-[24px] items-center">
            <span>
              <Minus className="size-[14px]" />
            </span>
            <span>1</span>
            <span>
              <Plus className="size-[14px]" />
            </span>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-neutral-n300"></div>

      <div className="border-l-[2px] border-primary-b300 pl-[8px] gap-[8px] text-neutral-n600 b2-b flex">
        <Edit className="size-[20px] text-neutral-700" />
        Add another notes
      </div>
    </>
  );
};

export default OrderDetails;

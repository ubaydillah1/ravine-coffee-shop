"use client";

import React from "react";
import Data from "@/public/assets/icons/data.svg";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ModalProps } from "../types/modal";

interface OrderDetailsOverlayProps extends ModalProps {
  isCompleted?: boolean;
}

const OrderDetailsOverlay = ({
  openModal,
  closeModal,
  isCompleted = true,
}: OrderDetailsOverlayProps) => {
  return (
    <Dialog open={openModal} onOpenChange={closeModal}>
      <DialogContent
        className="bg-white p-[0] flex gap-[0] flex-col outline-0 border-0 overflow-hidden min-w-[490px]"
        showCloseButton={true}
      >
        <DialogHeader>
          <DialogTitle className="bg-neutral-n200 text-center py-[12px] b1-b">
            Order Details
          </DialogTitle>
        </DialogHeader>
        <div className="px-[32px] py-[24px] w-full flex flex-col gap-[24px]">
          {/* <div className="px-[32px] py-[16px] w-full flex flex-col gap-[16px]"> */}
          <div className="w-full flex justify-between items-end">
            <div className="space-y-[16px]">
              {isCompleted && <Badge variant="success">Completed</Badge>}

              <div className="flex flex-col gap-[4px]">
                <span className="b3-r text-neutral-n700">Order ID</span>
                <strong className="b3-b">#A2305001</strong>
              </div>

              <div className="flex flex-col gap-[4px]">
                <span className="b3-r text-neutral-n700">Order Date</span>
                <strong className="b3-b">23 Sep 2025 - 17.14</strong>
              </div>

              <div className="flex flex-col gap-[4px]">
                <span className="b3-r text-neutral-n700">Order Type</span>
                <strong className="b3-b">Dine In</strong>
              </div>

              <div className="flex flex-col gap-[4px]">
                <span className="b3-r text-neutral-n700">Cashier</span>
                <strong className="b3-b">Affandy</strong>
              </div>
            </div>

            <div className="w-[140px] h-full">
              <div className="space-y-[16px]">
                <div className="flex flex-col gap-[4px]">
                  <span className="b3-r text-neutral-n700">
                    Customer’s Name
                  </span>
                  <strong className="b3-b">Ubay</strong>
                </div>

                <div className="flex flex-col gap-[4px]">
                  <span className="b3-r text-neutral-n700">Phone Number</span>
                  <strong className="b3-b">-</strong>
                </div>

                <div className="flex flex-col gap-[4px]">
                  <span className="b3-r text-neutral-n700">Voucher Code</span>
                  <strong className="b3-b">-</strong>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="b3-r text-neutral-n700">Payment Method</span>
                  <strong className="b3-b">Cash</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-[16px]">
            <div className="space-y-[12px]">
              <div className="flex gap-[32px] py-[12px] px-[16px] bg-neutral-n100 rounded-t-[8px] text-neutral-n700 l3-b">
                <span className="min-w-[246px] inline-block">Product</span>
                <span className="w-[24px]">Qty</span>
                <span className="flex-1">Price</span>
              </div>

              <div className="space-y-[16px] h-[92px] overflow-y-scroll hide-scrollbar">
                <div className="flex gap-[32px] px-[16px] items-center">
                  <div className="w-[246px] flex gap-[8px] items-center">
                    <div className="size-[40px] bg-neutral-n100 flex-center">
                      <div className="size-[32px] relative">
                        <Image
                          src={"/assets/images/Varian 1.png"}
                          alt={"menu"}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <p className="l3-b truncate w-full min-w-0">
                      Bundling Coffee + Toast +
                      Frenchslkdfjalkfjdsajfldsajlkfksdjlf
                    </p>
                  </div>

                  <span className="l3-r text-neutral-n700">1x</span>

                  <span className="l3-b text-neutral-n700">Rp20.000</span>
                </div>
              </div>
            </div>

            <div className="text-end">
              <Button
                variant={"ghost"}
                className="hover:border-neutral-n300 border border-transparent b2-r text-neutral-n600 hover:text-neutral-n600"
              >
                <Data />
                <span>View Notes</span>
              </Button>
            </div>

            <DialogFooter className="rounded-[8px] bg-neutral-n100 space-y-[8px] p-[16px] b3-r text-neutral-n700">
              <div className="flex justify-between">
                <div>
                  Sub Total <span className="text-neutral-n500">(2 menu)</span>
                </div>
                <span>Rp20.000</span>
              </div>
              <div className="flex justify-between">
                <div>Tax</div>
                <span>Rp20.000</span>
              </div>
              <div className="flex justify-between">
                <div>Voucher</div>
                <span>-</span>
              </div>

              <div className="w-full h-px bg-neutral-n300"></div>

              <div className="flex justify-between b2-b text-primary-b300 ">
                <span>Total</span>
                <span>Rp20.000</span>
              </div>
            </DialogFooter>
          </div>
          {!isCompleted && (
            <div className="flex gap-[24px] w-full">
              <Button
                variant={"outline"}
                className="flex-1"
                onClick={closeModal}
              >
                Back
              </Button>
              <Button className="flex-1">Pay Bill</Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsOverlay;

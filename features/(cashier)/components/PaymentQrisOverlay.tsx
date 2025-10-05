import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ModalProps } from "../types/modal";

const PaymentQrisOverlay = ({ openModal, closeModal }: ModalProps) => {
  return (
    <Dialog open={openModal} onOpenChange={closeModal}>
      <DialogContent
        className="bg-white flex flex-col outline-0 border-0 overflow-hidden min-w-[739px] !p-0 gap-0"
        showCloseButton={true}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="p-0 m-0 space-y-0">
          <DialogTitle className="bg-neutral-n200 text-center py-[12px] text-neutral-n700 font-semibold m-0">
            Payment
          </DialogTitle>
        </DialogHeader>

        <div className="flex m-0">
          <div className="flex-1 p-[24px] h-[467px] bg-neutral-n100 flex-center flex-col gap-[16px] text-center">
            <div className="flex flex-col gap-[4px] -mt-[32px]">
              <span className="b1-r text-neutral-n700">
                Complete payment in
              </span>
              <span className="h3">09:53</span>
            </div>

            <div className="size-[240px] bg-black"></div>
          </div>

          <div className="flex-1 p-[24px] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <span className="b1-r text-neutral-n700">Total</span>
              <span className="h3">Rp44.000</span>
            </div>

            <div className="space-y-[24px]">
              <div className="flex justify-between">
                <span className="b1-r text-neutral-n700">Balance</span>
                <span className="b1-b text-primary-b300">Rp6.000</span>
              </div>
              <Button className="w-full">Confirm Payment</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentQrisOverlay;

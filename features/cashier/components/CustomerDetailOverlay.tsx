import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface CustomerDetailOverlayProps {
  customerDetailsModal: boolean;
  closeCustomerDetailModal: () => void;
}
const CustomerDetailOverlay = ({
  customerDetailsModal,
  closeCustomerDetailModal,
}: CustomerDetailOverlayProps) => {
  return (
    <Dialog open={customerDetailsModal} onOpenChange={closeCustomerDetailModal}>
      <DialogContent
        className="bg-white p-[0] flex gap-[0] flex-col outline-0 border-0 overflow-hidden min-w-[490px]"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle className="bg-neutral-n200 text-center py-[12px]">
            Customer Details
          </DialogTitle>
        </DialogHeader>
        <div className="p-[24px] w-full flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[8px]">
            <span className="b2-b ">
              Name <span className="text-accent-r500">*</span>
            </span>
            <input
              type="text"
              placeholder="John Due"
              className="focus:outline-0 py-1 border-b "
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex justify-between">
              <span className="b2-b ">Phone Number</span>
              <span className="b3-r text-neutral-n600">Optional</span>
            </div>
            <input
              type="tel"
              placeholder="081234567899"
              className="focus:outline-0 py-1 border-b "
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex justify-between">
              <span className="b2-b ">Voucher</span>
              <span className="b3-r text-neutral-n600">Optional</span>
            </div>
            <input
              type="tel"
              placeholder="081234567899"
              className="focus:outline-0 py-1 border-b "
            />
          </div>

          <div className="flex flex-col gap-[16px]">
            <span className="b2-b ">
              Payment Method <span className="text-accent-r500">*</span>
            </span>

            <div>
              <RadioGroup className="space-y-[12px]">
                <div className="flex items-center space-x-[24px]">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="flex gap-[12px] b2-r">
                    Cash
                  </Label>
                </div>
                <div className="flex items-center space-x-[24px]">
                  <RadioGroupItem value="qris" id="qris" />
                  <Label htmlFor="qris" className="flex gap-[12px] b2-r">
                    Qris
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <DialogFooter className="flex gap-[24px]">
            <Button
              variant={"outline"}
              className="flex-1"
              onClick={closeCustomerDetailModal}
            >
              Close
            </Button>
            <Button
              className="flex-1"
              onClick={() => {
                closeCustomerDetailModal();
              }}
            >
              Next
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerDetailOverlay;

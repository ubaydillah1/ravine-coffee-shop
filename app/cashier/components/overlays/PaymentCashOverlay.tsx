"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useOrderStore } from "@/store/useOrderStore";
import { ModalProps } from "@/features/cashier/types/modal";
import { useUpdateStatusOrder } from "@/features/cashier/hooks/useUpdateStatusOrder";

interface PaymentCashOverlayProps extends ModalProps {
  setOpenSuccessPaymentCashModal: (value: boolean) => void;
}

const PaymentCashOverlay = ({
  openModal,
  closeModal,
  setOpenSuccessPaymentCashModal,
}: PaymentCashOverlayProps) => {
  const [amount, setAmount] = useState("0");
  const { OrderInformation } = useOrderStore();
  const { mutate, isPending } = useUpdateStatusOrder({
    mutationConfig: {
      onSuccess: () => {
        setAmount("0");
        setOpenSuccessPaymentCashModal(true);
        closeModal();
      },
    },
  });

  const order = OrderInformation?.order;


  if (!order) return null;

  const handlePayment = () => {
    mutate({ id: order.id, status: "inprogress" }, { onSuccess: closeModal });
  };

  const handleKeyPress = (key: string) => {
    if (key === "⌫") {
      setAmount((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else if (key === "000") {
      setAmount((prev) => (prev === "0" ? "0" : prev + "000"));
    } else if (["10", "20", "50", "100"].includes(key)) {
      setAmount((prev) => (Number(prev) + Number(key) * 1000).toString());
    } else if (!isNaN(Number(key))) {
      setAmount((prev) => {
        if (prev === "0") {
          return key === "0" ? "0" : key;
        }
        return prev + key;
      });
    }
  };

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
          <div className="flex-1 p-[24px] w-full space-y-[24px] bg-neutral-100">
            <div className="p-[24px] rounded-[16px] border border-neutral-n300 text-right">
              <span className="text-[24px] font-bold text-neutral-n700">
                Rp{Number(amount).toLocaleString("id-ID")}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-[8px]">
              {[
                ["7", "8", "9", "100"],
                ["4", "5", "6", "50"],
                ["1", "2", "3", "20"],
                ["000", "0", "⌫", "10"],
              ].map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {row.map((val, i) => (
                    <button
                      key={i}
                      onClick={() => handleKeyPress(val)}
                      className={`h-[80px] rounded-[8px] text-[18px] font-medium transition
                        ${
                          i === 3
                            ? "bg-neutral-n200 hover:bg-neutral-n300"
                            : "bg-white border border-neutral-n300 hover:bg-neutral-n100"
                        }`}
                    >
                      {val}
                    </button>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex-1 p-[24px] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <span className="b1-r text-neutral-n700">Total</span>
              <span className="h3">
                Rp{Number(order?.totalAmount).toLocaleString("id-ID")}
              </span>
            </div>

            <div className="space-y-[24px]">
              <div className="flex justify-between">
                <span className="b1-r text-neutral-n700">Balance</span>
                <span className="b1-b text-primary-b300">
                  <span className="b1-b text-primary-b300">
                    Rp
                    {Math.max(
                      Number(amount) - Number(order?.totalAmount),
                      0
                    ).toLocaleString("id-ID")}
                  </span>
                </span>
              </div>
              <Button
                className="w-full"
                disabled={
                  isPending || Number(amount) < Number(order?.totalAmount)
                }
                onClick={handlePayment}
              >
                Confirm Payment
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentCashOverlay;

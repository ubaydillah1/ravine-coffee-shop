"use client";

import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CheckButton from "@/public/assets/icons/check.svg";
import { DialogTitle } from "@radix-ui/react-dialog";
import Data from "@/public/assets/icons/data.svg";
import Paper from "@/public/assets/icons/paperclip.svg";
import { ModalProps } from "../../features/cashier/types/modal";
import { useOrderStore } from "@/store/useOrderStore";
import { toastError } from "@/components/ui/sonner";
import { useCartStore } from "@/store/useCartStore";

interface SuccessPaymentCashModalProps extends ModalProps {
  setOrderDetailsModal: (value: boolean) => void;
}

const SuccessPaymentCashModal = ({
  openModal,
  closeModal,
  setOrderDetailsModal,
}: SuccessPaymentCashModalProps) => {
  const { OrderInformation } = useOrderStore();
  const clearCart = useCartStore((state) => state.clearCart);
  const clearOrderData = useOrderStore((state) => state.clearOrderData);

  const order = OrderInformation?.order;

  const handleClose = (open: boolean) => {
    if (!open) {
      clearCart();
      clearOrderData();
      closeModal();
    }
  };

  const handleNewOrder = () => {
    clearCart();
    clearOrderData();
    closeModal();
  };

  if (!order) return null;

  return (
    <Dialog open={openModal} onOpenChange={handleClose}>
      <DialogContent
        className="bg-white outline-0 border-0 overflow-hidden min-w-[520px] flex flex-col gap-[40px] p-[48px]"
        showCloseButton={false}
      >
        <DialogTitle className="hidden"></DialogTitle>
        <div className="space-y-[16px] text-center mx-auto">
          <div className="mx-auto size-[88px] rounded-full border border-primary-b300 flex-center">
            <div className="size-[80px] rounded-full bg-primary-b300 flex-center">
              <CheckButton className="text-white size-[48px]" />
            </div>
          </div>
          <span className="h3">Payment Success</span>
        </div>

        <div className="px-[24px] flex justify-between">
          <div className="text-center flex flex-col gap-[4px]">
            <span className="b1-r text-neutral-n700">Order ID</span>
            <span className="b1-b">#{order.id}</span>
          </div>
          <div className="text-center flex flex-col gap-[4px]">
            <span className="b1-r text-neutral-n700">Total Paid</span>
            <span className="b1-b">
              Rp{Number(order.totalAmount).toLocaleString("id-ID")}
            </span>
          </div>
        </div>

        <div className="space-y-[16px]">
          <div className="flex gap-[16px]">
            <Button
              className="space-y-[10px] space-x-[10px] flex-1"
              variant="outline"
              onClick={() => {
                setOrderDetailsModal(true);
                closeModal();
              }}
            >
              <Data className="size-[16px]" />
              View Order
            </Button>
            <Button
              className="space-y-[10px] space-x-[10px] flex-1"
              variant="outline"
              onClick={() => {
                toastError("Upcomming");
              }}
            >
              <Paper className="size-[16px]" />
              Print Receipt
            </Button>
          </div>

          <Button className="w-full" onClick={handleNewOrder}>
            New Order
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessPaymentCashModal;

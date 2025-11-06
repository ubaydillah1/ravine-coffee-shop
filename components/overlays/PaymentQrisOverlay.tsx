"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ModalProps } from "../../features/cashier/types/modal";
import { useOrderStore } from "@/store/useOrderStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUpdateStatusOrder } from "../../features/cashier/hooks/useUpdateStatusOrder";

interface PaymentQrisOverlayProps extends ModalProps {
  setOpenSuccessPaymentQrisModal: (value: boolean) => void;
}

const PaymentQrisOverlay = ({
  openModal,
  closeModal,
  setOpenSuccessPaymentQrisModal,
}: PaymentQrisOverlayProps) => {
  const { OrderInformation } = useOrderStore();
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const { mutate, isPending } = useUpdateStatusOrder({
    mutationConfig: {
      onSuccess: () => {
        setOpenSuccessPaymentQrisModal(true);
        closeModal();
      },
    },
  });
  const router = useRouter();

  const order = OrderInformation?.order;
  const payment = OrderInformation?.payment;

  useEffect(() => {
    if (!order?.expiredQrisMidtransUrl) return;

    const expiredTime = new Date(order.expiredQrisMidtransUrl).getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const diff = expiredTime - now;

      if (diff <= 0) {
        setTimeLeft(0);
        closeModal();
        return;
      }

      setTimeLeft(diff);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [order?.expiredQrisMidtransUrl, closeModal, router]);

  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  if (!OrderInformation || !order || !payment) return null;

  const handlePayment = () => mutate({ id: order.id, status: "inprogress" });

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
              <span className="h3">
                {timeLeft > 0 ? formattedTime : "00:00"}
              </span>
            </div>

            <div className="size-[240px] relative">
              <Image
                src={payment.qrisUrl!}
                alt="payment"
                fill
                sizes="100%"
                priority
              />
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
              <Button
                className="w-full"
                onClick={handlePayment}
                disabled={isPending}
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

export default PaymentQrisOverlay;

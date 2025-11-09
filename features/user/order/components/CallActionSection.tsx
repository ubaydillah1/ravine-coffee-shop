"use client";

import { Button } from "@/components/ui/button";
import Download from "@/public/assets/icons/download.svg";
import React, { useState } from "react";
import XSquare from "@/public/assets/icons/x-square.svg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useOrderStore } from "@/store/useOrderStore";
import { checkOrderStatus } from "../api/checkOrderStatus";
import { useRouter } from "next/navigation";
import { useUserInfoStore } from "@/store/useUserInfoStore";
import { useCartStore } from "@/store/useCartStore";
import { simulatePayment } from "@/features/payment/api/simulatePayment";
import { toastError, toastSuccess } from "@/components/ui/sonner";

const CallActionSection = ({ timeLeft }: { timeLeft: string }) => {
  const [openModal, setOpenModal] = useState(false);
  const { OrderInformation } = useOrderStore((state) => state);
  const clearUserInfo = useUserInfoStore((state) => state.clearUserInfo);
  const clearCart = useCartStore((state) => state.clearCart);
  const router = useRouter();

  const [isPendingSimulatePayment, startPaymentSimulation] = useState(false);

  const closeModal = () => setOpenModal(false);

  const qrisUrl = OrderInformation?.payment?.qrisUrl;

  const handleCheckPaymentStatus = async () => {
    const orderId = OrderInformation!.order.id;
    const result = await checkOrderStatus(orderId);

    if (result.orderStatus === "COMPLETED") {
      localStorage.removeItem("notes");
      clearUserInfo();
      clearCart();
      router.replace("/successful-payment");
      return;
    }

    setOpenModal(true);
  };

  const handleSimulatePayment = async () => {
    startPaymentSimulation(true);
    try {
      await simulatePayment(OrderInformation!.order.id);
      toastSuccess(
        "Success to simulate payment, check payment status to next."
      );
    } catch {
      toastError("Failed to simulate payment");
    } finally {
      startPaymentSimulation(false);
    }
  };

  return (
    <section className="space-y-[16px]">
      <div className="flex gap-[16px]">
        <Button onClick={handleCheckPaymentStatus}>Check Payment Status</Button>

        {qrisUrl ? (
          <a
            href={qrisUrl}
            download="qris-code.png"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-center size-[52px] border-2 border-primary-b300 rounded-[6px] overflow-hidden cursor-pointer"
          >
            <Download className="text-primary-b300" />
          </a>
        ) : (
          <div
            className="flex-center size-[52px] border-2 border-gray-300 rounded-[6px] opacity-50 cursor-not-allowed"
            title="QR not available yet"
          >
            <Download className="text-gray-400" />
          </div>
        )}

        <Dialog open={openModal} onOpenChange={closeModal}>
          <DialogContent
            className="max-w-[350px] bg-white"
            showCloseButton={false}
          >
            <div className="flex flex-row justify-between">
              <strong className="l1-b">Payment Status</strong>
              <div onClick={closeModal} className="cursor-pointer">
                <XSquare />
              </div>
            </div>

            <div className="mx-auto relative size-[160px]">
              <Image
                src="/assets/illustrations/Waiting.png"
                fill
                alt="Waiting Illustration"
              />
            </div>

            <DialogHeader className="text-center">
              <DialogTitle className="sub-h1 text-[22px]">
                Payment still waiting
              </DialogTitle>
              <div className="sub-h1 text-[22px]">{timeLeft}</div>
              <DialogDescription>
                Please complete your payment before time runs out.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <Button className="w-full" onClick={closeModal}>
                Continue Payment
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Button
        className="w-full py-[16px]"
        variant={"outlineGray"}
        disabled={isPendingSimulatePayment}
        onClick={handleSimulatePayment}
      >
        Simulate Payment
      </Button>
    </section>
  );
};

export default CallActionSection;

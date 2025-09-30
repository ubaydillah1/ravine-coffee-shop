"use client";

import React from "react";
import ArrowLeft from "@/public/assets/icons/arrow-left.svg";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type ModalType = "NONE" | "CANCELQRISPAYMENT";

type HeaderProps = {
  title: string;
  backTo?: string;
  withBackArrow?: boolean;
  modalType?: ModalType;
};

const Header = ({
  title,
  backTo,
  withBackArrow = false,
  modalType,
}: HeaderProps) => {
  const router = useRouter();
  const [activeModal, setActiveModal] = React.useState<ModalType>("NONE");

  const handleBack = () => {
    if (modalType) {
      setActiveModal(modalType);
    } else if (backTo) {
      router.push(backTo);
    } else {
      router.back();
    }
  };

  const closeModal = () => setActiveModal("NONE");

  return (
    <>
      <header className="bg-white flex h-[60px] items-center px-[21px] shadow-sm w-full justify-between">
        <div className="w-[24px] h-[24px] flex-shrink-0">
          {withBackArrow && (
            <ArrowLeft
              className="w-[24px] h-[24px] cursor-pointer"
              onClick={handleBack}
            />
          )}
        </div>
        <p className="b1-b text-center flex-grow">{title}</p>
        <div className="w-[24px] h-[24px] flex-shrink-0"></div>
      </header>

      <Dialog open={activeModal !== "NONE"} onOpenChange={closeModal}>
        <DialogContent className="max-w-[350px] bg-white!">
          {activeModal === "CANCELQRISPAYMENT" && (
            <>
              <div className="relative mx-auto size-[160px]">
                <Image
                  src="/assets/illustrations/qr-cancel-illustration.png"
                  alt="qr-cancel-illustration"
                  fill
                />
              </div>
              <DialogHeader>
                <DialogTitle>Cancel using QRIS?</DialogTitle>
                <DialogDescription>
                  QR will expire please make sure to pay with new QR
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex! w-full justify-between gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    router.push("/order/payment");
                    closeModal();
                  }}
                  className="flex-1 w-full shrink-0"
                >
                  Back
                </Button>
                <Button
                  className="w-1/2"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  Continue Payment
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;

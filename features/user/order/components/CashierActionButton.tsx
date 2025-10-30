"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTableStore } from "@/store/useTableStore";

const CashierActionButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const tableNumber = useTableStore((state) => state.tableNumber);

  const router = useRouter();

  const closeModal = () => setOpenModal(false);
  return (
    <div>
      <Button className="w-full" onClick={() => setOpenModal(true)}>
        New Order
      </Button>

      <Dialog open={openModal} onOpenChange={closeModal}>
        <DialogContent
          className="max-w-[350px] bg-white!"
          showCloseButton={false}
        >
          <div className="relative mx-auto size-[160px]">
            <Image
              src="/assets/illustrations/qr-cancel-illustration.png"
              alt="qr-cancel-illustration"
              sizes="100%"
              priority
              fill
            />
          </div>
          <DialogHeader className="text-center!">
            <DialogTitle className="b1-b">Start a new order?</DialogTitle>
          </DialogHeader>
          <DialogFooter className="flex! w-full justify-between gap-4">
            <Button
              variant="outline"
              onClick={() => {
                closeModal();
              }}
              className="flex-1 w-full shrink-0"
            >
              Cancel
            </Button>
            <Button
              className="w-1/2"
              onClick={() => {
                router.push("/menu/t/" + tableNumber);
              }}
            >
              New Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CashierActionButton;

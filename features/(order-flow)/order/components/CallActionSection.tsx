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

const CallActionSection = () => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => setOpenModal(false);

  return (
    <section className="flex gap-[16px]">
      <Button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Check Payment Status
      </Button>
      <div className="flex-center size-[52px] border-2 border-primary-b300 rounded-[6px] overflow-hidden cursor-pointer">
        <Download className="text-primary-b300" />
      </div>

      <Dialog open={openModal} onOpenChange={closeModal}>
        <DialogContent
          className="max-w-[350px] bg-white!"
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
              src={"/assets/illustrations/Waiting.png"}
              fill
              alt="Waiting Illustrations"
            />
          </div>
          <DialogHeader className="text-center!">
            <DialogTitle className="sub-h1 text-[22px]">
              Payment still waiting
            </DialogTitle>
            <div className="sub-h1 text-[22px]">09.53</div>
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
    </section>
  );
};

export default CallActionSection;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import MoreVertical from "@/public/assets/icons/more-vertical.svg";
import { Cashier } from "../api/getCashiers";
import EditDeleteCashierOverlay from "@/components/overlays/EditDeleteCashierOverlay.tsx";

const CashierCard = ({ cashier }: { cashier: Cashier }) => {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);

  return (
    <div className="rounded-[12px] border border-neutral-n300 p-[16px] space-y-[16px] mb-[16px] bg-white">
      <div className="flex justify-between items-center">
        <p className="l2-b">{cashier.fullName}</p>
        <div onClick={() => setOpenModal(true)}>
          <MoreVertical className="size-[16px]" />
        </div>
        <EditDeleteCashierOverlay
          openModal={openModal}
          closeModal={closeModal}
          data={cashier}
        />
      </div>

      <div className="w-full h-[1px] bg-neutral-n300"></div>

      <div className="flex justify-between items-center">
        <div className="flex gap-[16px] items-center">
          <Image
            src={cashier.avatar || "/assets/images/ba-image.png"}
            width={40}
            height={40}
            className="rounded-full"
            alt={cashier.fullName}
          />
          <div className="space-y-[4px]">
            <p className="l2-b">{cashier.fullName}</p>
            <p className="l3-r text-neutral-n700">{cashier.email}</p>
          </div>
        </div>
        <Badge variant={cashier.status === "ACTIVE" ? "success" : "secondary"}>
          {cashier.status}
        </Badge>
      </div>

      <div className="flex justify-between items-center">
        <p className="l3-r text-neutral-n700">Joined</p>
        <p className="l3-b">
          {new Date(cashier.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default CashierCard;

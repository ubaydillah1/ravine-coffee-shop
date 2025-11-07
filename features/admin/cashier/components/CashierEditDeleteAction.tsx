import React, { useState } from "react";
import EditDeleteCashierOverlay from "@/components/overlays/EditDeleteCashierOverlay.tsx";
import MoreVertical from "@/public/assets/icons/more-vertical.svg";
import { Cashier } from "../api/getCashiers";

const CashierEditDeleteAction = ({ cashier }: { cashier: Cashier }) => {
  const [openModal, setOpenModal] = useState(false);

  const closeEditModal = () => setOpenModal(false);
  return (
    <>
      <div
        className="size-[36px] rounded-[4px] border border-neutral-n300 flex-center cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
        <MoreVertical className="size-[16px]" />
      </div>

      <EditDeleteCashierOverlay
        closeModal={closeEditModal}
        openModal={openModal}
        data={cashier}
      />
    </>
  );
};

export default CashierEditDeleteAction;

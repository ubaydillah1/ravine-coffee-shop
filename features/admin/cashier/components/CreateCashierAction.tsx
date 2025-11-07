import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Plus from "@/public/assets/icons/plus.svg";
import AddCashierOverlay from "@/components/overlays/AddCashierOverlay";

const CreateCashierAction = () => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => setOpenModal(false);

  return (
    <>
      <Button
        className="fixed bottom-[32px] right-[32px] bg-primary-b300 flex gap-[12px] items-center text-white"
        onClick={() => setOpenModal(true)}
      >
        <Plus className="size-[20px]" />
        <span className="l2-b">Create Account</span>
      </Button>

      <AddCashierOverlay closeModal={closeModal} openModal={openModal} />
    </>
  );
};

export default CreateCashierAction;

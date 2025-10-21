import React, { useState } from "react";
import Plus from "@/public/assets/icons/plus.svg";
import { Button } from "@/components/ui/button";
import AddProductOverlay from "./overlay/AddProductOverlay";

const AddActionButton = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button
        className="fixed bottom-[32px] right-[32px] bg-primary-b300 flex gap-[12px] items-center text-white"
        onClick={() => setOpenModal(true)}
      >
        <Plus className="size-[20px]" />
        <span className="l2-b">Add Item</span>
      </Button>

      <AddProductOverlay
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
      />
    </>
  );
};

export default AddActionButton;

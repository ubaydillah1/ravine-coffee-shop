"use client";

import React, { useState } from "react";
import Data from "@/public/assets/icons/data.svg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const AddNotesOverlay = () => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => setOpenModal(false);
  return (
    <>
      <Button
        variant="outlineGray"
        className="w-full flex-center gap-[10px] text-neutral-n600"
        onClick={() => setOpenModal(true)}
      >
        <Data className="size-[16px]" />
        Add Notes
      </Button>

      <Dialog open={openModal} onOpenChange={closeModal}>
        <DialogContent
          className="bg-white p-[0] flex gap-[0] flex-col outline-0 border-0 overflow-hidden min-w-[626px]"
          showCloseButton={true}
        >
          <DialogHeader>
            <DialogTitle className="bg-neutral-n200 text-center py-[12px]">
              Add Notes
            </DialogTitle>
          </DialogHeader>
          <div className="p-[32px] w-full flex flex-col gap-[8px]">
            <Textarea
              placeholder="Write a note here"
              className="focus-visible:ring-0 max-h-[300px] resize-none h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNotesOverlay;

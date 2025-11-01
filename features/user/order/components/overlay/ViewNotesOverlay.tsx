import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const ViewNotesOverlay = ({
  openModal,
  closeModal,
  notes,
}: {
  openModal: boolean;
  closeModal: () => void;
  notes: string;
}) => {
  return (
    <Dialog open={openModal} onOpenChange={closeModal}>
      <DialogContent
        className="bg-white p-[0] flex gap-[0] flex-col outline-0 border-0 overflow-hidden max-w-sm sm:max-w-md"
        showCloseButton={true}
      >
        <DialogHeader>
          <DialogTitle className="bg-neutral-n200 text-center py-[12px]">
            View Notes
          </DialogTitle>
        </DialogHeader>
        <div className="p-[16px] w-full flex flex-col gap-[8px]">
          <Textarea
            disabled
            placeholder="Write a note here"
            value={notes || "sadfdsa"}
            className="focus-visible:ring-0 max-h-[300px] min-h-[100px] resize-none h-full text-neutral-n700 disabled:opacity-100"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewNotesOverlay;

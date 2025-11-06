import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import useNotes from "@/hooks/useNotes";

const NotesOverlay = ({
  openModal,
  closeModal,
}: {
  openModal: boolean;
  closeModal: () => void;
}) => {
  const [notes, setNotes] = useNotes();

  return (
    <Dialog open={openModal} onOpenChange={closeModal}>
      <DialogContent
        className="bg-white p-[0] flex gap-[0] flex-col outline-0 border-0 overflow-hidden max-w-sm sm:max-w-md"
        showCloseButton={true}
      >
        <DialogHeader>
          <DialogTitle className="bg-neutral-n200 text-center py-[12px]">
            Add Notes
          </DialogTitle>
        </DialogHeader>
        <div className="p-[16px] w-full flex flex-col gap-[8px]">
          <Textarea
            placeholder="Write a note here"
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value);
            }}
            className="focus-visible:ring-0 max-h-[300px] min-h-[100px] resize-none h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotesOverlay;

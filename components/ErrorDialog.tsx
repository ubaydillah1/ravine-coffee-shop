"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/store/useUiStore";
import WarningIcon from "@/public/assets/icons/alert-circle.svg";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function ErrorDialog() {
  const { errorMessage, isErrorOpen, clearError } = useUIStore();

  return (
    <Dialog open={isErrorOpen} onOpenChange={clearError}>
      <DialogContent
        className="
          bg-white outline-none border-0 
          max-w-[420px] shadow-lg rounded-[12px]
          flex flex-col items-center gap-[24px] py-[32px] px-[24px]
        "
        showCloseButton={false}
      >
        <VisuallyHidden>
          <DialogTitle>Error Dialog</DialogTitle>
        </VisuallyHidden>
        <div className="size-[72px] bg-red-100 rounded-full flex-center">
          <WarningIcon className="text-red-600 size-[36px]" />
        </div>

        <div className="text-center space-y-[8px]">
          <h2 className="h3 text-black">Oops! Something Went Wrong</h2>
          <p className="b2  -r text-neutral-n700 w-full">
            {errorMessage || "An unexpected error occurred. Please try again."}
          </p>
        </div>

        <Button className="w-full" onClick={clearError}>
          Continue
        </Button>
      </DialogContent>
    </Dialog>
  );
}

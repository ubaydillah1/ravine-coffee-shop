"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { toastError, toastSuccess } from "../ui/sonner";
import { ModalProps } from "@/features/cashier/types/modal";
import { useUpdateStatusUser } from "@/features/admin/cashier/hooks/useUpdateStatusUser";

type StatusType = "ACTIVE" | "INACTIVE";

const ORDER_STATUS_MAP: Record<StatusType, { label: string }> = {
  ACTIVE: { label: "Active" },
  INACTIVE: { label: "Inactive" },
};

const availableStatuses: StatusType[] = ["ACTIVE", "INACTIVE"];

interface CashierStatusChangeOverlayProps extends ModalProps {
  status: StatusType;
  cashierId: string;
}

const CashierStatusChangeOverlay = ({
  openModal,
  closeModal,
  status,
  cashierId,
}: CashierStatusChangeOverlayProps) => {
  const [activeStatus, setActiveStatus] = useState<StatusType>(status);
  const [currentStatus, setCurrentStatus] = useState<StatusType>(status);

  const { mutate, isPending } = useUpdateStatusUser({
    mutationConfig: {
      onSuccess: () => {
        toastSuccess("Cashier status updated");
        closeModal();
      },

      onError: () => {
        toastError("Failed to update status");
      },
    },
  });

  const handleSave = async () => {
    setCurrentStatus(activeStatus);
    mutate({ id: cashierId, status: activeStatus });
  };

  return (
    <>
      <Dialog open={openModal} onOpenChange={closeModal}>
        <DialogContent
          className="bg-white p-0 flex flex-col outline-0 border-0 overflow-hidden w-full sm:min-w-[420px]"
          showCloseButton={false}
        >
          <DialogHeader>
            <DialogTitle className="bg-neutral-n200 text-center py-3 b1-b">
              Change Status
            </DialogTitle>
          </DialogHeader>

          <div className="p-8 space-y-10 w-full -mt-[40px]">
            <div className="flex gap-4 w-full">
              {availableStatuses.map((status) => (
                <Button
                  key={status}
                  size="none"
                  className={cn(
                    "flex items-center justify-center gap-3 py-2 flex-1 b2-r border rounded-md transition-all",
                    activeStatus === status
                      ? "border-primary-b300 text-primary-b300 bg-primary-b50"
                      : "border-neutral-n300 hover:border-neutral-400"
                  )}
                  variant={activeStatus === status ? "outline" : "outlineGray"}
                  onClick={() => setActiveStatus(status)}
                >
                  <div
                    className={cn(
                      "size-5 rounded-full border-2 flex items-center justify-center",
                      activeStatus === status
                        ? "border-primary-b300"
                        : "border-neutral-n300"
                    )}
                  >
                    {activeStatus === status && (
                      <div className="size-3 rounded-full bg-primary-b300"></div>
                    )}
                  </div>
                  {ORDER_STATUS_MAP[status].label}
                </Button>
              ))}
            </div>

            <DialogFooter className="flex w-full gap-6">
              <Button
                variant="outline"
                className="flex-1"
                onClick={closeModal}
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button
                className="flex-1 bg-primary-b300"
                onClick={handleSave}
                disabled={isPending || activeStatus === currentStatus}
              >
                {isPending ? "Saving..." : "Done"}
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CashierStatusChangeOverlay;

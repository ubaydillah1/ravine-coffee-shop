"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import ChevronDown from "@/public/assets/icons/chevron-down.svg";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUpdateStatusOrder } from "@/features/cashier/hooks/useUpdateStatusOrder";
import { ORDER_STATUS_MAP } from "@/utils/orderStatusBadge";
import { OrderStatus } from "@/types/order";
import { toastSuccess, toastError } from "../ui/sonner";

interface StatusChangeOverlayProps {
  text: string;
  variant: "success" | "warning" | "info" | "danger" | "neutral";
  orderId: string;
currentStatus: OrderStatus;
  onStatusChange?: (newStatus: OrderStatus) => void;
}

const StatusChangeOverlay = ({
  text = "Completed",
  variant = "success",
  orderId,
  currentStatus,
  onStatusChange,
}: StatusChangeOverlayProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [activeStatus, setActiveStatus] = useState<OrderStatus>(
    currentStatus.toLowerCase() as OrderStatus
  );

  const { mutate: updateStatus, isPending } = useUpdateStatusOrder({
    mutationConfig: {
      onSuccess: () => toastSuccess("Order status updated"),
      onError: () => {
        toastError("Failed to update status");
        // Rollback optimistic update jika error
        onStatusChange?.(currentStatus);
      },
    },
  });

  const closeModal = () => setOpenModal(false);

  const handleSave = () => {
    // Optimistic update - langsung ubah UI sebelum API response
    onStatusChange?.(activeStatus);

    closeModal();

    // API call di background
    updateStatus({
      id: orderId,
      status: activeStatus,
    });
  };

  const availableStatuses: OrderStatus[] = [
    "completed",
    "inprogress",
    "canceled",
    "openbill",
  ];

  return (
    <>
      <div
        className="cursor-pointer flex items-center gap-2"
        onClick={() => setOpenModal(true)}
      >
        <Badge variant={variant}>{text}</Badge>
        <ChevronDown className="size-[16px]" />
      </div>

      <Dialog open={openModal} onOpenChange={closeModal}>
        <DialogContent
          className="bg-white p-[0] flex gap-[0] flex-col outline-0 border-0 overflow-hidden min-w-[626px]"
          showCloseButton={false}
        >
          <DialogHeader>
            <DialogTitle className="bg-neutral-n200 text-center py-[12px] b1-b">
              Change Status
            </DialogTitle>
          </DialogHeader>
          <div className="p-[32px] space-y-[48px] w-full">
            <div className="flex gap-[16px] w-full">
              {availableStatuses.map((status) => (
                <Button
                  key={status}
                  size={"none"}
                  className={cn(
                    "flex flex-center gap-[12px] b2-r outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:ring-0 active:outline-none active:ring-0 py-[8px] flex-1",
                    activeStatus === status
                      ? "text-primary-b300 hover:bg-white hover:text-primary-b300"
                      : "hover:border-neutral-300"
                  )}
                  variant={activeStatus === status ? "outline" : "outlineGray"}
                  onClick={() => setActiveStatus(status)}
                >
                  <div
                    className={cn(
                      "size-[20px] rounded-full border-[2px] flex-center",
                      activeStatus === status
                        ? "border-primary-b300"
                        : "border-neutral-n300"
                    )}
                  >
                    <div
                      className={cn(
                        "size-[12px] rounded-full",
                        activeStatus === status ? "bg-primary-b300" : "hidden"
                      )}
                    ></div>
                  </div>
                  {ORDER_STATUS_MAP[status].label}
                </Button>
              ))}
            </div>
            <DialogFooter className="flex w-full gap-[24px]">
              <Button
                variant={"outline"}
                className="flex-1 hover:bg-primary-b300"
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

export default StatusChangeOverlay;

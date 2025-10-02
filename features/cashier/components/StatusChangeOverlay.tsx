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

type Variant = "success" | "warning" | "info" | "danger";
type Status = "completed" | "canceled" | "open-bill" | "in-progress";

const StatusChangeOverlay = ({
  text = "Completed",
  variant = "success",
}: {
  text: string;
  variant: Variant;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [activeStatus, setActiveStatus] = useState<Status>("completed");

  const closeModal = () => setOpenModal(false);

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
            <DialogTitle className="bg-neutral-n200 text-center py-[12px]">
              Change Status
            </DialogTitle>
          </DialogHeader>
          <div className="p-[32px] space-y-[48px] w-full">
            <div className="flex gap-[16px] w-full ">
              <Button
                size={"none"}
                className={cn(
                  "flex flex-center gap-[12px] b2-r outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:ring-0 active:outline-none active:ring-0 py-[8px] flex-1",
                  activeStatus === "completed"
                    ? "text-primary-b300 hover:bg-white hover:text-primary-b300"
                    : "hover:border-neutral-300"
                )}
                variant={
                  activeStatus === "completed" ? "outline" : "outlineGray"
                }
                onClick={() => setActiveStatus("completed")}
              >
                <div
                  className={cn(
                    "size-[20px] rounded-full border-[2px] flex-center",
                    activeStatus === "completed"
                      ? "border-primary-b300 "
                      : "border-neutral-n300"
                  )}
                >
                  <div
                    className={cn(
                      "size-[12px] rounded-full",
                      activeStatus === "completed"
                        ? "bg-primary-b300"
                        : "hidden"
                    )}
                  ></div>
                </div>
                Completed
              </Button>
              <Button
                size={"none"}
                className={cn(
                  "flex flex-center gap-[12px] b2-r outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:ring-0 active:outline-none active:ring-0 py-[8px] flex-1",
                  activeStatus === "canceled"
                    ? "text-primary-b300 hover:bg-white hover:text-primary-b300"
                    : "hover:border-neutral-300"
                )}
                variant={
                  activeStatus === "canceled" ? "outline" : "outlineGray"
                }
                onClick={() => setActiveStatus("canceled")}
              >
                <div
                  className={cn(
                    "size-[20px] rounded-full border-[2px] flex-center",
                    activeStatus === "canceled"
                      ? "border-primary-b300 "
                      : "border-neutral-n300"
                  )}
                >
                  <div
                    className={cn(
                      "size-[12px] rounded-full",
                      activeStatus === "canceled" ? "bg-primary-b300" : "hidden"
                    )}
                  ></div>
                </div>
                Canceled
              </Button>
              <Button
                size={"none"}
                className={cn(
                  "flex flex-center gap-[12px] b2-r outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:ring-0 active:outline-none active:ring-0 py-[8px] flex-1",
                  activeStatus === "in-progress"
                    ? "text-primary-b300 hover:bg-white hover:text-primary-b300"
                    : "hover:border-neutral-300"
                )}
                variant={
                  activeStatus === "in-progress" ? "outline" : "outlineGray"
                }
                onClick={() => setActiveStatus("in-progress")}
              >
                <div
                  className={cn(
                    "size-[20px] rounded-full border-[2px] flex-center",
                    activeStatus === "in-progress"
                      ? "border-primary-b300 "
                      : "border-neutral-n300"
                  )}
                >
                  <div
                    className={cn(
                      "size-[12px] rounded-full",
                      activeStatus === "in-progress"
                        ? "bg-primary-b300"
                        : "hidden"
                    )}
                  ></div>
                </div>
                In Progress
              </Button>
              <Button
                size={"none"}
                className={cn(
                  "flex flex-center gap-[12px] b2-r outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:ring-0 active:outline-none active:ring-0 py-[8px] flex-1",
                  activeStatus === "open-bill"
                    ? "text-primary-b300 hover:bg-white hover:text-primary-b300"
                    : "hover:border-neutral-300"
                )}
                variant={
                  activeStatus === "open-bill" ? "outline" : "outlineGray"
                }
                onClick={() => setActiveStatus("open-bill")}
              >
                <div
                  className={cn(
                    "size-[20px] rounded-full border-[2px] flex-center",
                    activeStatus === "open-bill"
                      ? "border-primary-b300 "
                      : "border-neutral-n300"
                  )}
                >
                  <div
                    className={cn(
                      "size-[12px] rounded-full",
                      activeStatus === "open-bill"
                        ? "bg-primary-b300"
                        : "hidden"
                    )}
                  ></div>
                </div>
                Open Bill
              </Button>
            </div>
            <DialogFooter className="flex w-full gap-[24px]">
              <Button
                variant={"outline"}
                className="flex-1 hover:bg-primary-b300"
                onClick={closeModal}
              >
                Cancel
              </Button>
              <Button className="flex-1 bg-primary-b300">Done</Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StatusChangeOverlay;

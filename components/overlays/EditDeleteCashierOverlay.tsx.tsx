"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { ModalProps } from "@/features/cashier/types/modal";
import Image from "next/image";
import { Cashier } from "@/features/admin/cashier/api/getCashiers";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { useDeleteCashier } from "@/features/admin/cashier/hooks/useDeleteCashier";
import { toastError, toastSuccess } from "../ui/sonner";
import { queryClient } from "@/lib/reactQuery";
import ChangeStatusAction, {
  UserStatus,
} from "@/features/admin/cashier/components/ChangeStatusAction";

interface EditDeleteCashierOverlayProps extends ModalProps {
  data: Cashier;
}

const EditDeleteCashierOverlay = ({
  closeModal,
  openModal,
  data,
}: EditDeleteCashierOverlayProps) => {
  const { mutate: mutateDelete } = useDeleteCashier({
    mutationConfig: {
      onMutate: async ({ cashierId: id }) => {
        const previousCashiers =
          queryClient.getQueryData<Cashier[]>(["cashiers"]) || [];

        queryClient.setQueryData<Cashier[]>(
          ["cashiers"],
          previousCashiers.filter((c: Cashier) => c.id !== id)
        );

        return { previousCashiers };
      },
      onError: () => {
        toastError("Failed to delete cashier");
      },
      onSuccess: () => toastSuccess("Cashier deleted successfully"),
    },
  });

  const handleDeleteClick = () => {
    mutateDelete({ cashierId: data.id });
    closeModal();
  };

  return (
    <Dialog open={openModal} onOpenChange={closeModal}>
      <DialogContent className="bg-white p-0! mx-0! w-full! sm:max-w-[500px] rounded-2xl border-0 shadow-lg overflow-hidden">
        <DialogHeader>
          <DialogTitle className="bg-neutral-100 text-center py-[12px] font-semibold text-lg">
            Account Details
          </DialogTitle>
        </DialogHeader>

        <div className="p-[32px] -mt-[40px] flex flex-col gap-[32px]">
          <div className="w-full relative h-[240px] rounded-[12px] overflow-hidden">
            <Image
              src={data.avatar || "/assets/images/ba-image.png"}
              alt="cashier"
              sizes="100%"
              className="mx-auto object-cover"
              priority
              fill
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="space-y-1">
                <p className="b3-r text-neutral-n700">Status</p>
                <ChangeStatusAction
                  status={data.status as UserStatus}
                  cashierId={data.id}
                />
              </div>

              <div className="space-y-1 w-[100px] sm:w-[140px]">
                <p className="b3-r text-neutral-n700">Date Of Birth</p>
                <p className="b3-b">
                  {data.dateOfBirth
                    ? format(new Date(data.createdAt), "dd MMM yyyy")
                    : "-"}
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="space-y-1">
                <p className="b3-r text-neutral-n700">Full Name</p>
                <p className="b3-b">{data.fullName || "-"}</p>
              </div>

              <div className="space-y-1 w-[100px] sm:w-[140px]">
                <p className="b3-r text-neutral-n700">Phone Number</p>
                <p className="b3-b">{data.phoneNumber || "-"}</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="space-y-1">
                <p className="b3-r text-neutral-n700">Email</p>
                <p className="b3-b">{data.email || "-"}</p>
              </div>

              <div className="space-y-1 w-[100px] sm:w-[140px]">
                <p className="b3-r text-neutral-n700">City</p>
                <p className="b3-b">{data.city || "-"}</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="space-y-1">
                <p className="b3-r text-neutral-n700">Password</p>
                <p className="b3-b">*********</p>
              </div>

              <div className="space-y-1 w-[100px] sm:w-[140px]">
                <p className="b3-r text-neutral-n700">Joined</p>
                <p className="b3-b">
                  {data.createdAt
                    ? format(new Date(data.createdAt), "dd MMM yyyy")
                    : "-"}
                </p>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="destructive"
              className="w-full rounded-[6px]"
              size="full"
              onClick={handleDeleteClick}
            >
              Delete Account
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditDeleteCashierOverlay;

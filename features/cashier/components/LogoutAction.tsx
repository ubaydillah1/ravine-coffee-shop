"use client";

import React, { useState } from "react";
import Logout from "@/public/assets/icons/log-out.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

const LogoutAction = () => {
  const [openModal, setOpenModal] = useState(false);
  const { logout } = useAuthStore();
  const router = useRouter();

  const closeModal = () => setOpenModal(false);
  return (
    <>
      <div
        className="flex-center w-full cursor-pointer flex-col gap-[4px] p-[16px] rounded-[8px] text-neutral-n400"
        onClick={() => setOpenModal(true)}
      >
        <Logout className="size-[32px] rotate-180" />
        <p className="l2-b">Log out</p>
      </div>

      <Dialog open={openModal} onOpenChange={closeModal}>
        <DialogContent
          className="min-w-[640px] bg-white flex flex-col gap-[32px] py-[48px] px-[80px] text-center"
          showCloseButton={false}
        >
          <div className="relative mx-auto size-[160px]">
            <Image
              src="/assets/illustrations/logout-illustration.png"
              alt="qr-cancel-illustration"
              fill
            />
          </div>
          <DialogHeader className="text-center flex-center flex-col">
            <DialogTitle>Want to log out?</DialogTitle>
            <DialogDescription>
              You can always log back in anytime
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex! w-full justify-between gap-4">
            <Button
              className="flex-1 w-full shrink-0"
              onClick={() => {
                closeModal();
              }}
            >
              Back
            </Button>
            <Button
              variant="outline"
              onClick={async () => {
                closeModal();
                await router.push("/login");
                logout();
              }}
              className="w-1/2"
            >
              Log out
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LogoutAction;

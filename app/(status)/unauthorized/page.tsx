"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import LockIcon from "@/public/assets/icons/lock.svg";
import Link from "next/link";

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-n50 p-6">
      <div className="bg-white shadow-md rounded-[12px] px-[32px] py-[40px] max-w-[420px] text-center flex flex-col items-center gap-[20px]">
        <div className="size-[80px] bg-red-100 rounded-full flex items-center justify-center">
          <LockIcon className="text-red-600 size-[40px]" />
        </div>

        <h1 className="h3 text-black">Access Denied</h1>

        <p className="text-neutral-n700 b2-r">
          You don’t have permission to view this page. Please log in to
          continue.
        </p>

        <Link href="/login">
          <Button className="w-full mt-[12px]">Go to Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;

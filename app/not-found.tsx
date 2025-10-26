"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SearchIcon from "@/public/assets/icons/search.svg";
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-n50 p-6">
      <div className="bg-white shadow-md rounded-[12px] px-[32px] py-[40px] max-w-[420px] text-center flex flex-col items-center gap-[20px]">
        <div className="size-[80px] bg-primary-b200/20 rounded-full flex items-center justify-center">
          <SearchIcon className="text-primary-b300 size-[40px]" />
        </div>

        <h1 className="h3 text-black">Page Not Found</h1>

        <p className="b2-r text-neutral-n700">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link href="/">
          <Button className="w-full mt-[12px]">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

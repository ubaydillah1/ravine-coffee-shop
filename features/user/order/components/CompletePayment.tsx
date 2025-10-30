import React from "react";
import QrCode from "@/public/assets/icons/qrcode.svg";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const CompletePayment = () => {
  return (
    <div className="px-[21px] bg-white flex flex-col gap-[24px] pb-[24px]">
      <strong className="sub-h2">Complete Payment</strong>
      <div className="border border-primary-b300 rounded-[8px] py-[12px] px-[20px] flex flex-col gap-[10px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <QrCode />
            <p className="l2-r">Online Payment</p>
          </div>

          <div className="rounded-full size-[24px] border-[2px] border-primary-b300 flex-center">
            <div className="rounded-full size-[12px] bg-primary-b300"></div>
          </div>
        </div>

        <div className="flex gap-[12px] px-[6px]">
          <Checkbox checked={true} disabled />
          <p className="l3-r">
            I agree to the{" "}
            <Link href="/terms" className="text-neutral-n900 font-bold">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-neutral-n900 font-bold">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompletePayment;

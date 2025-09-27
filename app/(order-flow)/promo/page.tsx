import Header from "@/components/Header";
import Input from "@/components/Input";
import Image from "next/image";
import React from "react";

const PromoPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header title="Add Promos or Voucher" withBackArrow={true} />

      <main className="flex flex-col flex-1 overflow-auto">
        <div className="px-[21px] py-4">
          <Input />
        </div>

        <div className="flex flex-col gap-[24px] items-center text-center p-4 mt-[40px]">
          <div className="size-[240px] relative">
            <Image
              src="/assets/illustrations/promo-illustration.png"
              alt="promo-illustration"
              fill
            />
          </div>
          <p className="text-neutral-n700">
            Promo/voucher isn’t available yet. You can enter the promo/voucher
            code if you have one.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PromoPage;

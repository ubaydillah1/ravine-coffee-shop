"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";

const CTAOrder = () => {
  const { totalPrice } = useCartStore();
  const router = useRouter();
  return (
    <div
      className="fixed bottom-0 left-0 right-0 px-[21px] py-[16px] flex justify-between bg-white "
      style={{
        boxShadow: "0px -4px 16px #00000014",
        color: "red",
      }}
    >
      <div className="b2-b text-neutral-n900">
        Total Order
        <div className="mt-[8px] sub-h2">
          Rp{totalPrice().toLocaleString("id-ID")}
        </div>
      </div>

      <Button
        onClick={() => {
          router.push("/order/payment");
        }}
        className="py-[12px] px-[32px] rounded-[8px]"
      >
        Continue to Payment
      </Button>
    </div>
  );
};

export default CTAOrder;

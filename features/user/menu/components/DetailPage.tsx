"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Minus from "@/public/assets/icons/minus.svg";
import Plus from "@/public/assets/icons/plus.svg";
import { Button } from "@/components/ui/button";
import XIcon from "@/public/assets/icons/x.svg";
import ShoppingCart from "@/public/assets/icons/shopping-cart.svg";
import { useGetMenuBySlug } from "../hooks/useGetMenuBySlug";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { Check } from "lucide-react";
import { useTableStore } from "@/store/useTableStore";

const DetailPage = ({ slug }: { slug: string }) => {
  const router = useRouter();
  const { data, isPending } = useGetMenuBySlug({ slug });
  const [notes, setNotes] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const tableNumber = useTableStore((state) => state.tableNumber);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) setNotes(saved);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem("notes", notes);
    }, 300);

    return () => clearTimeout(timeout);
  }, [notes]);

  const formattedPrice = data?.price
    ? new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(Number(data.price) * quantity)
    : "Erorr";

  if (isPending) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleOrder = () => {
    addItem({
      productId: data?.id || "",
      productImage: data?.image || "",
      productName: data?.name || "",
      productPrice: Number(data?.price) || 0,
      quantity,
      productCategory: data?.category || "",
    });

    setQuantity(1);
    setIsSuccess(true);

    setTimeout(() => setIsSuccess(false), 1500);
  };

  return (
    <main className="min-h-screen flex flex-col justify-between relative">
      <div
        className="flex-center size-[28px] bg-white z-90 rounded-full absolute left-4 top-4 cursor-pointer"
        onClick={() => {
          if (tableNumber) {
            router.push(`/menu/t/${tableNumber}`);
          }
        }}
      >
        <XIcon className="size-[12px]" />
      </div>
      <div className="flex-center size-[28px] bg-white z-90 rounded-full absolute right-4 top-4 cursor-pointer">
        <ShoppingCart className="size-[12px]" />
      </div>

      <div className="relative aspect-square w-full h-[268px] bg-[#fdf7f2]">
        <Image
          src={data?.image || "/assets/images/ba-image.png"}
          fill
          alt={data?.name || "product-image"}
          sizes="100%"
          className="object-contain"
          priority
        />
      </div>

      <div className="w-full gap-[8px] flex-1 rounded-t-[16px] overflow-hidden bg-white mb-[10px]">
        <div className="px-[21px] py-[16px] flex flex-col gap-[8px]">
          <p className="b1-r">
            {data?.name || "Bundling Coffee + Toast + French Fries"}
          </p>
          <p className="sub-h2 font-bold">{formattedPrice}</p>
        </div>

        <div className="px-[21px] py-[16px] bg-white flex flex-col gap-[8px] h-[300px]">
          <div className="flex justify-between">
            <p className="b2-b">Notes</p>
            <p className="b2-r text-gray-600">Optional</p>
          </div>
          <textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setNotes(e.target.value);
            }}
            value={notes}
            name=""
            id=""
            className="p-[12px] rounded-[6px] text-neutral-n900 border placeholder:text-neutral-n300 border-neutral-n300 h-[160px] focus:outline-none resize-none"
            placeholder="Example: Make my dish delicious"
          ></textarea>
        </div>
      </div>

      <div className="px-[21px] py-[24px] bg-white flex flex-col gap-[14px] sticky bottom-0 z-90">
        <div className="flex justify-between">
          <p className="b3-r">Total Order</p>
          <div className="flex gap-[24px] items-center b3-r text-black">
            <div
              onClick={() => {
                if (quantity <= 1) return;
                setQuantity(quantity - 1);
              }}
            >
              <Minus className="w-[15px] h-[15px]" />
            </div>

            <span>{quantity}</span>
            <div
              onClick={() => {
                if (quantity >= 10) return;
                setQuantity(quantity + 1);
              }}
            >
              <Plus className="w-[15px] h-[15px]" />
            </div>
          </div>
        </div>
        <Button
          onClick={handleOrder}
          className={`rounded-[8px] w-full transition-all duration-500 ${
            isSuccess
              ? "bg-accent-g500 hover:bg-green-500 flex gap-2 justify-center"
              : ""
          }`}
          disabled={isSuccess}
        >
          {isSuccess ? (
            <>
              <Check className="w-5 h-5" /> Added!
            </>
          ) : (
            <>Add Orders - {formattedPrice}</>
          )}
        </Button>
      </div>
    </main>
  );
};

export default DetailPage;

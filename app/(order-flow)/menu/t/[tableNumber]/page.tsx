import React from "react";
// import Search from "@/public/assets/icons/search.svg";
// import Menu from "@/public/assets/icons/menu.svg";
import TitleCard from "@/features/user/menu/components/TitleCard";
import TableCard from "@/features/user/menu/components/TableCard";
import CheckoutButton from "@/features/user/menu/components/CheckoutButton";
import { redirect } from "next/navigation";
import MenuWrapper from "@/features/user/menu/components/MenuWrapper";
import Image from "next/image";
import TableInitializer from "@/components/TableInitializer";

const MenuPage = async ({
  params,
}: {
  params: Promise<{ tableNumber: string }>;
}) => {
  const tableNumber = Number((await params).tableNumber);

  if (isNaN(tableNumber)) return redirect("/error");

  return (
    <main className="bg-white min-h-screen pb-[52px]">
      {/* <nav className="flex justify-end gap-[16px] px-[21px] py-[24px] ">
        <div className="w-[32px] h-[32px] bg-white rounded-full p-[8px] flex-center">
          <Search className="text-neutral-n900" />
        </div>
        <div className="w-[32px] h-[32px] bg-white rounded-full p-[8px] flex-center">
          <Menu className="text-neutral-n900" />
        </div>
      </nav> */}
      <TableInitializer tableNumber={tableNumber.toString()} />

      <div className="relative h-full">
        <Image
          src="/assets/images/ba-image.png"
          className="absolute inset-0 w-full h-full object-top-left object-cover"
          fill
          sizes="100%"
          priority
          alt="background-image"
        />
        <div className="relative z-10 p-6 flex flex-col gap-[24px]">
          <TitleCard />
          <TableCard />
        </div>
      </div>
      <main className="pb-[40px]">
        <MenuWrapper />
      </main>
      <CheckoutButton />
    </main>
  );
};

export default MenuPage;

import React from "react";
import Search from "@/public/assets/icons/search.svg";
import Menu from "@/public/assets/icons/menu.svg";
import TitleCard from "@/features/user/menu/components/TitleCard";
import TableCard from "@/features/user/menu/components/TableCard";
import NavigationMenu from "@/features/user/menu/components/NavigationMenu";
import RecommendationMenu from "@/features/user/menu/components/RecommendationMenu";
import CheckoutButton from "@/features/user/menu/components/CheckoutButton";

const MenuPage = () => {
  return (
    <main>
      <nav className="flex justify-end gap-[16px] px-[21px] py-[24px] ">
        <div className="w-[32px] h-[32px] bg-white rounded-full p-[8px] flex-center">
          <Search className="text-neutral-n900" />
        </div>
        <div className="w-[32px] h-[32px] bg-white rounded-full p-[8px] flex-center">
          <Menu className="text-neutral-n900" />
        </div>
      </nav>
      <main className="pb-[80px]">
        <div className="cursor-pointer flex flex-col gap-[24px] px-[21px]">
          <TitleCard />
          <TableCard />
        </div>

        <NavigationMenu />
        <RecommendationMenu />
      </main>
      <CheckoutButton />
    </main>
  );
};

export default MenuPage;

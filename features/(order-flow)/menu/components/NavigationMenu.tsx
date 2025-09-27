import React from "react";
import Menu from "@/public/assets/icons/menu.svg";

const NavigationMenu = () => {
  return (
    <nav className="w-full h-[36px] flex items-center gap-[20px] overflow-x-scroll hide-scrollbar px-[21px] mt-[24px] bg-white">
      <div className="flex items-center gap-[12px] text-primary-b300 cursor-auto">
        <Menu className="p-0 w-[20px] h-[20px]" />
        <p className="l2-b">Foods</p>
      </div>
      <div>
        <div className="h-[16px] w-[1px] bg-neutral-n300"></div>
      </div>
      <div className="l2-b">Indomie</div>
      <div className="l2-b">Indomie</div>
      <div className="l2-b">Indomie</div>
      <div className="l2-b">Indomie</div>
      <div className="l2-b">Indomie</div>
      <div className="l2-b">Indomie</div>
      <div className="l2-b">Indomie</div>
      <div className="l2-b">Indomie</div>
      <div className="l2-b">Indomie</div>
    </nav>
  );
};

export default NavigationMenu;

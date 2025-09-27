import React from "react";
import ArrowLeft from "@/public/assets/icons/arrow-left.svg";

type HeaderProps = {
  title: string;
  onClick?: () => void;
  withBackArrow?: boolean;
};

const Header = ({ title, onClick, withBackArrow = false }: HeaderProps) => {
  return (
    <header className="bg-white flex h-[60px] items-center px-[21px] shadow-sm w-full justify-between">
      <div className="w-[24px] h-[24px] flex-shrink-0">
        {withBackArrow && (
          <ArrowLeft className="w-[24px] h-[24px]" onClick={onClick} />
        )}
      </div>
      <p className="b1-b text-center flex-grow">{title}</p>
      <div className="w-[24px] h-[24px] flex-shrink-0"></div>
    </header>
  );
};

export default Header;

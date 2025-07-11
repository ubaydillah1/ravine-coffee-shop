import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchIcon from "@/public/assets/icons/search.svg";
import ShoppingCartIcon from "@/public/assets/icons/shopping-cart.svg";
import UserIcon from "@/public/assets/icons/user.svg";

const Navbar = () => {
  return (
    <nav className="bg-primary-b100 h-[82px] lg:h-[88px] fixed left-0 right-0 top-0 z-99 px-[20px] md:px-[40px]">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto h-full">
        <Image
          src={"/assets/images/logo.png"}
          alt="logo-compony"
          width={127}
          height={69}
          className="w-[91px] h-[59px] mx-auto lg:mx-0 inline-block"
        />

        <ul className="hidden lg:flex gap-[32px] capitalize lg:text-[20px] text-poppins l1-b text-neutral-n700">
          <li>
            <Link href={""}>Home</Link>
          </li>
          <li>
            <Link href={""}>Variants</Link>
          </li>
          <li>
            <Link href={""}>Contact</Link>
          </li>
          <li>
            <Link href={""}>Testimonial</Link>
          </li>
        </ul>

        <div className="hidden lg:flex gap-[20px]">
          <SearchIcon className="text-primary" width={20} height={20} />
          <ShoppingCartIcon className="text-primary" width={20} height={20} />
          <UserIcon className="text-primary" width={20} height={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

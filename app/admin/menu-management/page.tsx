"use client";
import AddActionButton from "@/features/admin/menu-menagement/components/AddActionButton";
import Header from "@/features/admin/menu-menagement/components/Header";
import MenuCards from "@/features/admin/menu-menagement/components/MenuCards";
import React, { useState } from "react";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("Coffee");

  return (
    <section className="flex flex-col sm:gap-[24px] gap-[12px] h-full md:pt-[40px] sm:pt-[24px] pt-[12px]">
      <Header
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <MenuCards />
      <AddActionButton />
    </section>
  );
};

export default MenuPage;

"use client";

import { Category } from "@/features/admin/menu-menagement/types";
import CashierHeader from "./CashierHeader";
import MenuSection from "./MenuSection";
import { useState } from "react";

const MenuWrapper = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("coffee");
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <CashierHeader
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        setSearch={setSearch}
        search={search}
      />
      <MenuSection activeCategory={activeCategory} search={search} />
    </>
  );
};

export default MenuWrapper;

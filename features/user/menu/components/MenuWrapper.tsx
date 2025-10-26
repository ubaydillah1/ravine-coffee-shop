"use client";

import React, { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import RecommendationMenu from "./RecommendationMenu";
import { Category } from "@/features/admin/menu-menagement/types";

const MenuWrapper = () => {
  const [category, setCategory] = useState<Category>("coffee");

  return (
    <div>
      <NavigationMenu category={category} onSelectCategory={setCategory} />
      <RecommendationMenu category={category} />
    </div>
  );
};

export default MenuWrapper;

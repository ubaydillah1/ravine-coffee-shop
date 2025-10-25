"use client";

import React from "react";
import CategoryButtonList from "../../../../components/CategoryButtonList";
import { Category } from "../types";
import { useQuery } from "@tanstack/react-query";
import {
  getTotalProducts,
  getTotalProductsQueryKey,
} from "../api/getTotalProducts";

interface CategoryButtonListProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const Header = ({
  activeCategory,
  onSelectCategory,
}: CategoryButtonListProps) => {
  const { data, isPending } = useQuery({
    queryKey: getTotalProductsQueryKey(),
    queryFn: getTotalProducts,
  });

  return (
    <>
      <p className="b1-b sm:sub-h1">
        Total Item: {`${isPending ? "..." : data}`}
      </p>
      <CategoryButtonList
        activeCategory={activeCategory}
        onSelectCategory={onSelectCategory}
      />
    </>
  );
};

export default Header;

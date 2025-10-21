import React from "react";
import CategoryButtonList from "../../../../components/CategoryButtonList";

interface CategoryButtonListProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const Header = ({
  activeCategory,
  onSelectCategory,
}: CategoryButtonListProps) => {
  return (
    <>
      <p className="b1-b sm:sub-h1">Total Item: 64</p>
      <CategoryButtonList
        activeCategory={activeCategory}
        onSelectCategory={onSelectCategory}
      />
    </>
  );
};

export default Header;

"use client";

import React from "react";
import CardMenu from "../../../../components/CardMenu";
import { Category } from "@/features/admin/menu-menagement/types";
import { useGetMenu } from "../hooks/useGetMenu";
import { useGetRecommendationsMenu } from "../hooks/useGetRecommendationsMenu";

const RecommendationMenu = ({ category }: { category: Category }) => {
  const { data: dataMenu, isLoading: isLoadingDataMenu } = useGetMenu({
    category,
  });
  const { data: dataRecommendationMenu, isLoading: isLoadingReco } =
    useGetRecommendationsMenu({});

  const productsMenu = dataMenu?.pages.flatMap((page) => page.products) ?? [];
  const productsRecommendations = dataRecommendationMenu ?? [];

  const skeletonHorizontal = (
    <div className="w-full p-[16px] border border-neutral-n100 shadow-md rounded-[8px] flex gap-[12px] bg-white animate-pulse">
      <div className="w-[64px] h-[64px] bg-neutral-n200 rounded-[8px]" />
      <div className="flex flex-col gap-[8px] w-full justify-between">
        <div className="w-[60%] h-[12px] bg-neutral-n200 rounded-[4px]" />
        <div className="w-[40%] h-[12px] bg-neutral-n200 rounded-[4px]" />
      </div>
    </div>
  );

  const skeletonVertical = (
    <div className="w-[164px] p-[16px] border border-neutral-n100 shadow-md rounded-[8px] flex flex-col gap-[12px] bg-white animate-pulse">
      <div className="w-[132px] h-[132px] bg-neutral-n200 rounded-[8px]" />
      <div className="w-[80%] h-[12px] bg-neutral-n200 rounded-[4px]" />
      <div className="w-[50%] h-[12px] bg-neutral-n200 rounded-[4px]" />
    </div>
  );

  return (
    <div className="bg-white pt-[10px]">
      <div
        className={`${productsRecommendations.length === 0 ? "hidden" : ""}`}
      >
        <div className="relative flex-center h-[30px] px-[21px]">
          <div className="h-[1px] w-full bg-neutral-n300"></div>
          <p className="absolute bg-white px-[20px] b2-b text-black">
            Recommendation Menu
          </p>
        </div>

        <div className="my-[16px] flex gap-[12px] overflow-x-scroll hide-scrollbar w-full px-[21px] pb-1">
          {isLoadingReco ? (
            Array.from({ length: 5 }).map((_, i) => (
              <React.Fragment key={i}>{skeletonVertical}</React.Fragment>
            ))
          ) : productsRecommendations.length === 0 ? (
            <p className="text-center text-neutral-n600 py-[24px] w-full b3-r">
              No Recommendation Yet
            </p>
          ) : (
            productsRecommendations.map((product) => (
              <CardMenu key={product.id} data={product} />
            ))
          )}
        </div>
      </div>

      <div className="relative flex-center h-[30px] px-[21px]">
        <div className="h-[1px] w-full bg-neutral-n300"></div>
        <p className="absolute bg-white px-[20px] b2-b text-black">Foods</p>
      </div>

      <div className="flex flex-col gap-[12px] px-[21px] pb-[16px] mt-[8px]">
        {isLoadingDataMenu ? (
          Array.from({ length: 4 }).map((_, i) => (
            <React.Fragment key={i}>{skeletonHorizontal}</React.Fragment>
          ))
        ) : productsMenu.length === 0 ? (
          <p className="text-center b3-r text-neutral-n600 py-[24px]">
            No Menu Available
          </p>
        ) : (
          productsMenu.map((product) => (
            <CardMenu key={product.id} data={product} layout="horizontal" />
          ))
        )}
      </div>
    </div>
  );
};

export default RecommendationMenu;

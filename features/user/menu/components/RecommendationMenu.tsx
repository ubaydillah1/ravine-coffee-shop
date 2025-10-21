import React from "react";
import CardMenu from "../../../../components/CardMenu";

const RecommendationMenu = () => {
  return (
    <>
      <div className="bg-white pt-[10px]">
        <div className="relative flex-center h-[30px] px-[21px]">
          <div className="h-[1px] w-full bg-neutral-n300"></div>
          <p className="absolute bg-white px-[20px] b2-b text-black">
            Recommendation Menu
          </p>
        </div>
        <div className="my-[16px] flex gap-[12px] overflow-x-scroll hide-scrollbar w-full px-[21px] pb-1">
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
        </div>
        <div className="relative flex-center h-[30px] px-[21px]">
          <div className="h-[1px] w-full bg-neutral-n300"></div>
          <p className="absolute bg-white px-[20px] b2-b text-black">Foods</p>
        </div>

        <p className="mt-[8px] b2-b text-black px-[21px] mb-[16px]">Indomie</p>

        <div className="flex flex-col gap-[12px] px-[21px] pb-[16px]">
          <CardMenu layout="horizontal" />
          <CardMenu layout="horizontal" />
          <CardMenu layout="horizontal" />
          <CardMenu layout="horizontal" />
          <CardMenu layout="horizontal" />
        </div>
      </div>

      <div className="my-[16px] gap-[16px] flex flex-col">
        <div className="flex justify-between px-[21px]">
          <p className="l3-r text-neutral-900">Comple your meal too</p>
          <p className="l3-r text-neutral-900">Later</p>
        </div>

        <div className="flex gap-[12px] overflow-x-scroll hide-scrollbar w-full px-[21px] pb-1">
          <CardMenu layout="small-vertical" />
          <CardMenu layout="small-vertical" />
          <CardMenu layout="small-vertical" />
          <CardMenu layout="small-vertical" />
          <CardMenu layout="small-vertical" />
        </div>
      </div>
    </>
  );
};

export default RecommendationMenu;

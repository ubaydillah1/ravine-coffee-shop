import React from "react";

const InputCodeCashier = () => {
  return (
    <div className="flex-center flex-col gap-[24px] h-full">
      <div className="text-center space-y-[8px]">
        <h2 className="sub-h1">Code from customer</h2>
        <p className="b2-r text-neutral-n700">
          Add 8 digit code from customer or scan
        </p>
      </div>

      <div className="w-full p-[12px] border rounded-[6px] border-neutral-n400">
        <input className="w-full focus:outline-0 text-neural-n400!" />
      </div>
    </div>
  );
};

export default InputCodeCashier;

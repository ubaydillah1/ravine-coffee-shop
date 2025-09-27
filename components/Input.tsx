import React, { HTMLInputTypeAttribute } from "react";

const Input = ({ type = "text" }: { type?: HTMLInputTypeAttribute }) => {
  return (
    <input
      type={type}
      className="w-full p-[11px] rounded-[6px] border border-neutral-n300 focus:outline-none b3-b text-neutral-n900"
      placeholder="Enter a Promo/Voucher Code"
    />
  );
};

export default Input;

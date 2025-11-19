import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import User from "@/public/assets/icons/user.svg";
import Phone from "@/public/assets/icons/phone.svg";
import Email from "@/public/assets/icons/mail.svg";

type InputLabelProps = {
  label: string;
  name: string;
  placeholder?: string;
  icon: "user" | "phone" | "email";
  type?: HTMLInputTypeAttribute;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputLabel = ({
  label,
  name,
  placeholder = "John Due",
  type = "text",
  icon,
  error,
  className = "",
  ...props
}: InputLabelProps) => {
  return (
    <div className="flex flex-col gap-[8px] w-full">
      <label htmlFor={name} className="b2-b">
        {label}
      </label>
      <div
        className={`flex gap-[8px] p-[11px] b3-r border border-neutral-n300 rounded-[6px] w-full ${
          error ? "border-red-500" : ""
        } ${className}`}
      >
        {icon === "user" && <User className="size-[24px] text-neutral-n700" />}
        {icon === "email" && (
          <Email className="size-[24px] text-neutral-n700" />
        )}
        {icon === "phone" && (
          <Phone className="size-[24px] text-neutral-n700" />
        )}
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className="w-full focus:outline-none b3-r"
          {...props}
        />
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default InputLabel;

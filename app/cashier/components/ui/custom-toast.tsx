import React from "react";

interface MyToastProps {
  message: string;
  type: "success" | "error";
}

export const CustomToast = ({ message, type }: MyToastProps) => {
  const dotColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className="flex items-center gap-[10px] bg-white rounded-[8px] px-[12px] py-[8px] shadow-md">
      <span className={`w-[8px] h-[8px] rounded-full ${dotColor}`} />
      <span className="b3-b text-neural-n900">{message}</span>
    </div>
  );
};

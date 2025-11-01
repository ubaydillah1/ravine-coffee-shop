import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden">
      <div className="size-[32px] border-4 border-primary-b300 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;

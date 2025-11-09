import { config } from "@/lib/config";
import React from "react";
import QRCode from "react-qr-code";

const WelcomePage = () => {
  return (
    <div className="min-h-screen py-10 max-w-[1200px] w-full mx-[20px] md:mx-[40px] lg:mx-0">
      <h1 className="h1 text-16 text-center">
        Scan the QR code with your phone to see the menu 😊
      </h1>

      <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-10">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <QRCode value={`${config.BASE_URL}/menu/t/${index + 1}`} />
            <p className="text-2xl mt-4">Table {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomePage;

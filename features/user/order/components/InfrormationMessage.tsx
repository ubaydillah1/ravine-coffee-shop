import { config } from "@/lib/config";
import React from "react";
import QRCode from "react-qr-code";

const InfrormationMessage = () => {
  return (
    <div className="hidden sm:block min-h-screen py-10 max-w-[1200px] sm:mx-[40px] lg:mx-0">
      <h1 className="h1 text-16 text-center">
        Scan the QR code with your phone to see the menu 😊
      </h1>

      <div className="grid gap-16 grid-cols-2 xl:grid-cols-4 my-10">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <QRCode
              value={`${config.BASE_URL}/menu/t/${index + 1}`}
              size={200}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            />
            <p className="text-12 mt-2">Table {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfrormationMessage;

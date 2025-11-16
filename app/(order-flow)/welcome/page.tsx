import { config } from "@/lib/config";
import React from "react";
import QRCode from "react-qr-code";

const WelcomePage = () => {
  return (
    <div className="min-h-screen py-10 max-w-[1200px] w-full px-[20px] md:mx-[40px] lg:mx-0">
      <h1 className="h1 text-16 text-center">
        Scan the QR code with your phone to see the menu 😊
      </h1>

      <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-10 w-full">
        {[...Array(8)].map((_, index) => {
          const link = `${config.BASE_URL}/menu/t/${index + 1}`;

          return (
            <div key={index} className="flex flex-col items-center">
              <QRCode value={link} />

              {/* Teks klik khusus mobile */}
              <a
                href={link}
                className="
                  text-2xl mt-4 text-blue-600 underline md:hidden
                  active:scale-[0.98] transition
                "
              >
                Table {index + 1}
              </a>

              {/* Teks biasa untuk desktop */}
              <p className="text-2xl mt-4 hidden md:block">Table {index + 1}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WelcomePage;

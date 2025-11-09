"use client";

import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import { OrderTrackerJoiner } from "@/components/OrderTrackerJoiner";
import CallActionSection from "@/features/user/order/components/CallActionSection";
import NotFoundOrder from "@/features/user/order/components/NotFoundOrder";
import { useOrderStore } from "@/store/useOrderStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const QrisPaymentPage = () => {
  const { OrderInformation } = useOrderStore((state) => state);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!OrderInformation) return;

    const expiredTime = new Date(
      OrderInformation.order.expiredQrisMidtransUrl!
    ).getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const diff = expiredTime - now;

      if (diff <= 0) {
        setTimeLeft(0);
        router.replace("/expired");
        return;
      }

      setTimeLeft(diff);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [OrderInformation, router]);

  if (!OrderInformation)
    return loading ? <LoadingSpinner /> : <NotFoundOrder />;

  if (OrderInformation.payment.method !== "QRIS") {
    router.replace("/error");
  }

  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  return (
    <div className="h-screen bg-white flex flex-col">
      <OrderTrackerJoiner orderId={OrderInformation.order.id} />
      <Header title="QRIS" withBackArrow={true} modalType="CANCELQRISPAYMENT" />

      <main className="flex flex-center flex-col flex-1 gap-[35px]">
        <section className="text-center space-y-[24px]">
          <div>
            <p className="b1-b">Complete payment in</p>
            <p className="h3">{formattedTime}</p>
          </div>

          <div className="size-[240px] mx-auto bg-black relative">
            <Image
              src={OrderInformation.payment.qrisUrl!}
              alt="qr"
              fill
              sizes="100%"
              priority
            />
          </div>

          <div>
            <p className="b1-r">Payment Total</p>
            <p className="sub-h1">
              Rp
              {Number(OrderInformation.order.totalAmount).toLocaleString(
                "id-ID"
              )}
            </p>
          </div>
        </section>

        <CallActionSection timeLeft={formattedTime} />
      </main>
    </div>
  );
};

export default QrisPaymentPage;

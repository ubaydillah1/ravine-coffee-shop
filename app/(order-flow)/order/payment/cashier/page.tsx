"use client";

import Header from "@/components/Header";
import DineInBadge from "@/features/user/order/components/DineInBadge";
import React from "react";
import AlertTriangle from "@/public/assets/icons/alert-triangle.svg";
import CashierActionButton from "@/features/user/order/components/CashierActionButton";
import { useCartStore } from "@/store/useCartStore";
import { useOrderStore } from "@/store/useOrderStore";
import { config } from "@/lib/config";
import QRCode from "react-qr-code";
import LoadingSpinner from "@/components/LoadingSpinner";

const CashierPaymentPage = () => {
  const items = useCartStore((state) => state.items);
  const totalItems = useCartStore((state) => state.totalItems);
  const orderInformation = useOrderStore((state) => state.OrderInformation);

  if (!orderInformation || !orderInformation.order) {
    return (
      <div className="bg-white min-h-screen">
        <Header title="Order Summary" withBackArrow={false} />
        <LoadingSpinner />
      </div>
    );
  }

  const order = orderInformation.order;

  if (!order.internalQrCode) {
    return (
      <div className="bg-white min-h-screen">
        <Header title="Order Summary" withBackArrow={false} />
        <main className="py-[20px] px-[20px] sm:px-[40px]">
          <div className="flex justify-center items-center h-64">
            <p className="l2-r text-neutral-n700">QR code not available</p>
          </div>
        </main>
      </div>
    );
  }

  const qrValue = `${config.API_URL}/api/cashier/order/${order.internalQrCode}`;

  return (
    <div className="bg-white min-h-screen">
      <Header title="Order Summary" withBackArrow={false} />

      <main className="py-[20px] space-y-[32px]  px-[20px] sm:px-[40px]">
        <DineInBadge />

        <div className="text-center space-y-[24px]">
          <div>
            <p className="b1-b">Order Number</p>
            <p className="h3">{order.id}</p>
          </div>

          <div className="size-[240px] mx-auto relative">
            <QRCode
              value={qrValue}
              size={200}
              bgColor="#ffffff"
              fgColor="#000000"
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            />
          </div>

          <div className="flex p-[16px] gap-[12px] max-w-[348px] bg-accent-y100 rounded-[8px] mx-auto">
            <AlertTriangle className="size-[24px] text-accent-y500" />
            <p className="l2-r text-left">
              <span className="font-bold">Show the QR code</span> or{" "}
              <span className="font-bold">8-digit order number</span> to our
              cashier.
            </p>
          </div>
        </div>

        <div className="h-[1px] bg-neutral-n300 my-[32px]"></div>

        <div className="space-y-[20px]">
          <p className="l1-b font-bold">Ordered Items</p>

          {items.map((item) => {
            return (
              <div
                className="flex justify-between items-center"
                key={item.productId}
              >
                <div className="space-y-[4px] max-w-[226px]">
                  <p className="l2-b">{item.productName}</p>
                  <div className="gap-[16px] flex">
                    <p className="l2-r text-neutral-n700">{item.quantity}X</p>
                    <p className="l2-r text-neutral-n700">Rp{item.subtotal}</p>
                  </div>
                </div>

                <p className="l2-b">Rp20.000</p>
              </div>
            );
          })}

          <div className="h-[1px] bg-neutral-n300"></div>

          <div className="space-y-[8px]">
            <div className="flex justify-between">
              <p className="b2-b">
                Sub Total{" "}
                <span className="text-neutral-n500">({totalItems()} menu)</span>
              </p>
              <p className="b2-b">
                Rp
                {Number(order.subTotalAmount).toLocaleString("id-ID")}
              </p>
            </div>

            <div className="flex justify-between">
              <p className="b2-b">Tax</p>
              <p className="b2-b">
                Rp
                {Number(order.taxAmount).toLocaleString("id-ID")}
              </p>
            </div>
          </div>

          <div className="flex justify-between text-primary-b300">
            <p className="b1-b">Total</p>
            <p className="b1-b">
              Rp
              {Number(order.totalAmount).toLocaleString("id-ID")}
            </p>
          </div>
        </div>

        <CashierActionButton />
      </main>
    </div>
  );
};

export default CashierPaymentPage;

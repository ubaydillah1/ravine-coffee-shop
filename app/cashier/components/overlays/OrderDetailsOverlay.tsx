"use client";

import React, { useState } from "react";
import Data from "@/public/assets/icons/data.svg";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import ViewNotesOverlay from "@/components/overlays/ViewNotesOverlay";
import { OrderDetails, OrderItemResponse } from "@/features/user/types";
import { ModalProps } from "@/features/cashier/types/modal";
import OrderDetailsSkeleton from "../skeletons/OrderDetailsSkeleton";
import OrderStatusBadge from "../OrderStatusBadge";

interface OrderDetailsOverlayProps extends ModalProps {
  order?: OrderDetails;
  isCompleted?: boolean;
  setOpenPaymentCashModal?: (value: boolean) => void;
  setOpenPaymentQrisModal?: (value: boolean) => void;
  isPending?: boolean;
}

const OrderDetailsOverlay = ({
  openModal,
  closeModal,
  setOpenPaymentCashModal,
  setOpenPaymentQrisModal,
  order,
  isCompleted = true,
  isPending = false,
}: OrderDetailsOverlayProps) => {
  const [openNotesModal, setOpenNotesModal] = useState(false);
  const closeNotesModal = () => setOpenNotesModal(false);

  const handlePayment = () => {
    if (order?.paymentMethod === "CASH") {
      setOpenPaymentCashModal?.(true);
    } else {
      setOpenPaymentQrisModal?.(true);
    }
    closeNotesModal();
    closeModal();
  };

  const orderDate =
    order &&
    format(new Date(order.createdAt), "dd MMM yyyy - HH.mm", { locale: id });
  const items = order?.OrderItem ?? [];

  return (
    <Dialog open={openModal} onOpenChange={closeModal}>
      <DialogContent
        className="bg-white p-0 flex flex-col gap-0 outline-0 border-0 overflow-hidden min-w-[490px]"
        showCloseButton
        {...(isCompleted === false && {
          onInteractOutside: (e) => e.preventDefault(),
        })}
      >
        <DialogHeader>
          <DialogTitle className="bg-neutral-n200 text-center py-[12px] b1-b">
            Order Details
          </DialogTitle>
        </DialogHeader>

        {isPending ? (
          <OrderDetailsSkeleton />
        ) : !order ? (
          <div className="p-8 text-center text-neutral-n600">
            Order not found
          </div>
        ) : (
          <>
            <div className="px-[32px] py-[24px] w-full flex flex-col gap-[24px]">
              {/* Header */}
              <div className="w-full flex justify-between items-end">
                <div className="space-y-[16px]">
                  {isCompleted && (
                    <OrderStatusBadge status={order.orderStatus} />
                  )}
                  <div className="flex flex-col gap-[4px]">
                    <span className="b3-r text-neutral-n700">Order ID</span>
                    <strong className="b3-b">#{order.id}</strong>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <span className="b3-r text-neutral-n700">Order Date</span>
                    <strong className="b3-b">{orderDate}</strong>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <span className="b3-r text-neutral-n700">Order Type</span>
                    <strong className="b3-b">
                      {order.orderType === "DINE_IN" ? "Dine In" : "Take Away"}
                    </strong>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <span className="b3-r text-neutral-n700">Cashier</span>
                    <strong className="b3-b">
                      {order.Cashier?.fullName || "-"}
                    </strong>
                  </div>
                </div>

                <div className="w-[140px] space-y-[16px]">
                  <div className="flex flex-col gap-[4px]">
                    <span className="b3-r text-neutral-n700">
                      Customer&apos;s Name
                    </span>
                    <strong className="b3-b">
                      {order.Customer?.fullName || "-"}
                    </strong>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <span className="b3-r text-neutral-n700">Phone Number</span>
                    <strong className="b3-b">
                      {order.Customer?.phoneNumber || "-"}
                    </strong>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <span className="b3-r text-neutral-n700">Voucher Code</span>
                    <strong className="b3-b">
                      {order.Voucher?.code || "-"}
                    </strong>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <span className="b3-r text-neutral-n700">
                      Payment Method
                    </span>
                    <strong className="b3-b">{order.paymentMethod}</strong>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-[16px]">
                <div className="flex gap-[32px] py-[12px] px-[16px] bg-neutral-n100 rounded-t-[8px] text-neutral-n700 l3-b">
                  <span className="min-w-[246px] inline-block">Product</span>
                  <span className="w-[24px]">Qty</span>
                  <span className="flex-1">Price</span>
                </div>

                <div className="space-y-[16px] h-[100px] overflow-y-scroll hide-scrollbar">
                  {items.map((item: OrderItemResponse, id: number) => (
                    <div
                      key={id}
                      className="flex gap-[32px] px-[16px] items-center"
                    >
                      <div className="w-[246px] flex gap-[8px] items-center">
                        <div className="size-[40px] bg-neutral-n100 flex-center">
                          <div className="size-[32px] relative">
                            <Image
                              src={
                                item.productImage ||
                                "/assets/images/default.png"
                              }
                              alt={item.productName}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <p className="l3-b truncate w-full min-w-0">
                          {item.productName}
                        </p>
                      </div>
                      <span className="l3-r text-neutral-n700">
                        {item.quantity}x
                      </span>
                      <span className="l3-b text-neutral-n700">
                        Rp{Number(item.subtotal).toLocaleString("id-ID")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Notes */}
              <div className="text-end">
                <Button
                  variant="none"
                  className="border border-transparent b2-r py-1 text-neutral-n600 
               hover:!border-transparent hover:!text-neutral-n600 
               hover:!bg-transparent hover:!shadow-none hover:!opacity-100"
                  onClick={() => setOpenNotesModal(true)}
                >
                  <Data />
                  <span>View Notes</span>
                </Button>
                <ViewNotesOverlay
                  isCompleted={isCompleted}
                  closeModal={closeNotesModal}
                  openModal={openNotesModal}
                  notes={order.notes}
                />
              </div>

              {/* Footer */}
              <DialogFooter className="rounded-[8px] bg-neutral-n100 space-y-[8px] p-[16px] b3-r text-neutral-n700">
                <div className="flex justify-between">
                  <div>
                    Sub Total{" "}
                    <span className="text-neutral-n500">
                      ({items.length} menu)
                    </span>
                  </div>
                  <span>
                    Rp{Number(order.subTotalAmount).toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <div>Tax</div>
                  <span>
                    Rp{Number(order.taxAmount).toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <div>Voucher</div>
                  <span>
                    Rp{Number(order.discountAmount).toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="w-full h-px bg-neutral-n300"></div>
                <div className="flex justify-between b2-b text-primary-b300">
                  <span>Total</span>
                  <span>
                    Rp{Number(order.totalAmount).toLocaleString("id-ID")}
                  </span>
                </div>
              </DialogFooter>

              {!isCompleted && (
                <div className="flex gap-[24px] w-full">
                  <Button
                    variant={"outline"}
                    className="flex-1"
                    onClick={closeModal}
                  >
                    Back
                  </Button>
                  <Button className="flex-1" onClick={handlePayment}>
                    Pay Bill
                  </Button>
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsOverlay;

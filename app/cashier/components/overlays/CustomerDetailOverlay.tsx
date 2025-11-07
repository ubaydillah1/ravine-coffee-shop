"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PaymentMethod, useUserInfoStore } from "@/store/useUserInfoStore";
import { useCreateOrder } from "@/features/user/order/hooks/useCreateOrder";
import { useAuthStore } from "@/store/useAuthStore";
import { useCartStore } from "@/store/useCartStore";
import { useOrderStore } from "@/store/useOrderStore";

interface CustomerDetailOverlayProps {
  customerDetailsModal: boolean;
  closeCustomerDetailModal: () => void;
  setOrderDetailsModal: (value: boolean) => void;
}

const CustomerDetailOverlay = ({
  customerDetailsModal,
  closeCustomerDetailModal,
  setOrderDetailsModal,
}: CustomerDetailOverlayProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [voucher, setVoucher] = useState("");
  const [tableNumber, setTableNumber] = useState<number | "">("");
  const [payment, setPayment] = useState<PaymentMethod>("CASH");
  const [error, setError] = useState("");

  const { setUserInfo, setPaymentMethod, orderType, userInfo } =
    useUserInfoStore();
  const { user } = useAuthStore();
  const notes = localStorage.getItem("notes") ?? "";
  const items = useCartStore((state) => state.items);
  const { setOrderData } = useOrderStore();

  const { mutate, isPending: createOrderIsPending } = useCreateOrder({
    mutationConfig: {
      onSuccess: (data) => {
        clearForm();
        setOrderDetailsModal(true);
        setOrderData(data);
        closeCustomerDetailModal();
      },
      onError: (error) => {
        console.log(error);
      },
    },
  });

  function clearForm() {
    setName("");
    setPhone("");
    setVoucher("");
    setPayment("CASH");
    setTableNumber("");
  }

  const handleNext = () => {
    if (name.trim().length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }

    if (!payment) {
      setError("Please select a payment method");
      return;
    }

    const phoneRegex = /^(?:\+62|62|0)[2-9][0-9]{7,11}$/;
    if (phone && !phoneRegex.test(phone)) {
      setError("Invalid phone number format");
      return;
    }

    if (orderType === "DINE_IN" && !tableNumber) {
      setError("Please enter a table number (1–6)");
      return;
    }

    setError("");
    setUserInfo({
      email: "fromcashier@gmail.com",
      fullname: name,
      phone: phone || undefined,
    });
    setPaymentMethod(payment as PaymentMethod);

    mutate({
      email: userInfo.email,
      fullName: userInfo.fullname,
      phoneNumber: userInfo.phone,
      items,
      notes,
      orderChannel: "CASHIER",
      orderType,
      paymentMethod: payment,
      cashierId: user?.id,
      tableNumber: String(tableNumber) || undefined,
    });
  };

  const handleTableChange = (val: string) => {
    const num = Number(val);
    if (val === "") {
      setTableNumber("");
    } else if (num >= 1 && num <= 6) {
      setTableNumber(num);
    }
  };

  const incrementTable = () => {
    if (tableNumber === "") setTableNumber(1);
    else if (tableNumber < 6) setTableNumber((prev) => (Number(prev) || 1) + 1);
  };

  const decrementTable = () => {
    if (tableNumber === "") setTableNumber(1);
    else if (tableNumber > 1) setTableNumber((prev) => (Number(prev) || 1) - 1);
  };

  return (
    <Dialog open={customerDetailsModal} onOpenChange={closeCustomerDetailModal}>
      <DialogContent
        className="bg-white p-0 flex flex-col outline-0 border-0 overflow-hidden min-w-[490px]"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle className="bg-neutral-n200 text-center py-[12px]">
            Customer Details
          </DialogTitle>
        </DialogHeader>

        <div className="p-[24px] w-full flex flex-col gap-[32px]">
          {/* Name */}
          <div className="flex flex-col gap-[8px]">
            <span className="b2-b">
              Name <span className="text-accent-r500">*</span>
            </span>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={cn(
                "focus:outline-0 py-1 border-b transition-colors",
                error && name.trim().length < 3
                  ? "border-red-500"
                  : "border-neutral-n300"
              )}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex justify-between">
              <span className="b2-b">Phone Number</span>
              <span className="b3-r text-neutral-n600">Optional</span>
            </div>
            <input
              type="tel"
              placeholder="081234567899"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="focus:outline-0 py-1 border-b border-neutral-n300"
            />
          </div>

          {/* Voucher */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex justify-between">
              <span className="b2-b">Voucher</span>
              <span className="b3-r text-neutral-n600">Optional</span>
            </div>
            <input
              disabled
              type="text"
              placeholder="Upcomming"
              value={voucher}
              onChange={(e) => setVoucher(e.target.value)}
              className="focus:outline-0 py-1 border-b border-neutral-n300"
            />
          </div>

          {/* Table Number */}
          <div
            className={`${
              orderType === "DINE_IN" ? "flex" : "hidden"
            } flex-col gap-[8px]`}
          >
            <span className="b2-b">
              Table Number <span className="text-accent-r500">*</span>
            </span>

            <div className="flex items-center gap-[12px]">
              <Button
                variant="outline"
                className="px-[12px] py-[6px] text-lg"
                type="button"
                onClick={decrementTable}
                disabled={createOrderIsPending || tableNumber === 1}
              >
                −
              </Button>

              <input
                type="number"
                value={tableNumber}
                onChange={(e) => handleTableChange(e.target.value)}
                placeholder="1–6"
                min={1}
                max={6}
                className={cn(
                  "w-[100px] text-center py-1 border-b focus:outline-0 transition-colors",
                  error && !tableNumber
                    ? "border-red-500"
                    : "border-neutral-n300"
                )}
              />

              <Button
                variant="outline"
                className="px-[12px] py-[6px] text-lg"
                type="button"
                onClick={incrementTable}
                disabled={createOrderIsPending || tableNumber === 6}
              >
                +
              </Button>
            </div>
          </div>

          {/* Payment */}
          <div className="flex flex-col gap-[16px]">
            <span className="b2-b">
              Payment Method <span className="text-accent-r500">*</span>
            </span>
            <RadioGroup
              className="space-y-[12px]"
              value={payment}
              onValueChange={(val) => setPayment(val as PaymentMethod)}
            >
              <div className="flex items-center space-x-[24px]">
                <RadioGroupItem value="CASH" id="cash" />
                <Label htmlFor="cash" className="flex gap-[12px] b2-r">
                  Cash
                </Label>
              </div>
              <div className="flex items-center space-x-[24px]">
                <RadioGroupItem value="QRIS" id="qris" />
                <Label htmlFor="qris" className="flex gap-[12px] b2-r">
                  Qris
                </Label>
              </div>
            </RadioGroup>
          </div>

          {error && <p className="text-red-500 text-sm -mt-2">{error}</p>}

          {/* Footer */}
          <DialogFooter className="flex gap-[24px]">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                clearForm();
                closeCustomerDetailModal();
              }}
              disabled={createOrderIsPending}
            >
              Close
            </Button>
            <Button
              className="flex-1"
              onClick={handleNext}
              disabled={createOrderIsPending}
            >
              {createOrderIsPending ? "Loading..." : "Next"}
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerDetailOverlay;

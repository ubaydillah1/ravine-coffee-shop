"use client";

import InputLabel from "@/components/InputLabel";
import React from "react";
import TableNumber from "../../order/components/TableNumber";
import CTAPayment from "../../order/components/CTAPayment";
import { useUserInfoStore } from "@/store/useUserInfoStore";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useCreateOrder } from "../../order/hooks/useCreateOrder";
import { useCartStore } from "@/store/useCartStore";
import { useTableStore } from "@/store/useTableStore";
import { useOrderStore } from "@/store/useOrderStore";

type FormValues = {
  fullname: string;
  phone: string;
  email: string;
};

const CustomerInformation = () => {
  const { paymentMethod, setUserInfo } = useUserInfoStore();
  const setOrderData = useOrderStore((state) => state.setOrderData);
  const items = useCartStore((state) => state.items);
  const tableNumber = useTableStore((state) => state.tableNumber);
  const { mutate, isPending } = useCreateOrder({});
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      fullname: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    const userPayload = {
      ...data,
      phone: data.phone || undefined,
    };

    setUserInfo(userPayload);

    const notes = localStorage.getItem("notes") ?? "";

    mutate(
      {
        email: data.email,
        fullName: data.fullname,
        phoneNumber: data.phone || undefined,
        orderType: "DINE_IN",
        items,
        notes,
        orderChannel: "ONLINE",
        paymentMethod,
        tableNumber: tableNumber || "",
      },
      {
        onSuccess: (data) => {
          // localStorage.removeItem("notes");
          // clearUserInfo();
          // clearCart();
          setOrderData(data);

          if (paymentMethod === "QRIS") {
            router.replace("/order/payment/qris");
          } else if (paymentMethod === "CASH") {
            router.replace("/order/payment/cashier");
          }
        },

        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <>
      <div className="sub-h2">Customer Information</div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <InputLabel
          icon="user"
          label="Fullname"
          placeholder="John Due"
          type="text"
          error={errors.fullname?.message}
          {...register("fullname", {
            required: "Fullname is required",
          })}
        />

        <InputLabel
          icon="phone"
          label="Phone Number (for upcoming promos)"
          placeholder="0812-3456-7899"
          type="tel"
          error={errors.phone?.message}
          {...register("phone", {
            pattern: {
              value: /^(?:\+62|62|0)[2-9][0-9]{7,11}$/,
              message: "Invalid phone number format",
            },
          })}
        />

        <InputLabel
          icon="email"
          label="Send receipt to email"
          placeholder="user123@gmail.com"
          type="email"
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid email address",
            },
          })}
        />

        <TableNumber />

        <CTAPayment isSubmitting={isPending} />
      </form>
    </>
  );
};

export default CustomerInformation;

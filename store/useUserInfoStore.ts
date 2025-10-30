import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserInfo = {
  fullname: string;
  email: string;
  phone?: string;
};

export type PaymentMethod = "QRIS" | "CASH";

export type UserInfoState = {
  userInfo: UserInfo;
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
  setUserInfo: (userInfo: UserInfo) => void;
  clearUserInfo: () => void;
};

export const useUserInfoStore = create(
  persist<UserInfoState>(
    (set) => ({
      userInfo: {
        fullname: "",
        email: "",
        phone: "",
      },
      paymentMethod: "QRIS",

      setPaymentMethod: (method: PaymentMethod) => {
        set({ paymentMethod: method });
      },
      setUserInfo: (userInfo: UserInfo) => set({ userInfo }),
      clearUserInfo: () =>
        set({ userInfo: { fullname: "", email: "", phone: "" } }),
    }),
    {
      name: "userInfo",
    }
  )
);

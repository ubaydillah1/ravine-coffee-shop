"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PaymentMethod from "./PaymentMethod";
import PaymentIllustration from "./PaymentIllustration";
import CompletePayment from "./CompletePayment";
import { useUserInfoStore } from "@/store/useUserInfoStore";

const PaymentMethodWrapper = () => {
  const paymentMethod = useUserInfoStore((state) => state.paymentMethod);
  const setPaymentMethod = useUserInfoStore((state) => state.setPaymentMethod);

  return (
    <div className="overflow-hidden">
      <PaymentMethod
        setPaymentMethod={setPaymentMethod}
        paymentMethod={paymentMethod}
      />

      <div className="relative min-h-[300px]  bg-white">
        <AnimatePresence mode="wait">
          {paymentMethod === "CASH" ? (
            <motion.div
              key="online"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <PaymentIllustration />
            </motion.div>
          ) : (
            <motion.div
              key="offline"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <CompletePayment />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PaymentMethodWrapper;

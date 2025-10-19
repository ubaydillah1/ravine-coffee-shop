"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import OrderDetailsOverlay from "./OrderDetailsOverlay";
import PaymentCashOverlay from "./PaymentCashOverlay";
import PaymentQrisOverlay from "./PaymentQrisOverlay";
import SuccessPaymentQrisOverlay from "./SuccessPaymentQrisOverlay";
import CustomerDetailOverlay from "./CustomerDetailOverlay";
import SuccessPaymentCashModal from "./SuccessPaymentCashOverlay";

const OrderAction = () => {
  const [customerDetailsModal, setCustomerDetailsModal] = useState(false);
  const [orderDetailsModal, setOrderDetailsModal] = useState(false);
  const [paymentCashModal, setPaymentCashModal] = useState(false);
  const [paymentQrisModal, setPaymentQrisModal] = useState(false);
  const [successPaymentQrisModal, setSuccessPaymentQrisModal] = useState(false);
  const [successPaymentCashModal, setSuccessPaymentCashModal] = useState(false);

  const closeSuccessPaymentCashModal = () => setSuccessPaymentCashModal(false);
  const closeSuccessPaymentQrisModal = () => setSuccessPaymentQrisModal(false);
  const closePaymentQrisModal = () => setPaymentQrisModal(false);
  const closePaymentCashModal = () => setPaymentCashModal(false);
  const closeOrderDetailModal = () => setOrderDetailsModal(false);
  const closeCustomerDetailModal = () => setCustomerDetailsModal(false);
  return (
    <>
      <Button className="w-full" onClick={() => setCustomerDetailsModal(true)}>
        Process Transaction
      </Button>

      <CustomerDetailOverlay
        customerDetailsModal={customerDetailsModal}
        closeCustomerDetailModal={closeCustomerDetailModal}
      />

      <OrderDetailsOverlay
        closeModal={closeOrderDetailModal}
        openModal={orderDetailsModal}
        isCompleted={false}
      />

      <PaymentCashOverlay
        closeModal={closePaymentCashModal}
        openModal={paymentCashModal}
      />

      <PaymentQrisOverlay
        closeModal={closePaymentQrisModal}
        openModal={paymentQrisModal}
      />

      <SuccessPaymentQrisOverlay
        closeModal={closeSuccessPaymentQrisModal}
        openModal={successPaymentQrisModal}
      />

      <SuccessPaymentCashModal
        closeModal={closeSuccessPaymentCashModal}
        openModal={successPaymentCashModal}
      />
    </>
  );
};

export default OrderAction;

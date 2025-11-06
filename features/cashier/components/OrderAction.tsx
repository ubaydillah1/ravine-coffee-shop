"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import PaymentCashOverlay from "../../../components/overlays/PaymentCashOverlay";
import PaymentQrisOverlay from "../../../components/overlays/PaymentQrisOverlay";
import SuccessPaymentQrisOverlay from "../../../components/overlays/SuccessPaymentQrisOverlay";
import CustomerDetailOverlay from "../../../components/overlays/CustomerDetailOverlay";
import SuccessPaymentCashModal from "../../../components/overlays/SuccessPaymentCashOverlay";
import OrderDetailsWrapper from "./OrderDetailsWrapper";

const OrderAction = () => {
  const [customerDetailsModal, setCustomerDetailsModal] = useState(false);
  const [orderDetailsModalCompleteFalse, setOrderDetailsModalCompleteFalse] =
    useState(false);
  const [orderDetailsModalCompleteTrue, setOrderDetailsModalCompleteTrue] =
    useState(false);
  const [paymentCashModal, setPaymentCashModal] = useState(false);
  const [paymentQrisModal, setPaymentQrisModal] = useState(false);
  const [successPaymentQrisModal, setSuccessPaymentQrisModal] = useState(false);
  const [successPaymentCashModal, setSuccessPaymentCashModal] = useState(false);

  const closeSuccessPaymentCashModal = () => setSuccessPaymentCashModal(false);

  const closeSuccessPaymentQrisModal = () => setSuccessPaymentQrisModal(false);
  const closePaymentQrisModal = () => setPaymentQrisModal(false);
  const closePaymentCashModal = () => setPaymentCashModal(false);
  const closeOrderDetailModalCompleteFalse = () =>
    setOrderDetailsModalCompleteFalse(false);
  const closeOrderDetailModalCompleteTrue = () =>
    setOrderDetailsModalCompleteTrue(false);
  const closeCustomerDetailModal = () => setCustomerDetailsModal(false);
  return (
    <>
      <Button className="w-full" onClick={() => setCustomerDetailsModal(true)}>
        Process Transaction
      </Button>

      <CustomerDetailOverlay
        customerDetailsModal={customerDetailsModal}
        closeCustomerDetailModal={closeCustomerDetailModal}
        setOrderDetailsModal={setOrderDetailsModalCompleteFalse}
      />

      <OrderDetailsWrapper
        setPaymentQrisModal={setPaymentQrisModal}
        setPaymentCashModal={setPaymentCashModal}
        openModalCompleteFalse={orderDetailsModalCompleteFalse}
        openModalCompleteTrue={orderDetailsModalCompleteTrue}
        closeModalCompleteTrue={closeOrderDetailModalCompleteTrue}
        closeModalCompleteFalse={closeOrderDetailModalCompleteFalse}
      />

      <PaymentCashOverlay
        closeModal={closePaymentCashModal}
        openModal={paymentCashModal}
        setOpenSuccessPaymentCashModal={setSuccessPaymentCashModal}
      />

      <PaymentQrisOverlay
        closeModal={closePaymentQrisModal}
        openModal={paymentQrisModal}
        setOpenSuccessPaymentQrisModal={setSuccessPaymentQrisModal}
      />

      <SuccessPaymentQrisOverlay
        closeModal={closeSuccessPaymentQrisModal}
        openModal={successPaymentQrisModal}
        setOrderDetailsModal={setOrderDetailsModalCompleteTrue}
      />

      <SuccessPaymentCashModal
        setOrderDetailsModal={setOrderDetailsModalCompleteTrue}
        closeModal={closeSuccessPaymentCashModal}
        openModal={successPaymentCashModal}
      />
    </>
  );
};

export default OrderAction;

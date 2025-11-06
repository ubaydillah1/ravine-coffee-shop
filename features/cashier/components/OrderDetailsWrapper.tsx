import React from "react";
import OrderDetailsOverlay from "../../../components/overlays/OrderDetailsOverlay";
import { useOrderStore } from "@/store/useOrderStore";

type OrderDetailsWrapperProps = {
  openModalCompleteTrue: boolean;
  openModalCompleteFalse: boolean;
  closeModalCompleteFalse: () => void;
  closeModalCompleteTrue: () => void;
  setPaymentCashModal: (value: boolean) => void;
  setPaymentQrisModal: (value: boolean) => void;
};

const OrderDetailsWrapper = ({
  closeModalCompleteFalse,
  closeModalCompleteTrue,
  openModalCompleteFalse,
  openModalCompleteTrue,
  setPaymentCashModal,
  setPaymentQrisModal,
}: OrderDetailsWrapperProps) => {
  const { OrderInformation } = useOrderStore();

  if (!OrderInformation) return null;

  const order = OrderInformation.order;

  return (
    <div>
      <OrderDetailsOverlay
        closeModal={closeModalCompleteFalse}
        openModal={openModalCompleteFalse}
        isCompleted={false}
        setOpenPaymentCashModal={setPaymentCashModal}
        setOpenPaymentQrisModal={setPaymentQrisModal}
        order={order}
      />

      <OrderDetailsOverlay
        isCompleted={true}
        closeModal={closeModalCompleteTrue}
        openModal={openModalCompleteTrue}
        setOpenPaymentCashModal={setPaymentCashModal}
        setOpenPaymentQrisModal={setPaymentQrisModal}
        order={order}
      />
    </div>
  );
};

export default OrderDetailsWrapper;

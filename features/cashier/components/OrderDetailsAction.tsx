"use client";

import Eye from "@/public/assets/icons/eye.svg";
import { useState } from "react";
import OrderDetailsOverlay from "../../../components/overlays/OrderDetailsOverlay";
import { UseGetOrderById } from "../hooks/useGetOrderById";
import { OrderDetails } from "@/features/user/types";

const OrderDetailsAction = ({ orderId }: { orderId: string }) => {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);

  const { data, isPending } = UseGetOrderById({
    orderId,
    queryConfig: {
      enabled: openModal,
    },
  });

  return (
    <>
      <button
        className="size-[36px] rounded-full border border-neutral-n300 flex-center cursor-pointer hover:bg-neutral-n100"
        onClick={() => setOpenModal(true)}
      >
        <Eye className="size-[16px] text-neutral-n700" />
      </button>
      <OrderDetailsOverlay
        closeModal={closeModal}
        openModal={openModal}
        isCompleted={true}
        isPending={isPending}
        order={data as OrderDetails}
      />
    </>
  );
};

export default OrderDetailsAction;

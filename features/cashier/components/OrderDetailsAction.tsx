"use client";

import Eye from "@/public/assets/icons/eye.svg";
// import OrderDetailsOverlay from "./OrderDetailsOverlay";

const OrderDetailsAction = () => {
  // const [openModal, setOpenModal] = useState(false);

  // const closeModal = () => setOpenModal(false);
  return (
    <>
      <button
        className="size-[36px] rounded-full border border-neutral-n300 flex-center cursor-pointer hover:bg-neutral-n100"
        // onClick={() => setOpenModal(true)}
      >
        <Eye className="text-neutral-n700 size-[16px]" />
      </button>

      {/* <OrderDetailsOverlay closeModal={closeModal} openModal={openModal} /> */}
    </>
  );
};

export default OrderDetailsAction;

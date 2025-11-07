"use client";

import CashierStatusChangeOverlay from "@/components/overlays/CashierStatusChangeOverlay";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type UserStatus = "ACTIVE" | "INACTIVE";

const ChangeStatusAction = ({
  status,
  cashierId,
}: {
  status: UserStatus;
  cashierId: string;
}) => {
  const [openStatusChangeOverlay, setOpenStatusChangeOverlay] = useState(false);

  const closeStatusChangeOverlay = () => setOpenStatusChangeOverlay(false);
  return (
    <>
      <div
        className="flex gap-1 cursor-pointer"
        onClick={() => setOpenStatusChangeOverlay(true)}
      >
        <Badge variant={status === "ACTIVE" ? "success" : "secondary"}>
          {status}
        </Badge>
        <ChevronDown className="text-neutral-n700" />
      </div>

      <CashierStatusChangeOverlay
        openModal={openStatusChangeOverlay}
        closeModal={closeStatusChangeOverlay}
        status={status}
        cashierId={cashierId}
      />
    </>
  );
};

export default ChangeStatusAction;

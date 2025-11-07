import { ORDER_STATUS_MAP } from "@/utils/orderStatusBadge";
import { Badge } from "./ui/badge";

interface Props {
  status: string;
}

const OrderStatusBadge = ({ status }: Props) => {
  const normalized = status.toLowerCase();
  const config = ORDER_STATUS_MAP[normalized] || ORDER_STATUS_MAP[""];

  return <Badge variant={config.variant}>{config.label}</Badge>;
};

export default OrderStatusBadge;

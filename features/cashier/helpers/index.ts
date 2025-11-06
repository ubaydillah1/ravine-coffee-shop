import { OrderStatus, OrderTableType } from "@/types/order";

export function mapTableTypeToOrderStatus(
  tab: OrderTableType
): OrderStatus | undefined {
  switch (tab) {
    case "completed":
      return "completed";
    case "in-progress":
      return "inprogress";
    case "open-bill":
      return "openbill";
    case "canceled":
      return "canceled";
    default:
      return undefined;
  }
}

export const getTextStatus = (status: OrderStatus): string => {
  const text = status.toLowerCase();

  switch (text) {
    case "completed":
      return "Completed";
    case "inprogress":
      return "In Progress";
    case "openbill":
      return "Open Bill";
    case "canceled":
      return "Canceled";
    case "draft":
      return "Draft";
    default:
      return text;
  }
};

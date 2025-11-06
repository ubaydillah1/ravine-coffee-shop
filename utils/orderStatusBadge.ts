import type { VariantProps } from "class-variance-authority";
import { badgeVariants } from "@/components/ui/badge";

type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

interface OrderStatusBadge {
  label: string;
  variant: BadgeVariant;
}

export const ORDER_STATUS_MAP: Record<string, OrderStatusBadge> = {
  completed: {
    label: "Completed",
    variant: "success",
  },
  inprogress: {
    label: "In Progress",
    variant: "warning",
  },
  canceled: {
    label: "Cancelled",
    variant: "danger",
  },
  openbill: {
    label: "Open Bill",
    variant: "info",
  },
  "": {
    label: "Draft",
    variant: "neutral",
  },
};

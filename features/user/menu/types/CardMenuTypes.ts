import { Product } from "@/features/admin/menu-menagement/types";

type CardLayout =
  | "vertical"
  | "horizontal"
  | "small-vertical"
  | "small-horizontal";

export interface ProductCardProps {
  data: Product;
  layout?: CardLayout;
}

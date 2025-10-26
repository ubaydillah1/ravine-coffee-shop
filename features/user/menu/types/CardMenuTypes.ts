import { Product } from "@/features/admin/menu-menagement/types";

type CardLayout =
  | "vertical"
  | "horizontal"
  | "small-vertical"
  | "small-horizontal";

// interface Item {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
// }

export interface ProductCardProps {
  data: Product;
  layout?: CardLayout;
}

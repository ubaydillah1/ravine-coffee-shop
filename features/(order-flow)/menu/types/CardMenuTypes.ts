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
  // item: Item;
  layout?: CardLayout;
}

import { OrderStatus } from "@/types/order";

type OrderItem = {
  productId: string;
  quantity: number;
};

export type PaymentMethod = "CASH" | "QRIS";
export type OrderType = "DINE_IN" | "TAKE_AWAY";
export type OrderChannel = "ONLINE" | "CASHIER";

export type OrderPayload = {
  fullName: string;
  email: string;
  phoneNumber?: string;
  tableNumber?: string;
  orderType: OrderType;
  paymentMethod: PaymentMethod;
  notes: string;
  cashierId?: string;
  orderChannel: OrderChannel;
  items: OrderItem[];
};

type User = {
  fullName: string;
  phoneNumber: string;
  email: string;
};

export type OrderItemResponse = {
  quantity: number;
  subtotal: string;
  productImage: string;
  productName: string;
  productPrice: string;
};

export type OrderDetails = {
  id: string;
  tableNumber: string;
  createdAt: string;
  orderType: OrderType;
  taxAmount: string;
  paymentMethod: PaymentMethod;
  totalAmount: string;
  subTotalAmount: string;
  internalQrCode: string;
  discountAmount: string;
  orderStatus: OrderStatus;
  notes: string;
  Voucher: {
    code: string;
  } | null;
  Customer: User;
  expiredInternalQrCode: string | null;
  expiredQrisMidtransUrl: string | null;
  OrderItem: OrderItemResponse[];
  Cashier: User | null;
};

type PaymentDetails = {
  method: PaymentMethod;
  qrisUrl: string | null;
  svgQrCode: string | null;
};

export type OrderCreateResponseData = {
  order: OrderDetails;
  payment: PaymentDetails;
};

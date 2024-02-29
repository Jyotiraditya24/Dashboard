export type OrderItem = {
  name: string;
  photo: string;
  price: number;
  quantity: number;
  _id: string;
};

export type OrderType = {
  name: string;
  address: string;
  city: string;
  country: string;
  state: string;
  pincode: string;
  status: "Processing" | "Shipped" | "Delivered";
  subtotal: number;
  discount: number;
  shippingCharges: number;
  tax: number;
  total: number;
  orderItems: OrderItem[];
  _id: string;
};

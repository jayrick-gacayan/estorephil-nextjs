import { OrderDetail } from "./order-detail";
import { Seller } from "./seller";

export interface Order {
  id: number;
  seller: Seller;
  orderDetails: OrderDetail[]
}
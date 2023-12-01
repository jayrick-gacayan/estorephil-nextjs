import { Product } from "./product";

export interface OrderDetail {
  orderNo: number;
  product: Product;
  quantity: number;
}
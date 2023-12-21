import { Products } from "./products";

export interface OrderDetail {
  orderNo: number;
  product: Products;
  quantity: number;
}
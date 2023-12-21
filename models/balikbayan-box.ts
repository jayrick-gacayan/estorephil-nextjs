import { Products } from "./products";
import { Seller } from "./seller";

export interface BalikbayanBox {
  product: Products;
  seller: Seller;
  quantity: number;
  total: number;
  isGoingToCheckout?: boolean;
}
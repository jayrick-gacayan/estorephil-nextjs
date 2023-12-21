import { Products } from "./products";
import { Seller } from "./seller";

export interface Cart {
  product: Products;
  seller: Seller;
  quantity: number;
  total: number;
  isGoingToCheckout?: boolean;
}
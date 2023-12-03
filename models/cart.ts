import { Product } from "./product";
import { Seller } from "./seller";

export interface Cart {
  product: Product;
  seller: Seller;
  quantity: number;
  total: number;
  isGoingToCheckout?: boolean;
}
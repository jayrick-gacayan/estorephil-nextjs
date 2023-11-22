import { Product } from "./product";
import { Seller } from "./seller";

export interface BalikbayanBox {
  product: Product;
  seller: Seller;
  quantity: number;
  total: number;
}
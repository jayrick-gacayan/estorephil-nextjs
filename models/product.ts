import { Seller } from "./seller";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  raters: number;
  productImage: string;
  seller?: Seller;
  isSelectedForCheckout?: boolean;
}
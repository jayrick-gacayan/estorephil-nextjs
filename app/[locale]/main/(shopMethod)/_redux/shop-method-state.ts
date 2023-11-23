import { BalikbayanBox } from "@/models/balikbayan-box";
import { Cart } from "@/models/cart";

export interface ShopMethodState {
  shopMethodItems: Cart[] | BalikbayanBox[];
  isSelectAll: boolean;
}
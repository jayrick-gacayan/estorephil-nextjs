import { BalikbayanBox } from "@/models/balikbayan-box";
import { Cart } from "@/models/cart";

export interface CartState {
  purchaseMethodItems: Cart[] | BalikbayanBox[];
  purchaseMethodItemToInteract: Cart | BalikbayanBox | undefined;
}
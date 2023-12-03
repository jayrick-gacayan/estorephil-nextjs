import { BalikbayanBox } from "@/models/balikbayan-box";
import { Cart } from "@/models/cart";

export interface PurchaseMethodState {
  purchaseMethodItems: Cart[] | BalikbayanBox[];
  purchaseMethodItemToInteract: Cart | BalikbayanBox | undefined;
}
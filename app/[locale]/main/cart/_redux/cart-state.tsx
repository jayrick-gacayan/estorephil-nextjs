import { BalikbayanBox } from "@/models/balikbayan-box";
import { Cart } from "@/models/cart";
import { RequestStatus } from "@/models/result";

export interface CartState {
  cartCheckout: any[]
  itemsSelected: any[]
  getMainCartStatus: RequestStatus
  createOrderStatus: RequestStatus
  purchaseMethodItems: Cart[] | BalikbayanBox[];
  purchaseMethodItemToInteract: Cart | BalikbayanBox | undefined;
  summary: {
    items?: number
    subtotal?: number
    total?: number
  }
}
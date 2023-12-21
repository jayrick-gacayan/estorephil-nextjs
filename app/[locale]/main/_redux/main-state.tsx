import { RequestStatus } from "@/types/enums/request-status";
import { TextInputField } from "@/types/props/text-input-field";

export interface MainState {
  cartType: string;
  isToChange: boolean;

  mainModalInfo: {
    open: boolean;
    type: string;
  };

  countryPicker: TextInputField<string>
  cart: any,
  deliveryType: string,
  deliveryAddressCountry: string,
  deliveryAddressCity: string,

  addToCartQuantity: number
  addToCartStatus: RequestStatus
  removeFromCartStatus: RequestStatus
  setCartStatus: RequestStatus
}

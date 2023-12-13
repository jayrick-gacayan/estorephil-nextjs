import { RequestStatus } from "@/models/result";

export interface MainState {
  purchaseMethod: string;
  modalProductDeliveryAddressInfo: {
    open: boolean;
    type: string;
  };
  countryPicker: {
    value: string,
    show: boolean
  }
  cart: any,
  cartType: string,
  deliveryType: string,
  deliveryAddressCountry: string,
  deliveryAddressCity: string,
  setCartStatus: RequestStatus
}
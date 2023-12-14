import { RequestStatus } from "@/types/enums/request-status";

export interface MainState {
  cartType: string;

  mainModalInfo: {
    open: boolean;
    type: string;
  };
  countryPicker: {
    value: string,
    show: boolean
  }
  cart: any,
  deliveryType: string,
  deliveryAddressCountry: string,
  deliveryAddressCity: string,
  setCartStatus: RequestStatus
}

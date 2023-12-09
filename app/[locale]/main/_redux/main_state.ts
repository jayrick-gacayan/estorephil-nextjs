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
}
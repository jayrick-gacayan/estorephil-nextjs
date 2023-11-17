export interface MainState {
  shoppingMethod: string;
  modalProductDeliveryAddressInfo: {
    open: boolean;
    type: string;
  };
}
import { Box } from "@/models/box";
import { Paginated } from "@/models/paginated";
import { PhRegion } from "@/models/ph-region";
import { RequestStatus } from "@/types/enums/request-status";
import { TextInputField } from "@/types/props/text-input-field";

export interface CourierBoxesState {
  modalBoxesOpen: {
    open: boolean;
    type: string;
  }

  boxFormFields: {
    id?: number;
    cargoType: TextInputField<string>;
    boxType: TextInputField<string>;
    length: TextInputField<string>;
    width: TextInputField<string>;
    height: TextInputField<string>;
    unitMeasure: TextInputField<string>;
    price: TextInputField<string>;
    referralPercentage: TextInputField<string>;
    weight: TextInputField<string>;
    weightType: TextInputField<string>;
    requestStatus: RequestStatus;
    regionFees: { region: PhRegion; fee: TextInputField<string> }[]
  }

  courierBoxes: Paginated<Box>;
}
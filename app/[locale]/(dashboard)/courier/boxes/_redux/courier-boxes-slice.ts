import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CourierBoxesState } from "./courier-boxes-state";
import { paginatedInit, textInputFieldValue } from "@/types/helpers/field-methods";
import { RequestStatus } from "@/types/enums/request-status";
import { Box } from "@/models/box";
import { Paginated } from "@/models/paginated";

const initialState: CourierBoxesState = {
  modalBoxesOpen: {
    open: false,
    type: ""
  },
  boxFormFields: {
    cargoType: textInputFieldValue(''),
    boxType: textInputFieldValue(''),
    length: textInputFieldValue(''),
    width: textInputFieldValue(''),
    height: textInputFieldValue(''),
    unitMeasure: textInputFieldValue(''),
    price: textInputFieldValue(''),
    referralPercentage: textInputFieldValue(''),
    weight: textInputFieldValue(''),
    weightType: textInputFieldValue(''),
    requestStatus: RequestStatus.NONE,
  },
  courierBoxes: paginatedInit<Box>({
    data: [],
    currentPage: 1,
    requestStatus: RequestStatus.NONE,
    count: 0
  })
}

const courierBoxesSlice = createSlice({
  name: 'courierBoxes',
  initialState,
  reducers: {
    courierBoxesSet: (state: CourierBoxesState, action: PayloadAction<Paginated<Box>>) => {
      return {
        ...state,
        courierBoxes: action.payload
      }
    },
    courierBoxesRequestStatusSet: (state: CourierBoxesState, action: PayloadAction<RequestStatus>) => {
      return {
        ...state,
        courierBoxes: {
          ...state.courierBoxes,
          requestStatus: action.payload
        }
      }
    },
    courierBoxesPageNumberSet: (state: CourierBoxesState, action: PayloadAction<number>) => {
      return {
        ...state,
        courierBoxes: {
          ...state.courierBoxes,
          currentPage: action.payload
        }
      }
    },
    modalBoxesOpened: (state: CourierBoxesState, action: PayloadAction<string>) => {
      return {
        ...state,
        modalBoxesOpen: {
          open: !state.modalBoxesOpen.open,
          type: action.payload
        }
      }
    },
    cargoTypeSelectionShown: (state: CourierBoxesState, action: PayloadAction<boolean | undefined>) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          cargoType: action.payload ? {
            ...state.boxFormFields.cargoType,
            show: action.payload
          } : textInputFieldValue(state.boxFormFields.cargoType.value)
        }
      }

    },
    cargoTypeChanged: (state: CourierBoxesState, action: PayloadAction<string>) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          cargoType: textInputFieldValue(action.payload)
        }
      }
    },
    boxTypeSelectionShown: (state: CourierBoxesState, action: PayloadAction<boolean | undefined>) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          boxType: action.payload ? {
            ...state.boxFormFields.boxType,
            show: action.payload
          } : textInputFieldValue(state.boxFormFields.boxType.value)
        }
      }

    },
    boxTypeChanged: (state: CourierBoxesState, action: PayloadAction<string>) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          boxType: textInputFieldValue(action.payload)
        }
      }
    },
    lengthDimensionChanged: (state: CourierBoxesState, action: PayloadAction<string>) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          length: textInputFieldValue(action.payload)
        }
      }
    },
    widthDimensionChanged: (state: CourierBoxesState, action: PayloadAction<string>) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          width: textInputFieldValue(action.payload)
        }
      }
    },
    heightDimensionChanged: (state: CourierBoxesState, action: PayloadAction<string>) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          height: textInputFieldValue(action.payload)
        }
      }
    },
    unitMeasureSelectionShown: (state: CourierBoxesState, action: PayloadAction<boolean | undefined>) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          unitMeasure: action.payload ? {
            ...state.boxFormFields.unitMeasure,
            show: action.payload
          } : textInputFieldValue(state.boxFormFields.unitMeasure.value)
        }
      }

    },
    unitMeasureChanged: (state: CourierBoxesState, action: PayloadAction<string>) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          unitMeasure: textInputFieldValue(action.payload)
        }
      }
    },
    priceChanged: (state: CourierBoxesState, action: PayloadAction<string>) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          price: textInputFieldValue(action.payload)
        }
      }
    },
    referralPercentageChanged: (state: CourierBoxesState, action: PayloadAction<string>) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          referralPercentage: textInputFieldValue(action.payload)
        }
      }
    },
    weightChanged: (state: CourierBoxesState, action: PayloadAction<string>) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          weight: textInputFieldValue(action.payload)
        }
      }
    },
    weightTypeSelectionShown: (state: CourierBoxesState, action: PayloadAction<boolean | undefined>) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          weightType: action.payload ? {
            ...state.boxFormFields.weightType,
            show: action.payload
          } : textInputFieldValue(state.boxFormFields.weightType.value)
        }
      }

    },
    weightTypeChanged: (state: CourierBoxesState, action: PayloadAction<string>) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          weightType: textInputFieldValue(action.payload)
        }
      }
    },
    boxFormRequestStatusSet: (state: CourierBoxesState, action: PayloadAction<RequestStatus>) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          requestStatus: action.payload
        }
      }
    },
    boxFormFieldsClicked: (state: CourierBoxesState) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          requestStatus: RequestStatus.IN_PROGRESS
        }
      }
    },
    editFormFieldsFilled: (state: CourierBoxesState, action: PayloadAction<Box>) => {
      return {
        ...state,
        boxFormFields: {
          ...state.boxFormFields,
          id: action.payload.id,
          cargoType: textInputFieldValue(action.payload.cargoType ?? ""),
          boxType: textInputFieldValue(action.payload.boxType ?? ""),
          length: textInputFieldValue(action.payload.length?.toString() ?? ""),
          width: textInputFieldValue(action.payload.width?.toString() ?? ""),
          height: textInputFieldValue(action.payload.height?.toString() ?? ""),
          unitMeasure: textInputFieldValue(action.payload.unitMeasure ?? ""),
          price: textInputFieldValue(action.payload.price?.toString() ?? ""),
          weight: textInputFieldValue(action.payload.weight?.toString() ?? ""),
          weightType: textInputFieldValue(action.payload.weightType ?? ""),
          referralPercentage: textInputFieldValue(action.payload.referralPercentage?.toString() ?? "")
        }
      }
    },
    boxFormFieldsReset: (state: CourierBoxesState) => {
      return {
        ...state,
        boxFormFields: {
          cargoType: textInputFieldValue(''),
          boxType: textInputFieldValue(''),
          length: textInputFieldValue(''),
          width: textInputFieldValue(''),
          height: textInputFieldValue(''),
          unitMeasure: textInputFieldValue(''),
          price: textInputFieldValue(''),
          referralPercentage: textInputFieldValue(''),
          weight: textInputFieldValue(''),
          weightType: textInputFieldValue(''),
          requestStatus: RequestStatus.NONE
        }
      }
    }

  }
})

export const {
  modalBoxesOpened,
  cargoTypeSelectionShown,
  cargoTypeChanged,
  boxTypeSelectionShown,
  boxTypeChanged,
  lengthDimensionChanged,
  widthDimensionChanged,
  heightDimensionChanged,
  unitMeasureSelectionShown,
  unitMeasureChanged,
  priceChanged,
  referralPercentageChanged,
  weightChanged,
  weightTypeSelectionShown,
  weightTypeChanged,
  boxFormFieldsReset,
  boxFormRequestStatusSet,
  boxFormFieldsClicked,
  editFormFieldsFilled,
  courierBoxesSet,
  courierBoxesRequestStatusSet,
  courierBoxesPageNumberSet
} = courierBoxesSlice.actions;

export default courierBoxesSlice.reducer;
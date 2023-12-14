import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CourierBoxesState } from "./courier-boxes-state";

const initialState: CourierBoxesState = {
  modalBoxesOpen: {
    open: false,
    type: ""
  }
}

const courierBoxesSlice = createSlice({
  name: 'courierBoxes',
  initialState,
  reducers: {
    modalBoxesOpened: (state: CourierBoxesState, action: PayloadAction<string>) => {
      return {
        ...state,
        modalBoxesOpen: {
          open: !state.modalBoxesOpen.open,
          type: action.payload
        }
      }
    }
  }
})

export const { modalBoxesOpened } = courierBoxesSlice.actions;

export default courierBoxesSlice.reducer;
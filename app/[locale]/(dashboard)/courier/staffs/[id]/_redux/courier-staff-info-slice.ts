import { createSlice } from "@reduxjs/toolkit";
import { CourierStaffInfoState } from "./courier-staff-info-state";

const initialState: CourierStaffInfoState = {
  modalStaffEditOpen: false
}

const courierStaffInfoSlice = createSlice({
  name: 'courierStaffInfo',
  initialState,
  reducers: {
    modalStaffEditOpened: (state: CourierStaffInfoState) => {
      return { ...state, modalStaffEditOpen: !state.modalStaffEditOpen }
    }
  }
});

export const { modalStaffEditOpened } = courierStaffInfoSlice.actions;

export default courierStaffInfoSlice.reducer;
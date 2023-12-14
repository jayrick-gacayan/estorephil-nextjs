import { createSlice } from "@reduxjs/toolkit";
import { CourierStaffState } from "./courier-staff-state";

const initialState: CourierStaffState = {
  modalAddStaffFormOpen: false,
}

const courierStaffSlice = createSlice({
  name: 'courierStaff',
  initialState,
  reducers: {
    modalAddStaffFormOpened: (state: CourierStaffState) => {
      return { ...state, modalAddStaffFormOpen: !state.modalAddStaffFormOpen }
    }
  }
})

export const { modalAddStaffFormOpened } = courierStaffSlice.actions;

export default courierStaffSlice.reducer;

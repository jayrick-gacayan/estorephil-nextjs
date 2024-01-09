import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StartState } from "./start-state";
import { ToastProps } from "@/types/props/toast-props";

const initialState: StartState = {
  toasts: []
}

export const startSlice = createSlice({
  name: 'start',
  initialState,
  reducers: {
    toastAdded: (state: StartState, action: PayloadAction<ToastProps>) => {
      return {
        ...state,
        toasts: [...state.toasts, action.payload]
      }
    },
    toastRemoved: (state: StartState, action: PayloadAction<number>) => {
      return {
        ...state,
        toasts: state.toasts.filter((value: ToastProps) => {
          return value.id !== action.payload;
        })
      }
    }
  }
});

export const {
  toastAdded,
  toastRemoved
} = startSlice.actions;

export default startSlice.reducer;
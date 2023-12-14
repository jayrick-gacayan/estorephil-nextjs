import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Validations from "@/types/validations"
import { ValidationStatus } from "@/models/validation-response"
import { error } from "console"
import { StaffState } from "./staff-state"
import { RequestStatus } from "@/models/result"


export const initialState: StaffState = {
    staff: [{}],
    pagination: {
        totalResults: 1,
        totalPages: 1,
        currentPage: 1,
    },
    getStaffStatus: RequestStatus.WAITING
}
export const staffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {
        nextPage: (state: StaffState) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: state.pagination.currentPage + 1
                }
            }
        },
        pageNumberPressed: (state: StaffState, action: PayloadAction<number>) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: action.payload
                }
            }
        },
        previousPage: (state: StaffState) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: state.pagination.currentPage - 1
                }
            }
        },
        getStaffLoaded: (state: StaffState) => {
            return {
                ...state,
                getStaffStatus: RequestStatus.IN_PROGRESS
            }
        },
        getStaffSuccess: (state: StaffState, action: PayloadAction<any>) => {
            return {
                ...state,
                staff: action.payload.data,
                pagination: {
                    ...state.pagination,
                    currentPage: action.payload.pagination.current_page,
                    totalPages: action.payload.pagination.total_pages,
                    totalResults: action.payload.pagination.total_entries,
                },
                getStaffStatus: RequestStatus.SUCCESS
            }
        }

    }
})

export const {
    nextPage,
    pageNumberPressed, previousPage,
    getStaffLoaded, getStaffSuccess
} = staffSlice.actions

export default staffSlice.reducer
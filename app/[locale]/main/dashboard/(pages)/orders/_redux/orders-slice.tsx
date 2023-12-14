import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Validations from "@/types/validations"
import { ValidationStatus } from "@/models/validation-response"
import { OrderState } from "./orders-state"
import { error } from "console"
import { RequestStatus } from "@/models/result"


export const initialState: OrderState = {
    getAgentOrdersStatus: RequestStatus.WAITING,
    orderFilterDateRange: {
        value: {
            startDate: new Date(),
            endDate: new Date().setMonth(11)
        },
        error: ''
    },
    orders: [{}],
    pagination: {
        totalResults: 23,
        totalPages: 3,
        currentPage: 1,
    },

}
export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        nextPage: (state: OrderState) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: state.pagination.currentPage + 1
                }
            }
        },
        pageNumberPressed: (state: OrderState, action: PayloadAction<number>) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: action.payload
                }
            }
        },
        previousPage: (state: OrderState) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: state.pagination.currentPage - 1
                }
            }
        },
        orderFilterDateChanged: (state: OrderState, action: PayloadAction<any>) => {
            return {
                ...state,
                orderFilterDateRange: {
                    ...state.orderFilterDateRange,
                    value: action.payload,
                    error: ''
                }
            }
        },
        getAgentOrdersLoaded: (state: OrderState) => {
            return {
                ...state,
                getAgentOrdersStatus: RequestStatus.IN_PROGRESS,
            }
        },
        getAgentOrdersSuccess: (state: OrderState, action: PayloadAction<any>) => {
            return {
                ...state,
                getAgentOrdersStatus: RequestStatus.SUCCESS,
                orders: action.payload.data,
                pagination: {
                    ...state.pagination,
                    currentPage: action.payload.pagination.current_page,
                    totalPages: action.payload.pagination.total_pages,
                    totalResults: action.payload.pagination.total_entries,
                },
            }
        },
        getAgentOrdersFailed: (state: OrderState, action: PayloadAction<any>) => {
            return {
                ...state,
                getAgentOrdersStatus: RequestStatus.FAILURE
            }
        }
    }
})

export const {
    orderFilterDateChanged,
    getAgentOrdersFailed, getAgentOrdersLoaded,
    nextPage, pageNumberPressed, previousPage, getAgentOrdersSuccess
} = orderSlice.actions

export default orderSlice.reducer
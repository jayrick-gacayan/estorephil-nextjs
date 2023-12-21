import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Validations from "@/types/validations"
import { ValidationType } from "@/models/validation-response"

import { error } from "console"
import { ReportState } from "./report-state"


export const initialState: ReportState = {
    reportFilterDateRange: {
        value: {
            startDate: new Date(),
            endDate: new Date().setMonth(11)
        },
        error: ''
    },
    reports: [
        {
            dateRange: '01/25/2022 - 12/25/2022',
            ordersMade: 99,
            successfulOrders: 99,
            total: 4000,
            commission: 999,
            status: 'paid',
        },
        {
            dateRange: '01/25/2022 - 12/25/2022',
            ordersMade: 99,
            successfulOrders: 99,
            total: 4000,
            commission: 999,
            status: 'pending',
        },
        {
            dateRange: '01/25/2022 - 12/25/2022',
            ordersMade: 99,
            successfulOrders: 99,
            total: 4000,
            commission: 999,
            status: 'pending',
        },

    ],
    pagination: {
        totalResults: 23,
        totalPages: 3,
        currentPage: 1,
    },

}
export const reportSlice = createSlice({
    name: "report",
    initialState,
    reducers: {
        nextPage: (state: ReportState) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: state.pagination.currentPage + 1
                }
            }
        },
        pageNumberPressed: (state: ReportState, action: PayloadAction<number>) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: action.payload
                }
            }
        },
        previousPage: (state: ReportState) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: state.pagination.currentPage - 1
                }
            }
        },
        reportFilterDateChanged: (state: ReportState, action: PayloadAction<any>) => {
            return {
                ...state,
                reportFilterDateRange: {
                    ...state.reportFilterDateRange,
                    value: action.payload,
                    error: ''
                }
            }
        },
    }
})

export const {
    reportFilterDateChanged,
    nextPage, pageNumberPressed, previousPage
} = reportSlice.actions

export default reportSlice.reducer
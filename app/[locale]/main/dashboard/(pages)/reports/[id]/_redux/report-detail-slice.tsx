import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Validations from "@/types/validations"
import { ValidationStatus } from "@/models/validation-response"

import { error } from "console"
import { ReportDetailState } from "./report-detail-state"



export const initialState: ReportDetailState = {
    reportFilterDateRange: {
        value: {
            startDate: new Date(),
            endDate: new Date().setMonth(11)
        },
        error: ''
    },
    reports: [
        {
            orderNumber: '0023',
            dateOrdered: '01/25/2022',
            dateDelivered: '02/20/2022',
            staff: 'Marshall',
            numberOfItems: 47,
            total: 4000,
            commission: 999,

        },
        {
            orderNumber: '0023',
            dateOrdered: '01/25/2022',
            dateDelivered: '02/20/2022',
            staff: 'Marshall',
            numberOfItems: 47,
            total: 4000,
            commission: 999,

        },
        {
            orderNumber: '0023',
            dateOrdered: '01/25/2022',
            dateDelivered: '02/20/2022',
            staff: 'Marshall',
            numberOfItems: 47,
            total: 4000,
            commission: 999,

        },
        {
            orderNumber: '0023',
            dateOrdered: '01/25/2022',
            dateDelivered: '02/20/2022',
            staff: 'Marshall',
            numberOfItems: 47,
            total: 4000,
            commission: 999,

        },

        {
            orderNumber: '0023',
            dateOrdered: '01/25/2022',
            dateDelivered: '02/20/2022',
            staff: 'Marshall',
            numberOfItems: 47,
            total: 4000,
            commission: 999,

        },

        {
            orderNumber: '0023',
            dateOrdered: '01/25/2022',
            dateDelivered: '02/20/2022',
            staff: 'Marshall',
            numberOfItems: 47,
            total: 4000,
            commission: 999,

        },

        {
            orderNumber: '0023',
            dateOrdered: '01/25/2022',
            dateDelivered: '02/20/2022',
            staff: 'Marshall',
            numberOfItems: 47,
            total: 4000,
            commission: 999,

        },
    ],
    pagination: {
        totalResults: 23,
        totalPages: 3,
        currentPage: 1,
    },

}
export const reportDetailSlice = createSlice({
    name: "report",
    initialState,
    reducers: {
        nextPage: (state: ReportDetailState) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: state.pagination.currentPage + 1
                }
            }
        },
        pageNumberPressed: (state: ReportDetailState, action: PayloadAction<number>) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: action.payload
                }
            }
        },
        previousPage: (state: ReportDetailState) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: state.pagination.currentPage - 1
                }
            }
        },
        reportFilterDateChanged: (state: ReportDetailState, action: PayloadAction<any>) => {
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
} = reportDetailSlice.actions

export default reportDetailSlice.reducer
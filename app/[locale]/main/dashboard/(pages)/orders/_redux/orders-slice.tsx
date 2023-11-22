import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Validations from "@/types/validations"
import { ValidationStatus } from "@/models/validation-response"
import { OrderState } from "./orders-state"
import { error } from "console"


export const initialState: OrderState = {
    orderFilterDateRange: {
        value: {
            startDate: new Date(),
            endDate: new Date().setMonth(11)
        },
        error: ''
    },
    orders: [
        {
            orderNumber: '001',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        }, {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
        {
            orderNumber: '002',
            dateOrderd: '2023-01-15',
            dateDelivered: '2023-01-20',
            agent: 'Agent Jack',
            numberOfItems: 3,
            referralFee: 20.50,
            totalPaid: 150.00,
            status: 'completed',
        },
    ],
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
    }
})

export const {
    orderFilterDateChanged,
    nextPage, pageNumberPressed, previousPage
} = orderSlice.actions

export default orderSlice.reducer
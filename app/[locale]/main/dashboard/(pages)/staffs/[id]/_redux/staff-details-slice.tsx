import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { StaffDetailState } from "./staff-details-state"



export const initialState: StaffDetailState = {
    staff: {
        name: 'Will Patel',
        role: 'Customer Service',
        photo: 'https://www.reuters.com/resizer/bLp38060RjCKzCxJvwABE2qvLQc=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4NXM3BO6M5PKNFDXST7YC6GTCU.jpg'
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
    customers: [{}],
    activeTab: 'orders',
    pagination: {
        totalResults: 23,
        totalPages: 3,
        currentPage: 1,
    },
    orderFilterDateRange: {
        value: {
            startDate: new Date(),
            endDate: new Date().setMonth(11)
        },
        error: ''
    },
    customerFilterDateRange: {
        value: {
            startDate: new Date(),
            endDate: new Date().setMonth(11)
        },
        error: ''
    },
}
export const staffDetailSlice = createSlice({
    name: "staffDetail",
    initialState,
    reducers: {
        nextPage: (state: StaffDetailState) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: state.pagination.currentPage + 1
                }
            }
        },
        pageNumberPressed: (state: StaffDetailState, action: PayloadAction<number>) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: action.payload
                }
            }
        },
        previousPage: (state: StaffDetailState) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: state.pagination.currentPage - 1
                }
            }
        },
        orderFilterDateChanged: (state: StaffDetailState, action: PayloadAction<any>) => {
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
    nextPage,
    orderFilterDateChanged,
    pageNumberPressed, previousPage
} = staffDetailSlice.actions

export default staffDetailSlice.reducer
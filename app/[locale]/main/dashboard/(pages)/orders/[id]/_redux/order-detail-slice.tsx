import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Validations from "@/types/validations"
import { ValidationStatus } from "@/models/validation-response"
import { OrderDetailState } from "./order-detail-state"


export const initialState: OrderDetailState = {
    orderTracking: [
        {
            status: 'delivered',
            description: 'Your package is arriving soon',
            dateModified: '2022-09-05 05:43:59.157273',
        },
        {
            status: 'delivered',
            description: 'Your package has departed the logistics hub and will be out for delivery soon',
            dateModified: '2022-09-04 05:43:59.157273',
        },
        {
            status: 'shipped',
            description: 'Your package has departed for shipping.',
            dateModified: '2022-09-03 05:43:59.157273',
        },
        {
            status: 'placed',
            description: 'Your package order has been placed',
            dateModified: '2022-09-02 05:43:59.157273',
        },

    ],
    orderItems: [
        {
            photo: 'https://thumbs.dreamstime.com/b/laptop-17787672.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            quantity: 1,
            totalPaid: 47.00,
        },
        {
            photo: 'https://image.smythstoys.com/zoom/198494_2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            quantity: 1,
            totalPaid: 47.00,
        },
        {
            photo: 'https://t3.ftcdn.net/jpg/03/21/62/56/360_F_321625657_rauGwvaYjtbETuwxn9kpBWKDYrVUMdB4.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            quantity: 1,
            totalPaid: 47.00,
        },
        {
            photo: 'https://cdn.britannica.com/83/78183-004-345353F4.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            quantity: 1,
            totalPaid: 47.00,
        },
        {
            photo: 'https://www.acehardware.ph/cdn/shop/products/ELECTRICAL1_1daa1de3-1598-49fe-831b-98e8ca7d2af5_1024x1024.jpg?v=1631694576',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            quantity: 1,
            totalPaid: 47.00,
        },

    ],

}
export const orderDetailSlice = createSlice({
    name: "orderDetail",
    initialState,
    reducers: {


    }
})

export const {

} = orderDetailSlice.actions

export default orderDetailSlice.reducer
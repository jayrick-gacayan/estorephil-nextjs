import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Validations from "@/types/validations"
import { ValidationType } from "@/models/validation-response"

import { error } from "console"
import { CustomerState } from "./customer-state"


export const initialState: CustomerState = {

    customers: [
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        }, {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
        {
            photo: 'https://cdn2.vectorstock.com/i/1000x1000/14/46/profile-icon-white-on-the-blue-background-vector-3451446.jpg',
            name: 'Jack',
            email: 'jack@gmail.com',
            contactNum: '09272264986',
            pending: 1,
            completed: 21,
        },
    ],
    pagination: {
        totalResults: 23,
        totalPages: 3,
        currentPage: 1,
    },

}
export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        nextPage: (state: CustomerState) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: state.pagination.currentPage + 1
                }
            }
        },
        pageNumberPressed: (state: CustomerState, action: PayloadAction<number>) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: action.payload
                }
            }
        },
        previousPage: (state: CustomerState) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: state.pagination.currentPage - 1
                }
            }
        },

    }
})

export const {

    nextPage, pageNumberPressed, previousPage
} = customerSlice.actions

export default customerSlice.reducer
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Validations from "@/types/validations"
import { ValidationStatus } from "@/models/validation-response"
import { error } from "console"
import { StaffState } from "./staff-state"


export const initialState: StaffState = {
    staffs: [
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        }, {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
        {
            photo: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png',
            name: 'Lebron James',
            email: 'james@gmail.com',
            role: 'Owner',
        },
    ],
    pagination: {
        totalResults: 23,
        totalPages: 3,
        currentPage: 1,
    },

}
export const staffSlice = createSlice({
    name: "order",
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

    }
})

export const {
    nextPage, pageNumberPressed, previousPage
} = staffSlice.actions

export default staffSlice.reducer
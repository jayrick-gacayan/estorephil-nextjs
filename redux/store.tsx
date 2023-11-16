import { configureStore } from '@reduxjs/toolkit'
import checkoutReducer from '@/app/[locale]/main/checkout/_redux/checkout-slice'
export const store = configureStore({
    reducer: {
        checkout: checkoutReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '@/app/[locale]/main/_redux/main-slice';
import checkoutReducer from '@/app/[locale]/main/checkout/_redux/checkout-slice';

export const store = configureStore({
    reducer: {
        checkout: checkoutReducer,
        main: mainReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
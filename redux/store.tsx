import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '@/app/[locale]/main/_redux/main-slice';
import checkoutReducer from '@/app/[locale]/main/checkout/_redux/checkout-slice'
import senderReducer from '@/app/[locale]/main/checkout/(pages)/sender/_redux/sender-slice'
import receiverReducer from '@/app/[locale]/main/checkout/(pages)/receiver/_redux/receiver-slice'
import paymentMethodReducer from '@/app/[locale]/main/checkout/(pages)/payment-method/_redux/payment-method-slice'

export const store = configureStore({
    reducer: {
        checkout: checkoutReducer,
        main: mainReducer,
        sender: senderReducer,
        receiver: receiverReducer,
        paymentMethod: paymentMethodReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
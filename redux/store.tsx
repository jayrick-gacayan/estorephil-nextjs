import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '@/app/[locale]/main/_redux/main-slice';
import checkoutReducer from '@/app/[locale]/main/checkout/_redux/checkout-slice'
import senderReducer from '@/app/[locale]/main/checkout/(pages)/sender/_redux/sender-slice'
import receiverReducer from '@/app/[locale]/main/checkout/(pages)/receiver/_redux/receiver-slice'
import paymentMethodReducer from '@/app/[locale]/main/checkout/(pages)/payment-method/_redux/payment-method-slice'
import orderReducer from '@/app/[locale]/main/dashboard/(pages)/orders/_redux/orders-slice'
import orderDetailReducer from '@/app/[locale]/main/dashboard/(pages)/orders/[id]/_redux/order-detail-slice'
import customerReducer from '@/app/[locale]/main/dashboard/(pages)/customers/_redux/customers-slice'
import notificationReducer from '@/app/[locale]/main/dashboard/(pages)/notifications/_redux/notifications-slice'
import reportReducer from '@/app/[locale]/main/dashboard/(pages)/reports/_redux/report-slice'
import reportDetailreducer from '@/app/[locale]/main/dashboard/(pages)/reports/[id]/_redux/report-detail-slice'
import staffReducer from '@/app/[locale]/main/dashboard/(pages)/staffs/_redux/staff-slice'
import staffDetailReducer from '@/app/[locale]/main/dashboard/(pages)/staffs/[id]/_redux/staff-details-slice'
import staffAddReducer from '@/app/[locale]/main/dashboard/(pages)/staffs/add/_redux/staff-add-slice';
import shopMethodReducer from '@/app/[locale]/main/(shopMethod)/_redux/shop-method-slice';


export const store = configureStore({
    reducer: {
        main: mainReducer,
        shopMethod: shopMethodReducer,
        checkout: checkoutReducer,
        sender: senderReducer,
        receiver: receiverReducer,
        paymentMethod: paymentMethodReducer,
        order: orderReducer,
        orderDetail: orderDetailReducer,
        customer: customerReducer,
        notification: notificationReducer,
        report: reportReducer,
        reportDetail: reportDetailreducer,
        staff: staffReducer,
        staffDetail: staffDetailReducer,
        staffAdd: staffAddReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
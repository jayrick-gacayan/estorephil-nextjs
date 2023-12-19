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
import purchaseMethodReducer from '@/app/[locale]/main/purchase-method/[slug]/_redux/purchase-method-slice';
import registerReducer from '@/app/[locale]/(auth)/register/_redux/register-slice'
import loginReducer from '@/app/[locale]/(auth)/login/_redux/login-slice'
import homeReducer from '@/app/[locale]/main/home/_redux/home-slice'
import storeReducer from '@/app/[locale]/main/stores/[id]/_redux/store-slice'
import productReducer from '@/app/[locale]/main/products/[id]/_redux/product-slice'
import allCategoriesReducer from '@/app/[locale]/main/all-categories/_redux/all-categories-slice'

import agentRegisterReducer from '@/app/[locale]/(auth)/(forAgentCourier)/register/agent/_redux/agent-register-slice';

import courierDeliveryRatesReducer from '@/app/[locale]/(dashboard)/courier/delivery-rates/_redux/courier-delivery-rates-slice';
import courierStaffReducer from '@/app/[locale]/(dashboard)/courier/staffs/_redux/courier-staff-slice';
import courierBoxesReducer from '@/app/[locale]/(dashboard)/courier/boxes/_redux/courier-boxes-slice';
import courierStaffInfoReducer from '@/app/[locale]/(dashboard)/courier/staffs/[id]/_redux/courier-staff-info-slice';

import agentAgencyInfoReducer from '@/app/[locale]/main/dashboard/(pages)/agency-information/_redux/agent-agency-information-slice';

export const store = configureStore({
    reducer: {
        main: mainReducer,
        home: homeReducer,
        allCategories: allCategoriesReducer,
        login: loginReducer,
        store: storeReducer,
        product: productReducer,
        purchaseMethod: purchaseMethodReducer,
        register: registerReducer,
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
        agentAgencyInfo: agentAgencyInfoReducer,
        courierDeliveryRates: courierDeliveryRatesReducer,
        courierStaff: courierStaffReducer,
        courierBoxes: courierBoxesReducer,
        courierStaffInfo: courierStaffInfoReducer,

        agentRegister: agentRegisterReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
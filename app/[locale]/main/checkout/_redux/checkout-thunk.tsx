import { AppDispatch, store } from "@/redux/store";
import { OrderRepository } from "@/repositories/order-repository";
import { SenderState } from "../(pages)/sender/_redux/sender-state";
import { ReceiverState } from "../(pages)/receiver/_redux/receiver-state";
import { CartState } from "../../cart/_redux/cart-state";
import { CheckoutState } from "./checkout-state";
import { PaymentMethodState } from "../(pages)/payment-method/_redux/payment-method-state";
import { checkoutLoaded, checkoutSuccess, createOrderSuccess } from "./checkout-slice";
import { ResultStatus, getResultStatus } from "@/models/result";
import { senderFormFilled } from "../(pages)/sender/_redux/sender-slice";
import { receiverFormFilled } from "../(pages)/receiver/_redux/receiver-slice";
import { getAgentOrderSuccess } from "../../cart/_redux/cart-slice";
import { getAgentOrderSuccess as getAgentOrderSummarySuccess } from '../(pages)/order-summary/_redux/order-summary-slice'

export function checkout(orderRepository: OrderRepository, token: string) {
    return async function (dispatch: AppDispatch, getState: typeof store.getState) {
        const senderState: SenderState = getState().sender
        const receiverState: ReceiverState = getState().receiver
        const state: CheckoutState = getState().checkout
        const cartState: CartState = getState().cart
        const payment: PaymentMethodState = getState().paymentMethod
        const totalPrice = cartState.itemsSelected.reduce((total, product) => total + (product.quantity || 0) * (product.price || 0), 0);
        const order = state.order
        var expiryDate = payment.card.expiryDate.value;
        var parts = expiryDate.split('-');
        var expiry_month = parts[1];
        var expiry_year = parts[0];
        dispatch(checkoutLoaded())
        const result = await orderRepository.checkout({
            token: token,
            orderId: order.id ?? null,
            trId: null,
            orderInfo: {
                status: 'pending',
                currency: order.currency,
                shipping: order.shipping,
                sales_tax: order.sales_tax,
                service_delivery_tax: order.service_delivery_tax,
                subTotal: totalPrice,
                total: totalPrice,
                ph_tax: order.ph_tax,
                total_prod_price: totalPrice,
                delivery_notes: order.delivery_notes,
                billing_first_name: order.billing_first_name,
                billing_last_name: order.last_name,
                billing_address: order.billing_address,
                billing_mobile_number: order.billing_mobile_number,
                billing_email: order.billing_email
            },
            senderInfo: {
                order_id: order.id,
                first_name: senderState.firstName.value,
                last_name: senderState.lastName.value,
                street: senderState.address1.value,
                town: senderState.address2.value,
                city: senderState.city.value,
                province: senderState.country.value,
                postal_code: senderState.zipCode.value,
                country: senderState.country.value,
                phone_number: senderState.phoneNumber.value,
                mobile_number: senderState.mobileNumber.value,
                email: senderState.emailAddress.value
            },
            receiverInfo: {
                order_id: order.id,
                first_name: receiverState.firstName.value,
                last_name: receiverState.lastName.value,
                relationship: '',
                street: receiverState.address1.value,
                town: receiverState.address2.value,
                city: receiverState.city.value,
                province: receiverState.country.value,
                postal_code: receiverState.zipCode.value,
                country: receiverState.country.value,
                phone_number: receiverState.phoneNumber.value,
                mobile_number: receiverState.mobileNumber.value,
                email: receiverState.emailAddress.value
            },
            paymentInfo: {
                first_name: payment.firstName.value,
                last_name: payment.lastName.value,
                card_number: payment.card.number.value,
                expiry_month: expiry_month,
                expiry_year: expiry_year,
                cvv: payment.card.cvv.value
            }
        })
        switch (getResultStatus(result.status)) {
            case ResultStatus.SUCCESS:
                dispatch(checkoutSuccess())
                console.log('success response:', result)
                break;
        }
    }
}

export default function getCheckoutOrder(
    orderRepository: OrderRepository,
    orderId: string,
    token: string
) {
    return async function (dispatch: AppDispatch) {
        let result = await orderRepository.getAgentOrder(parseInt(orderId), token);

        if (!!result.data && result.statusCode === 200) {
            dispatch(createOrderSuccess(result.data.order))
            dispatch(senderFormFilled(result.data.order_customer))
            dispatch(receiverFormFilled(result.data.order_receiver))
            dispatch(getAgentOrderSummarySuccess(result.data.order_stores))
        }
    }
}

export function updateCheckoutOrder(
    orderRepository: OrderRepository,
    orderId: string,
    token: string,
) {
    return async function (dispatch: AppDispatch, getState: typeof store.getState) {
        const senderState = getState().sender;
        const checkoutOrderState: CheckoutState = getState().checkout;
        const receiverState: ReceiverState = getState().receiver

        let objectToSend = {
            order_customer: {
                order_id: orderId,
                first_name: senderState.firstName.value,
                last_name: senderState.lastName.value,
                street: senderState.address1.value,
                city: senderState.city.value,
                province: senderState.province.value,
                postal_code: senderState.zipCode.value,
                country: senderState.country.value,
                phone_number: senderState.phoneNumber.value,
                mobile_number: senderState.mobileNumber.value,
                email: senderState.emailAddress.value,
                town: senderState.city.value,
            },
            order: { ...checkoutOrderState.order },
            order_receiver: {
                order_id: orderId,
                first_name: receiverState.firstName.value ?? '',
                last_name: receiverState.lastName.value ?? '',
                relationship: '',
                street: receiverState.address1.value ?? '',
                town: receiverState.address2.value ?? '',
                city: receiverState.city.value ?? '',
                province: receiverState.country.value ?? '',
                postal_code: receiverState.zipCode.value ?? '',
                country: receiverState.country.value ?? '',
                phone_number: receiverState.phoneNumber.value ?? '',
                mobile_number: receiverState.mobileNumber.value ?? '',
                email: receiverState.emailAddress.value ?? ''
            },
        }

        let result = await orderRepository.updateCheckoutOrder(objectToSend, orderId, token);

        if (result.statusCode === 200) {
            dispatch(getCheckoutOrder(orderRepository, orderId, token));
        }
    }
}
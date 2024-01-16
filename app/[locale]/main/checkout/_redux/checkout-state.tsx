import { RequestStatus } from "@/models/result";

export interface CheckoutState {
    checkoutProgress: number,
    orderId: string | number | null,
    createOrderStatus: RequestStatus,
    updateOrderSenderStatus: RequestStatus,
    updateOrderReceiverStatus: RequestStatus
}
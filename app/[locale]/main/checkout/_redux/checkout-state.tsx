import { RequestStatus } from "@/models/result";

export interface CheckoutState {
    checkoutProgress: number,
    order: any,
    createOrderStatus: RequestStatus,
    checkoutStatus: RequestStatus
}
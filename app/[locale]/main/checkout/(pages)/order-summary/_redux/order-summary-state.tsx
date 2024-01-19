import { RequestStatus } from "@/models/result"

export interface OrderSummaryState {
    orderStores: any[]
    getAgentOrderStatus: RequestStatus
}
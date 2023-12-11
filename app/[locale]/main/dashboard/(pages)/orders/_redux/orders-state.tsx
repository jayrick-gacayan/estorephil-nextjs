import { FieldInput } from "@/models/field-input";
import { RequestStatus } from "@/models/result";

export interface OrderState {
    getAgentOrdersStatus: RequestStatus,
    orderFilterDateRange: FieldInput
    orders: any[],
    pagination: {
        totalResults: number,
        totalPages: number,
        currentPage: number,
    }
}
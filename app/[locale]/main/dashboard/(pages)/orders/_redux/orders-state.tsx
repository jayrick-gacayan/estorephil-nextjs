import { FieldInput } from "@/models/field-input";

export interface OrderState {
    orderFilterDateRange: FieldInput
    orders: any[],
    pagination: {
        totalResults: number,
        totalPages: number,
        currentPage: number,
    }
}
import { FieldInput } from "@/models/field-input"

export interface StaffDetailState {
    staff: {
        name: string,
        role: string,
        photo: string,
    }
    customers: any[]
    orderFilterDateRange: FieldInput
    customerFilterDateRange: FieldInput
    orders: any[],
    pagination: {
        totalResults: number,
        totalPages: number,
        currentPage: number,
    }
    activeTab: 'orders' | 'customers'
}
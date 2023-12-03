import { FieldInput } from "@/models/field-input";

export interface NotificationState {
    notificationFilterDateRange: FieldInput
    notifications: any[],
    pagination: {
        totalResults: number,
        totalPages: number,
        currentPage: number,
    }
}
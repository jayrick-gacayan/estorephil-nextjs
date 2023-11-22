import { FieldInput } from "@/models/field-input"

export interface ReportState {
    reportFilterDateRange: FieldInput
    reports: any[],
    pagination: {
        totalResults: number,
        totalPages: number,
        currentPage: number,
    }
}

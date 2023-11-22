import { FieldInput } from "@/models/field-input"

export interface ReportDetailState {
    reports: any[]
    reportFilterDateRange: FieldInput
    pagination: {
        totalResults: number,
        totalPages: number,
        currentPage: number,
    }
}
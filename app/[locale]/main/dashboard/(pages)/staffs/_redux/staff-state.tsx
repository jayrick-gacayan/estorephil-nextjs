import { FieldInput } from "@/models/field-input";

export interface StaffState {
    staffs: any[],
    pagination: {
        totalResults: number,
        totalPages: number,
        currentPage: number,
    }
}
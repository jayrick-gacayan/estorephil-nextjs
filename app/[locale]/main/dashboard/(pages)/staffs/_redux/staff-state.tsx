import { FieldInput } from "@/models/field-input";
import { RequestStatus } from "@/models/result";

export interface StaffState {
    getStaffStatus: RequestStatus
    staff: any[],
    pagination: {
        totalResults: number,
        totalPages: number,
        currentPage: number,
    }
}
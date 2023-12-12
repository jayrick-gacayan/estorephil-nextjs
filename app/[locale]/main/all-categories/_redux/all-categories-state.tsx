import { RequestStatus } from "@/models/result"

export interface AllCategoriesState {
    categories: any[]
    stores: any[]
    getStoreStatus: RequestStatus
    getCategoriesStatus: RequestStatus
}
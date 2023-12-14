import { RequestStatus } from "@/models/result";

export interface StoreState {
    getStoreDetailsStatus: RequestStatus
    store: any
    products: any[]
}
import { RequestStatus } from "@/models/result"

export interface HomeState {
    categories: any[]
    getMainCategoriesStatus: RequestStatus
}
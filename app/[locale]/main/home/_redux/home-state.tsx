import { RequestStatus } from "@/models/result"

export interface HomeState {
    categories: any[]
    stores: any[]
    products: any[]
    getMainCategoriesStatus: RequestStatus
    getMainStoresStatus: RequestStatus
    getMainProductsStatus: RequestStatus
}
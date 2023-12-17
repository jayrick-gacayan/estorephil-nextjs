import { RequestStatus } from "@/models/result"

export interface AllCategoriesState {
    categories: any[]
    products: any[]
    categoriesSelected: string[],
    sort: string | undefined,
    searchQuery: string | undefined,
    stores: any[]
    getStoreStatus: RequestStatus
    getCategoriesStatus: RequestStatus
    getProductsStatus: RequestStatus,
}
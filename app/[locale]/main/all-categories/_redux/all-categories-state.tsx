
import { RequestStatus } from '@/models/result'
import { Store } from '@/models/store'
export interface AllCategoriesState {
    categories: any[]
    stores: Store[]
    products: any[]
    categoriesSelected: string[],
    sort: string,
    searchQuery: string,
    getStoreStatus: RequestStatus
    getCategoriesStatus: RequestStatus
    getProductsStatus: RequestStatus,
}
import { Categories } from '@/models/category'
import { Store } from '@/models/store'
import { RequestStatus } from '@/types/enums/request-status'

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
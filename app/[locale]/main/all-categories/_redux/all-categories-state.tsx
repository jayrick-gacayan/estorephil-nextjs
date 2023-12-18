import { Categories } from '@/models/category'
import { Store } from '@/models/store'
import { RequestStatus } from '@/types/enums/request-status'

export interface AllCategoriesState {
    categories: Categories[]
    stores: Store[]

    products: any[]
    categoriesSelected: string[],
    sort: string,
    searchQuery: string | undefined,
    getStoreStatus: RequestStatus
    getCategoriesStatus: RequestStatus
    getProductsStatus: RequestStatus,
}
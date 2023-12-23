import { Categories } from '@/models/category'
import { Product } from '@/models/product'
import { Store } from '@/models/store'
import { RequestStatus } from '@/types/enums/request-status'

export interface HomeState {
    categories: Categories[]
    stores: Store[]
    ourProducts: Product[]
    getMainCategoriesStatus: RequestStatus
    getMainStoresStatus: RequestStatus
    getOurProductsStatus: RequestStatus
}
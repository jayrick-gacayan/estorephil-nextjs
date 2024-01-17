import { RequestStatus } from "@/models/result";
import { RequestStatus as MyRequestStatus } from '@/types/enums/request-status'

export interface ProductState {
    product: any
    isLoved?: boolean;
    getIsLovedLoadStatus: MyRequestStatus
    currentPreviewImage: any
    getProductDetailsStatus: RequestStatus
}
import { RequestStatus } from "@/models/result";

export interface ProductState {
    getProductDetailsStatus: RequestStatus
    product: any
    currentPreviewImage: any
}
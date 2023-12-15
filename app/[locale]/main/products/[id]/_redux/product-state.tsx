import { RequestStatus } from "@/models/result";

export interface ProductState {
    product: any
    currentPreviewImage: any
    getProductDetailsStatus: RequestStatus
}
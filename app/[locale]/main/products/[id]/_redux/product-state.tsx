import { RequestStatus } from "@/models/result";

export interface ProductState {
    product: any
    isLoved?: boolean;
    currentPreviewImage: any
    getProductDetailsStatus: RequestStatus
}
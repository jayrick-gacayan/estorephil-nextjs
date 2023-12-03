export interface OrderTracking {
    status: string;
    description: string;
    dateModified: string;
}
export interface OrderDetailState {
    orderItems: any[]
    orderTracking: OrderTracking[]
}
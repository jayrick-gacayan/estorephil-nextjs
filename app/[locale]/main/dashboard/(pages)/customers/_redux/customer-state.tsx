export interface CustomerState {
    customers: any[]
    pagination: {
        totalResults: number,
        totalPages: number,
        currentPage: number,
    }
}
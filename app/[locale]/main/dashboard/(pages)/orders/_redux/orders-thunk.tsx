import { ApiResponse, getResultStatus, ResultStatus } from "@/models/result"
import { AppDispatch, store } from "@/redux/store"
import { OrderRepository } from "@/repositories/order-repository"
import { getStaffLoaded, getStaffSuccess } from "../../staffs/_redux/staff-slice"
import { OrderState } from "./orders-state"
import { getAgentOrdersSuccess } from "./orders-slice"

export function getAgentOrders(orderRepository: OrderRepository, token: string, page: number, limit: number,) {
    return async function getStaff(dispatch: AppDispatch, getState: typeof store.getState) {
        const state = getState().order as OrderState
        dispatch(getStaffLoaded())
        const result: ApiResponse = await orderRepository.getAgentOrders(token, state.pagination.currentPage, limit)
        switch (getResultStatus(result.status)) {
            case ResultStatus.SUCCESS:
                dispatch(getAgentOrdersSuccess(result))
                console.log('get orders thunk', result)
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(getAgentOrdersSuccess([]))
                break;
        }
    }
}
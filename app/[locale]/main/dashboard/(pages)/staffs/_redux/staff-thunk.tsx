import { StaffRepository } from "@/repositories/staff-repository"
import { StaffState } from "./staff-state"
import { ApiResponse, ResultStatus, getResultStatus } from "@/models/result"
import { AppDispatch, store } from "@/redux/store"
import { getStaffLoaded, getStaffSuccess } from "./staff-slice"

export function getStaff(staffRepository: StaffRepository, token: string, page: number, limit: number,) {
    return async function getStaff(dispatch: AppDispatch, getState: typeof store.getState) {
        const state = getState().staff as StaffState
        dispatch(getStaffLoaded())
        const result: ApiResponse = await staffRepository.getStaff(token, state.pagination.currentPage, limit)
        switch (getResultStatus(result.status)) {
            case ResultStatus.SUCCESS:
                dispatch(getStaffSuccess(result))
                console.log('get staff thunk', result)
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(getStaffSuccess([]))
                break;
        }
    }
}
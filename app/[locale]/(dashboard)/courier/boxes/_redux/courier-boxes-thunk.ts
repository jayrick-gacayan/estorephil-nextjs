import { AppDispatch, store } from "@/redux/store";
import { BoxRepository } from "@/repositories/box-repository";
import { CourierBoxesState } from "./courier-boxes-state";
import { ResultStatus } from "@/types/enums/result-status";
import { RequestStatus } from "@/types/enums/request-status";
import {
  boxFormRequestStatusSet,
  courierBoxesRequestStatusSet,
  courierBoxesSet
} from "./courier-boxes-slice";
import { Box } from "@/models/box";
import { Result } from "@/types/helpers/result-helpers";

export function createBox(boxRepository: BoxRepository, token: string) {
  return async function (dispatch: AppDispatch, getState: typeof store.getState) {
    let courierBoxesState: CourierBoxesState = getState().courierBoxes;

    let result: Result<Box> = await boxRepository.createBox({
      boxType: courierBoxesState.boxFormFields.boxType.value,
      cargoType: courierBoxesState.boxFormFields.cargoType.value,
      length: courierBoxesState.boxFormFields.length.value,
      width: courierBoxesState.boxFormFields.width.value,
      height: courierBoxesState.boxFormFields.height.value,
      unitMeasure: courierBoxesState.boxFormFields.unitMeasure.value,
      weight: courierBoxesState.boxFormFields.weight.value,
      weightType: courierBoxesState.boxFormFields.weightType.value,
      price: courierBoxesState.boxFormFields.price.value,
      referralPercentage: courierBoxesState.boxFormFields.referralPercentage.value
    }, token);

    console.log('data', result.data)

    if (result.data && result.resultStatus === ResultStatus.SUCCESS) {
      dispatch(boxFormRequestStatusSet(RequestStatus.SUCCESS))
    }
    else {
      dispatch(boxFormRequestStatusSet(RequestStatus.FAILURE))
    }
  }
}

export function updateBox(boxRepository: BoxRepository, token: string, id: string) {
  return async function (dispatch: AppDispatch, getState: typeof store.getState) {
    let courierBoxesState: CourierBoxesState = getState().courierBoxes;

    let result: Result<Box> = await boxRepository.updateBox({
      boxType: courierBoxesState.boxFormFields.boxType.value,
      cargoType: courierBoxesState.boxFormFields.cargoType.value,
      length: courierBoxesState.boxFormFields.length.value,
      width: courierBoxesState.boxFormFields.width.value,
      height: courierBoxesState.boxFormFields.height.value,
      unitMeasure: courierBoxesState.boxFormFields.unitMeasure.value,
      weight: courierBoxesState.boxFormFields.weight.value,
      weightType: courierBoxesState.boxFormFields.weightType.value,
      price: courierBoxesState.boxFormFields.price.value,
      referralPercentage: courierBoxesState.boxFormFields.referralPercentage.value
    }, token, id);

    console.log('data', result.data)
    if (result.data && result.resultStatus === ResultStatus.SUCCESS) {
      dispatch(boxFormRequestStatusSet(RequestStatus.SUCCESS))
    }
    else {
      dispatch(boxFormRequestStatusSet(RequestStatus.FAILURE))
    }

  }
}

export function getAllCourierBoxes(boxRepository: BoxRepository, token: string, currentPage: number) {
  return async function (dispatch: AppDispatch, getState: typeof store.getState) {
    let courierBoxesState: CourierBoxesState = getState().courierBoxes;

    setTimeout(() => {
      dispatch(courierBoxesRequestStatusSet(RequestStatus.WAITING));
      dispatch(courierBoxesRequestStatusSet(RequestStatus.IN_PROGRESS))
    }, 500);


    setTimeout(async () => {
      let result = await boxRepository.getAllCourierBoxes(currentPage, token);

      console.log('data', result.data)
      dispatch(
        courierBoxesSet(result.data ??
          { ...courierBoxesState.courierBoxes, requestStatus: RequestStatus.FAILURE }
        )
      );
    }, 1000)

  }
}
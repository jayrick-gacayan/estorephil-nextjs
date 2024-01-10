import { AppDispatch, store } from "@/redux/store";
import { ProductRepository } from "@/repositories/product-repository";
import { ResultStatus } from "@/types/enums/result-status";
import { favoritesSet } from "./agent-favorite-slice";
import { AgentFavoriteState } from "./agent-favorite-state";
import { RequestStatus } from "@/types/enums/request-status";
import { toastAdded } from "@/app/[locale]/_redux/start-slice";
import { Dispatch, SetStateAction } from "react";

export function getAllFavorites(productRepository: ProductRepository, token: string) {
  return async function (dispatch: AppDispatch, getState: typeof store.getState) {
    let agentFavoriteState: AgentFavoriteState = getState().agentFavorite;
    let result = await productRepository.getAllProductFavorites(token);

    if (!!result.data && result.resultStatus === ResultStatus.SUCCESS) {
      dispatch(favoritesSet({
        currentPage: agentFavoriteState.favorites.currentPage,
        data: result.data,
        count: result.response.count ?? 0,
        requestStatus: RequestStatus.SUCCESS
      }))
    }
    else {
      dispatch(favoritesSet({
        ...agentFavoriteState.favorites,
        requestStatus: RequestStatus.FAILURE
      }))
    }
  }
}

export function deleteProductFromFavorites(
  productRepository: ProductRepository,
  token: string,
  id: string,
  setFavoriteDisabled: Dispatch<SetStateAction<boolean>>
) {
  return async function (dispatch: AppDispatch) {
    let result = await productRepository.deleteProductFromFavorites(token, id);

    if (result.message !== '' && result.resultStatus === ResultStatus.SUCCESS) {
      dispatch(getAllFavorites(productRepository, token))
    }

    dispatch(toastAdded({
      id: Date.now(),
      type: result.resultStatus === ResultStatus.SUCCESS ? 'success' : 'danger',
      duration: 2,
      message: result.resultStatus === ResultStatus.SUCCESS ? 'Successfully removed product to favorites' : 'Something went wrong. Try again.',
      position: ''
    }));

    setTimeout(() => { setFavoriteDisabled((value) => { return !value; }) }, 3000)
  }
}

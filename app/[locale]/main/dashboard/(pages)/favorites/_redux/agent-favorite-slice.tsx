import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AgentFavoriteState } from "./agent-favorite-state";
import { Product } from "@/models/product";
import { paginatedInit } from "@/types/helpers/field-methods";
import { RequestStatus } from "@/types/enums/request-status";
import { Paginated } from "@/models/paginated";

const initialState: AgentFavoriteState = {
  favorites: paginatedInit<Product>({
    data: [],
    currentPage: 1,
    requestStatus: RequestStatus.NONE,
    count: 0
  }),
}

export const agentFavoriteSlice = createSlice({
  name: 'agentFavorite',
  initialState,
  reducers: {
    favoritesSet: (state: AgentFavoriteState, action: PayloadAction<Paginated<Product>>) => {
      return {
        ...state,
        favorites: action.payload
      }
    }
  }
});

export const { favoritesSet } = agentFavoriteSlice.actions;

export default agentFavoriteSlice.reducer;
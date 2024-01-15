import { Paginated } from "@/models/paginated";
import { Product } from "@/models/product";

export interface AgentFavoriteState {
  favorites: Paginated<Product>
}
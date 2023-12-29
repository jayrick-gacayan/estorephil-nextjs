import { RequestStatus } from "@/types/enums/request-status";

export interface Paginated<T> {
  data: T[],
  count: number;
  requestStatus: RequestStatus;
  currentPage: number;
}
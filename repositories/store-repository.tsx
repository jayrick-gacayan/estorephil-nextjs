
import { TYPES } from "@/inversify/types";
import { StoreService } from "@/services/store-service";
import { inject, injectable } from "inversify";

@injectable()
export class StoreRepository {
    private storeService: StoreService;
    public constructor(
        @inject(TYPES.StoreService) storeService: StoreRepository,
    ) {
        this.storeService = storeService;
    }
    async getStoreDetail(id: string, locale: string) {
        return await this.storeService.getStoreDetail(id, locale)
    }
}

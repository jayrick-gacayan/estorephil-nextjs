
import { TYPES } from "@/inversify/types";
import { HomeService } from "@/services/home-service";
import { inject, injectable } from "inversify";

@injectable()
export class HomeRepository {
    private homeService: HomeService;
    public constructor(
        @inject(TYPES.HomeService) homeService: HomeService,
    ) {
        this.homeService = homeService;
    }
    async getMainCategories(locale: string) {
        return await this.homeService.getMainCategories(locale)
    }

}

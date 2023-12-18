import { TYPES } from '@/inversify/types';
import { Categories } from '@/models/category';
import { HomeService } from '@/services/home-service';
import { Result } from '@/types/helpers/result-helpers';
import { inject, injectable } from 'inversify';
import { camelCase } from 'change-case/keys';
import { Store } from '@/models/store';

@injectable()
export class HomeRepository {
    #homeService: HomeService;

    constructor(@inject(TYPES.HomeService) homeService: HomeService) {
        this.#homeService = homeService;
    }

    async getMainCategories(locale: string) {
        let result = await this.#homeService.getMainCategories(locale);

        let response: any = undefined;

        if (result.status === 200) {
            response = camelCase(await result.json());
        }

        return new Result<Categories[]>(
            {
                response: response,
                data: response.data,
                statusCode: result.status
            }
        )
    }


    async getMainProducts(locale: string) {
        return await this.#homeService.getMainProducts(locale)
    }

}


import { TYPES } from '@/inversify/types';
import { Store } from '@/models/store';
import { StoreService } from '@/services/store-service';
import { Result } from '@/types/helpers/result-helpers';
import { camelCase } from 'change-case/keys';
import { inject, injectable } from 'inversify';

@injectable()
export class StoreRepository {
    #storeService: StoreService;

    constructor(@inject(TYPES.StoreService) storeService: StoreService,
    ) {
        this.#storeService = storeService;
    }

    async getMainStores(locale: string) {
        let result = await this.#storeService.getMainStores(locale);

        let response: any = undefined;

        if (result.status === 200) {
            response = await result.json();
        }

        return new Result<Store[]>(
            {
                response: response,
                data: response.data.map((value: any) => { return camelCase({ ...value }) as any }) ?? [],
                statusCode: result.status
            }
        );
    }

    async getStoreDetail(id: string, locale: string) {
        return await this.#storeService.getStoreDetail(id, locale)
    }
}

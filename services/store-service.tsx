import { injectable } from "inversify";

@injectable()
export class StoreService {
    async getStoreDetail(id: string, locale: string) {
        const response = await fetch(`${process.env.API_URL}/stores/${id}/${locale}`)
        var result = await response.json();
        return result;
    }

    async getMainStores(locale: string) {
        return await fetch(`${process.env.API_URL}/main-stores/${locale}`);
    }

}
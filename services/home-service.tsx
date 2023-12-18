import { injectable } from 'inversify';

@injectable()
export class HomeService {
    async getMainCategories(locale: string) {
        return await fetch(`${process.env.API_URL}/main-categories/${locale}`);
    }

    async getMainStores(locale: string) {
        return await fetch(`${process.env.API_URL}/main-stores/${locale}`);
    }

    async getMainProducts(locale: string) {
        const response = await fetch(`${process.env.API_URL}/main-products/${locale}`)
        var result = await response.json();
        return result;
    }
}
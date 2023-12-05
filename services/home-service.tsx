import { injectable } from "inversify";

@injectable()
export class HomeService {
    async getMainCategories(locale: string) {
        const response = await fetch(`${process.env.API_URL}/main-categories/${locale}`)
        var result = await response.json();
        return result;
    }
    async getMainStores(locale: string) {
        const response = await fetch(`${process.env.API_URL}/main-stores/${locale}`)
        var result = await response.json();
        return result;
    }
    async getMainProducts(locale:string) {
        const response = await fetch(`${process.env.API_URL}/main-products/${locale}`)
        var result = await response.json();
        return result;
    }
}
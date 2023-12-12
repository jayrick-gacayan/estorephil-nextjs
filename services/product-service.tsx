import { injectable } from "inversify";

@injectable()
export class ProductService {
    async getProductDetails(id: string) {
        const response = await fetch(`${process.env.API_URL}/products/${id}`)
        var result = await response.json();
        return result;
    }
    async searchProducts(locale: string, query?: string, category?: string, sort?: string) {
        const response = await fetch(`${process.env.API_URL}/${locale}/?search=${query}&category=${category}&sort=${sort}`)
        var result = await response.json();
        return result;
    }
}
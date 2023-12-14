import { injectable } from "inversify";

@injectable()
export class ProductService {
    async getProductDetails(id: string) {
        const response = await fetch(`${process.env.API_URL}/products/${id}`)
        var result = await response.json();
        return result;
    }
    async searchProducts(locale: string, params: string) {
        const response = await fetch(`${process.env.API_URL}/${locale}/products?${params}`)
        var result = await response.json();
        return result;
    }
}
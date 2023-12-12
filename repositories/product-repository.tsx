
import { TYPES } from "@/inversify/types";
import { ProductService } from "@/services/product-service";
import { inject, injectable } from "inversify";

@injectable()
export class ProductRepository {
    private productService: ProductService;
    public constructor(
        @inject(TYPES.ProductService) productService: ProductService,
    ) {
        this.productService = productService;
    }
    async getProductDetails(id: string) {
        return await this.productService.getProductDetails(id)
    }
    async searchProducts(locale: string, query: string, category: string, sort: string) {
        return await this.productService.searchProducts(locale, query, category, sort)
    }
}

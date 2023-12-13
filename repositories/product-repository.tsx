
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
    async searchProducts({ locale, query, categories, sort }: { locale: string, query?: string, categories?: string[], sort?: string }) {
        const params = new URLSearchParams();
        if (!!query) {
            params.set('search', query)
        }
        if (!!categories && categories.length > 0) {
            categories.forEach((category, index) => {
                params.set(`category[${index}]`, category);
            });
        }
        if (!!sort) {
            params.set('sort', sort)
        }
        return await this.productService.searchProducts(locale, params.toString())
    }
}

import { TYPES } from '@/inversify/types';
import { Product } from '@/models/product';
import { ProductService } from '@/services/product-service';
import { Result } from '@/types/helpers/result-helpers';
import { camelCase } from 'change-case/keys';
import { inject, injectable } from 'inversify';

@injectable()
export class ProductRepository {
    #productService: ProductService;

    constructor(@inject(TYPES.ProductService) productService: ProductService) {
        this.#productService = productService;
    }
    async getProductDetails(id: string) {
        return await this.#productService.getProductDetails(id)
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
        return await this.#productService.searchProducts(locale, params.toString())
    }
    async addToCart(token: string, productId: number, quantity: number) {
        const body = {
            order: {
                product_id: productId,
                quantity: quantity,
            }
        }
        return await this.#productService.addToCart(token, JSON.stringify(body))
    }
    async removeFromCart(token: string, productId: number) {
        return await this.#productService.removeFromCart(token, productId)
    }

    async productsSearch({
        locale,
        query,
        categories,
        sort
    }: {
        locale: string,
        query?: string,
        categories: string[],
        sort: string
    }) {
        let params = new URLSearchParams();

        if (categories.length > 0) {
            for (let i = 0; i < categories.length;) {
                params.append(`category[]`, categories[i++]);
            }
        }

        if (sort !== '') {
            params.append('sort', sort)
        }

        let result = await this.#productService.productsSearch(locale, params.toString() !== '' ? `?${params.toString()}` : ``)

        let response: any = undefined;

        if (result.status === 200) {
            response = camelCase(await result.json());
        }

        return new Result<Product[]>({
            response: response,
            data: response.data,
            statusCode: result.status
        })
    }

    async getMainProducts(locale: string) {
        let result = await this.#productService.getMainProducts(locale);

        let response: any = undefined;
        if (result.status === 200) {
            response = camelCase(await result.json());
        }

        return new Result<Product[]>({
            response: response,
            data: response.data,
            statusCode: result.status
        });
    }
}

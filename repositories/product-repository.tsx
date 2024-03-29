import { TYPES } from '@/inversify/types';
import { Product } from '@/models/product';
import { ProductService } from '@/services/product-service';
import { Result } from '@/types/helpers/result-helpers';
import { camelCase } from 'change-case/keys';
import { inject, injectable } from 'inversify';

@injectable()
export class ProductRepository {
    productService: ProductService;

    constructor(@inject(TYPES.ProductService) productService: ProductService) {
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
    async addToCart(token: string, productId: number, quantity: number) {
        const body = {
            order: {
                product_id: productId,
                quantity: quantity,
            }
        }
        return await this.productService.addToCart(token, JSON.stringify(body))
    }
    async removeFromCart(token: string, productId: number) {
        return await this.productService.removeFromCart(token, productId)
    }

    async productsSearch(
        locale: string,
        search: string,
        categories: string[],
        sort: string) {
        let params = new URLSearchParams();

        if (search !== "") { params.append(encodeURIComponent('search'), encodeURIComponent(search)) }
        if (categories.length > 0) {
            for (let i = 0; i < categories.length;) {
                params.append(encodeURIComponent(`category[]`), encodeURIComponent(categories[i++]));
            }
        }

        if (sort !== '') { params.append(encodeURIComponent('sort'), encodeURIComponent(sort)) }


        let result = await this.productService.productsSearch(locale,
            params.toString() !== '' ? `?${params.toString()}` : ``)

        let response: any = undefined;

        if (result.status === 200) {
            response = await result.json();
        }

        return new Result<Product[]>({
            response: response,
            data: response.data.map((value: any) => {
                return camelCase({ ...value })
            }) ?? [],
            statusCode: response.status
        })
    }

    async getMainProducts(locale: string) {
        let result = await this.productService.getMainProducts(locale);

        let response: any = undefined;
        if (result.status === 200) {
            response = await result.json();
        }

        console.log('response', response)
        return new Result<Product[]>({
            response: response,
            data: (response.data && response.data.length > 0) ? response.data.map((value: any) => { return camelCase({ ...value, rating: 4.5, totalRaters: 123 }) as any }) : [],
            statusCode: result.status
        });
    }


    async getAllProductFavorites(token: string) {
        let result = await this.productService.getAllProductFavorites(token);
        let response = await result.json();

        return new Result<Product[]>({
            response: response,
            data: response.data ?? [],
            statusCode: response.status
        })
    }

    async addProductToFavorites(token: string, id: string) {
        let result = await this.productService.addProductToFavorites(token, id);

        let response = await result.json();

        return new Result<Product>({
            response: response,
            data: response.data ?? undefined,
            statusCode: response.status
        })
    }

    async deleteProductFromFavorites(token: string, id: string) {
        let result = await this.productService.deleteProductFromFavorites(token, id);

        let response = await result.json();

        return new Result<Product>({
            response: response,
            message: response.message,
            statusCode: response.status
        })
    }
}

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
    async addToCart(token: string, body: string) {
        const response = await fetch(`${process.env.API_URL}/add_to_cart`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: body
        })
        var result = await response.json()
        return result;
    }
    async removeFromCart(token: string, productId: number) {
        const response = await fetch(`${process.env.API_URL}/${productId}/remove_from_cart`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        var result = await response.json()
        return result;
    }

    async getMainProducts(locale: string) {
        return await fetch(`${process.env.API_URL}/main-products/${locale}`);
    }

    async productsSearch(locale: string, queryString: string) {
        return await fetch(`${process.env.API_URL}/${locale}/products${queryString}`)
    }
}
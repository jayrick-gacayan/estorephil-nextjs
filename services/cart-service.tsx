import { injectable } from "inversify";

@injectable()

export class CartService {
    async setCart(token: string, body: string) {
        const response = await fetch(`${process.env.API_URL}/set_cart`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: body
        })
        var result = await response.json()
        console.log('set cart service: ', result)
        return result
    }
}
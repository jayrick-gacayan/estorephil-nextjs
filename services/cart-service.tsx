import { injectable } from "inversify";

@injectable()

export class CartService {
    async getMainCart(token: string) {
        console.log('mmain cart called')
        const response = await fetch(`${process.env.API_URL}/cart-main`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
        var result = await response.json()
        return result
    }
}
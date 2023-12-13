import { injectable } from "inversify";

@injectable()
export class OrderService {
    async getAgentOrders(token: string, page: number, limit: number) {
        const response = await fetch(`${process.env.API_URL}/orders?page=${page}&limit=${limit}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        var result = await response.json();
        console.log('get staff result: ', result)
        return result;
    }
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
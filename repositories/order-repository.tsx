
import { TYPES } from "@/inversify/types";
import { AccountService } from "@/services/account-service";
import { OrderService } from "@/services/order-service";
import { inject, injectable } from "inversify";
import { SignInOptions } from "next-auth/react";


@injectable()
export class OrderRepository {
    private orderService: OrderService;
    public constructor(
        @inject(TYPES.OrderService) orderService: OrderService,
    ) {
        this.orderService = orderService;
    }
    async getMainCart() {

    }
    async getAgentOrders(token: string, page: number, limit: number) {
        return await this.orderService.getAgentOrders(token, page, limit)
    }
    async setCart({
        token,
        cartType,
        deliveryType,
        companyId,
        address1,
        address2,
        city,
        country,
        zipCode,
        boxSize,

    }: {
        token: string,
        cartType: string,
        deliveryType?: string,
        companyId: number,
        address1?: string,
        address2?: string
        city: string
        country: string
        zipCode?: string
        boxSize?: string
    }) {
        const body = {
            cart: {
                cart_type: cartType,
                is_active: true,
                country: country,
                city: city,
                box_size: boxSize,
                delivery_type: deliveryType,
                company_id: companyId,
                address_1: address1,
                address_2: address2,
                zip_code: zipCode
            }
        }
        console.log('set cart repository dispatched', JSON.stringify(body))
        return await this.orderService.setCart(token, JSON.stringify(body))
    }

}

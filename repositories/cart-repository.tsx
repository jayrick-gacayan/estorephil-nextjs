import { TYPES } from "@/inversify/types";
import { CartService } from "@/services/cart-service";
import { injectable, inject } from "inversify";

@injectable()
export class CartRepository {
    private cartService: CartService;
    public constructor(
        @inject(TYPES.CartService) cartService: CartService,
    ) {
        this.cartService = cartService;
    }
    async getMainCart() {

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
        return await this.cartService.setCart(token, JSON.stringify(body))
    }

}

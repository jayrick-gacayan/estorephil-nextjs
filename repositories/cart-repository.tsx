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
    async getMainCart(token: string) {
        return await this.cartService.getMainCart(token)
    }

}

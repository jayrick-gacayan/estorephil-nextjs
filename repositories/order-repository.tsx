
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
    async getAgentOrders(token: string, page: number, limit: number) {
        return await this.orderService.getAgentOrders(token, page, limit)
    }

}

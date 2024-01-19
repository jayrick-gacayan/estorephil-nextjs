import { TYPES } from "@/inversify/types";
import { OrderService } from "@/services/order-service";
import { Result } from "@/types/helpers/result-helpers";
import { inject, injectable } from "inversify";
@injectable()
export class OrderRepository {
    private orderService: OrderService;
    public constructor(
        @inject(TYPES.OrderService) orderService: OrderService,
    ) {
        this.orderService = orderService;
    }
    async createOrder({ token, stores, boxes }: { token: string, stores: any[], boxes?: any[] | null }) {
        var order_boxes = !!boxes ? boxes : null;
        const data = {
            stores: stores,
            boxes: order_boxes
        }
        return await this.orderService.createOrder(token, JSON.stringify(data))
    }
    async checkout({ token, trId, orderId, orderInfo, senderInfo, receiverInfo, paymentInfo }: {
        token: string,
        orderId: number | string,
        trId?: number | string | null,
        orderInfo: {
            status?: string,
            currency?: string,
            shipping?: string,
            sales_tax?: string,
            service_delivery_tax?: string,
            subTotal?: string | number,
            total?: string | number,
            ph_tax?: string,
            total_prod_price?: string | number,
            delivery_notes?: string,
            billing_first_name?: string,
            billing_last_name?: string,
            billing_address?: string,
            billing_mobile_number?: string,
            billing_email?: string
        },
        senderInfo: {
            order_id?: number | string,
            first_name?: string,
            last_name?: string,
            street?: string,
            town?: string,
            city?: string,
            province?: string,
            postal_code?: string,
            country?: string,
            phone_number?: string,
            mobile_number?: string,
            email?: string,
        },
        receiverInfo: {
            order_id?: string,
            first_name?: string,
            last_name?: string,
            relationship?: string,
            street?: string,
            town?: string,
            city?: string,
            province?: string,
            postal_code?: string,
            country?: string,
            phone_number?: string,
            mobile_number?: string,
            email?: string
        },
        paymentInfo: {
            first_name: string,
            last_name: string,
            card_number: string,
            expiry_month: string,
            expiry_year: string,
            cvv: string
        }
    }) {
        const data = {
            tr_id: trId ?? null,
            order_id: orderId,
            order: {
                status: orderInfo.status ?? 'pending',
                currency: orderInfo.currency ?? "C$",
                shipping: orderInfo.shipping ?? "0",
                sales_tax: orderInfo.sales_tax ?? "0",
                service_delivery_tax: orderInfo.service_delivery_tax ?? "0",
                subTotal: orderInfo.subTotal ?? 0,
                total: orderInfo.total ?? 0,
                ph_tax: orderInfo.ph_tax ?? "0",
                total_prod_price: orderInfo.total_prod_price ?? "0",
                delivery_notes: orderInfo.delivery_notes ?? "",
                billing_first_name: orderInfo.billing_first_name ?? "",
                billing_last_name: orderInfo.billing_last_name ?? '',
                billing_address: orderInfo.billing_address ?? '',
                billing_mobile_number: orderInfo.billing_mobile_number ?? '',
                billing_email: orderInfo.billing_email ?? '',
            },
            order_customer: {
                order_id: orderId,
                first_name: senderInfo.first_name ?? '',
                last_name: senderInfo.last_name ?? '',
                street: senderInfo.street ?? '',
                town: senderInfo.town ?? '',
                city: senderInfo.city ?? '',
                province: senderInfo.province ?? '',
                postal_code: senderInfo.postal_code ?? '',
                country: senderInfo.country ?? '',
                phone_number: senderInfo.phone_number ?? '',
                mobile_number: senderInfo.mobile_number ?? '',
                email: senderInfo.email ?? ''
            },
            order_receiver: {
                order_id: orderId,
                first_name: receiverInfo.first_name ?? '',
                last_name: receiverInfo.last_name ?? '',
                relationship: receiverInfo.relationship ?? '',
                street: receiverInfo.street ?? '',
                town: receiverInfo.town ?? '',
                city: receiverInfo.city ?? '',
                province: receiverInfo ?? '',
                postal_code: receiverInfo.postal_code ?? '',
                country: receiverInfo.country ?? '',
                phone_number: receiverInfo.phone_number ?? '',
                mobile_number: receiverInfo.mobile_number ?? '',
                email: receiverInfo ?? ''
            },
            order_payment: {
                first_name: paymentInfo.first_name,
                last_name: paymentInfo.last_name,
                card_number: paymentInfo.card_number,
                expiry_month: paymentInfo.expiry_month,
                expiry_year: paymentInfo.expiry_year,
                cvv: paymentInfo.cvv
            }
        }
        return await this.orderService.checkout(token, JSON.stringify(data))
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

    async updateCheckoutOrder(data: any, orderId: string, token: string) {
        let result = await this.orderService.updateCheckoutOrder(
            JSON.stringify({
                tr_id: null,
                order_id: orderId,
                ...data
            })
            , token
        );

        let response: any = undefined;

        if (result.status === 200) {
            response = await result.json();
        }

        console.log('response on update checkout order', response)
        return new Result<any>({
            response: response,
            data: response?.data ?? undefined,
            statusCode: response?.status ?? result.status
        });
    }

    async getAgentOrder(orderId: number, token: string) {
        let result = await this.orderService.getAgentOrder(orderId, token);

        let response: any = undefined;

        if (result.status === 200) {
            response = await result.json();
        }

        console.log('response on get checkout order', response)
        return new Result<any>({
            response: response,
            data: response?.data ?? undefined,
            statusCode: response?.status ?? result.status
        })
    }

}

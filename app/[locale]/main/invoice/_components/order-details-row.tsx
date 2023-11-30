import { OrderDetail } from "@/models/order-detail";
import Image from 'next/image';

export default function OrderDetailsRow({
  orderDetail,
}: {
  orderDetail: OrderDetail
}) {
  return (
    <div className="flex gap-2 items-center py-2">
      <div className="flex-none w-auto">
        <Image alt={`order-details-${orderDetail.orderNo}-${orderDetail.product.id}`}
          src={orderDetail.product.productImage}
          width={96}
          height={96}
          className="w-24 h-24" />
      </div>
      <div className="flex-1">{orderDetail.product.name}</div>
      <div className="space-x-2 flex-none w-48 text-[24px]">
        <span className="inline">x</span>
        <span className="inline font-semibold  align-middle">{orderDetail.quantity}</span>
      </div>
      <div className="flex-none w-48">
        <div className="space-x-1">
          <span className="inline">C&#36;</span>
          <span className="inline">{(orderDetail.product.price * orderDetail.quantity).toFixed(2)}</span>
        </div>
      </div>

    </div>
  )
}
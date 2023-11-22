import { Currency } from "@/types/props/currency";
import Image from "next/image";

export default function CourierOption({
    courierName,
    courierImageUrl,
    courierDeliveryPrice,
    currency,
    selected,
}: {
    courierName: string,
    courierImageUrl: string,
    courierDeliveryPrice: number,
    currency: string,
    selected: boolean,
}) {
    return (
        <>
            <div className={`flex items-center justify-start gap-2 w-[382px]  ${selected && `border-2 border-blue-500`}`}>
                <div>
                    <Image src={courierImageUrl} alt={courierName} height={79} width={79} className="object-fill" />
                </div>
                <div>
                    <div className="text-lg font-[600]"> {courierName}</div>
                    <div className="flex items-center gap-2">
                        <p className="text-gray-500">{currency}</p>
                        <span className="text-blue-500 text-[25px]">
                            {courierDeliveryPrice}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
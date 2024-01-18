'use client'
import { RootState } from "@/redux/store";
import Validations from "@/types/validations"
import { usePathname, useRouter } from "next-intl/client";
import { useSelector } from "react-redux";

export default function PreviousButton() {
    const url = usePathname()
    const state = useSelector((state: RootState) => state.checkout)
    const prevUrl = url.includes('receiver') ? `/checkout/sender?order-id=${state.order.id ?? ''}` :
        url.includes(`order-summary`) ? `/checkout/receiver?order-id=${state.order.id ?? ''}` :
            url.includes(`payment-method`) ? `/checkout/order-summary?order-id=${state.order.id ?? ''}` :
                `/checkout`
    const router = useRouter()
    return (
        <>
            <div className={``}>
                <button className={`text-blue-500 underline ${url === '/checkout/sender' ? `hidden` : ``}`}
                    onClick={() => { router.push(prevUrl) }}>back
                </button>
            </div>

        </>
    )
}
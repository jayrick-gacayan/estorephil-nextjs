'use client'

import { usePathname } from "next-intl/client"
import SummaryCheckout from "../../cart/_sections/summary-checkout"
export default function Summary() {
    const pathname = usePathname()
    return (
        <>
            {
                pathname.includes('order-summary') || pathname.includes('payment-method')
                    ?
                    <div className="w-full">
                        <SummaryCheckout />
                    </div>
                    : null
            }

        </>
    )
}
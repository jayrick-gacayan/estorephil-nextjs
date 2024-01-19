'use client'

import { usePathname } from "next-intl/client"
import SummaryCheckout from "../../cart/_sections/summary-checkout"
export default function Summary() {
    return (
        <>
            <div className="w-full">
                <SummaryCheckout />
            </div>
        </>
    )
}
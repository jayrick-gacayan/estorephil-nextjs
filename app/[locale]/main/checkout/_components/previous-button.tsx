'use client'
import Validations from "@/types/validations"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"

export default function PreviousButton() {
    const url = usePathname()
    const prevUrl = url.includes('receiver') ? '/checkout/sender' :
        url.includes('order-summary') ? '/checkout/receiver' :
            url.includes('payment-method') ? '/checkout/order-summary' :
                '/checkout'
    const router = useRouter()
    return (
        <>
            <div className={``}>
                <button className={`text-blue-500 underline ${url === '/checkout/sender' ? `hidden` : ``}`} onClick={() => { router.push(prevUrl) }}>back</button>
            </div>

        </>
    )
}
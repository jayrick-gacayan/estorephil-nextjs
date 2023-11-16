'use client'
import { usePathname, useRouter } from "next/navigation";

export default function NextButton() {
    const url = usePathname();
    const router = useRouter();
    return (
        <button className="py-4 bg-yellow-500 rounded-md text-white w-[50%]"
            onClick={() => {
                url.includes('sender') ? router.push('/checkout/receiver')
                    : url.includes('receiver') ? router.push('/checkout/order-summary')
                        : url.includes('order-summary') ? router.push('/checkout/payment-method')
                            : router.push('checkout')
            }}>
            {url.includes('payment-method') ? <p>Checkout </p> : <p>Next</p>}
        </button>
    )
}
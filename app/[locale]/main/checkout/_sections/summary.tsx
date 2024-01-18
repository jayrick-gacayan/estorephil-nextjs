

import SummaryCheckout from "../../cart/_sections/summary-checkout"
export default function Summary() {
    const questions = [
        'WHAT PAYMENT METHODS CAN I USE?', 'HOW DO I USE A PROMO CODE?', 'WHERE TO GET PROMO CODE?', 'HOW SECURE IS MY PURCHASE?'
    ]
    return (
        <>
            <div className="w-full">
                <SummaryCheckout />
            </div>
        </>
    )
}
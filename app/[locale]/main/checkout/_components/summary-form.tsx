import SummaryLabel from "./summary-label";

export default function SummaryForm() {
    return (
        <>
            <div className="block">
                <div className="flex justify-between items-center">
                    <SummaryLabel text="ITEMS" />
                    <p className="text-blue-400">26</p>
                </div>
                <div className="flex justify-between items-center">
                    <SummaryLabel text="SUBTOTAL" />
                    <p className="">C$ 690.00</p>
                </div>
                <div className="flex justify-between items-center">
                    <SummaryLabel text="SHIPPING & HANDLING" />
                    <p className="text-blue-400">Proceed to Checkout</p>
                </div>
                <div className="flex justify-between items-center">
                    <SummaryLabel text="SERVICE DELIVERY TAX" />
                    <p className="text-blue-400">Proceed to Checkout</p>
                </div>
                <div className="flex justify-between items-center">
                    <SummaryLabel text="VAT" />
                    <p className="text-blue-400">4%</p>
                </div>
                <div className="flex justify-between items-center border-t-2 py-4">
                    <SummaryLabel text="TOTAL" />
                    <div className="block text-right">
                        <p>C$ 992.06</p>
                        <a className="text-blue-400 underline" href="/#">APPLY A PROMO CODE</a>
                    </div>
                </div>
            </div>
        </>
    )
}
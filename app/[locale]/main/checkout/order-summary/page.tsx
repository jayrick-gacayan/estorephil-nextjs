import CartDetails from "./_sections/cart-details";
import DeliveryDetails from "./_sections/deliver-details";
import ReceiverInfo from "./_sections/receiver-info";

export default function Page() {

    return (
        <>
            <div>
                <div className="flex items-center w-full gap-4 mt-4">
                    <ReceiverInfo />
                    <DeliveryDetails />
                </div>
                <div className="my-12">
                    <CartDetails />
                </div>
            </div>
        </>
    )
}
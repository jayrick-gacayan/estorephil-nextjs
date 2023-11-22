import Calculations from "./_sections/calculations";
import HeaderInfo from "./_sections/header-info";
import Items from "./_sections/items-info";
import OrderInfo from "./_sections/order-info";
import Tracking from "./_sections/tracking";

export default function Page() {
    return (
        <>
            <div className="bg-[#f7f9fc] px-[230px] py-[30px] w-full">
                <div className="bg-white w-full px-[54px] py-[47px] shadow-md">
                    <HeaderInfo />
                    <OrderInfo />
                    <Items />
                </div>
                <Calculations />
                <Tracking />
            </div>

        </>
    )
}
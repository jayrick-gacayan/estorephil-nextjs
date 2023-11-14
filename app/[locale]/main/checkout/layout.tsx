import { ReactNode } from "react";
import Header from "./_sections/header";
import CheckoutIndicator from "./_sections/checkout-indicator";
import Summary from "./_sections/summary";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex w-full">
            <div className="block w-[70%] ">
                <Header />
                <div className="px-[67px]">
                    <CheckoutIndicator />
                    {children}
                </div>
                <div className="mx-16 text-center mb-12">
                    <button className="py-4 bg-yellow-500 rounded-md text-white w-[50%]">Next</button>
                </div>
            </div>
            <div className="w-full md:w-[30%] bg-[#f8fbfe]">
                <Summary />
            </div>
        </div>
    )
}
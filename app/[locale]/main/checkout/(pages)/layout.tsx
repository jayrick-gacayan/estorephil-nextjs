import { ReactNode } from "react";
import Header from "../_sections/header";
import CheckoutIndicator from "../_sections/checkout-indicator";
import Summary from "../_sections/summary";
import CheckoutButtons from "./sender/_sections/checkout-buttons";
import Providers from "../_sections/providers";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <Providers>
            <div className="flex w-full">
                <div className="block w-[70%] ">
                    <Header />
                    <div className="px-[67px]">
                        <CheckoutIndicator />
                        {children}
                    </div>
                    <CheckoutButtons />
                </div>
                <div className="w-full md:w-[30%] bg-[#f8fbfe]">
                    <Summary />
                </div>
            </div>
        </Providers>
    )
}
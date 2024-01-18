import { ReactNode } from "react";
import Header from "../_sections/header";
import CheckoutIndicator from "../_sections/checkout-indicator";
import Summary from "../_sections/summary";
import PreviousButton from "../_components/previous-button";
import NextButton from "../_components/next-button";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex w-full">
            <div className="block w-[70%] ">
                <Header />
                <div className="px-[67px]">
                    <CheckoutIndicator />
                    {children}
                </div>
                <div className="mx-16 flex items-center justify-between mb-12">
                    <PreviousButton />
                    <NextButton />

                </div>
            </div>
            <div className="w-full md:w-[30%] bg-[#f8fbfe]">
                <Summary />
            </div>
        </div>
    )
}
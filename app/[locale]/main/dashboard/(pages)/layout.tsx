import { useTranslations } from "next-intl"
import Header from "../_sections/header"
import { ReactNode } from "react"
import SideBar from "../_sections/sidebar"

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="w-full">
                <Header />
                <div className="flex w-full h-full content-stretch">
                    <SideBar />
                    <div className="border-l-[2px] border-[#D4D4D4] w-full h-full">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
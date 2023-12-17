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
                    <div className="border-l border-tertiary-dark w-full h-full relative">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
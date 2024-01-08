import Header from "../_sections/header"
import { ReactNode } from "react"
import SideBar from "../_sections/sidebar"

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full">
            <Header />
            <div className="flex w-full h-full items-stretch">
                <SideBar />
                <div className="w-full relative">
                    {children}
                </div>
            </div>
        </div>
    )
}
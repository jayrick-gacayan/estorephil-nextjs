'use client'
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import Link from 'next-intl/link';

export default function SidebarLink({ icon, href, label }: { label: string, icon: ReactNode, href: string }) {
    const url = usePathname()
    const router = useRouter()
    return (
        <>
            <div className="flex gap-2 items-center w-full">
                {icon}
                <button onClick={() => {
                    router.push(`${href}`)
                }} className={`${url.includes(`${href}`) ? `text-blue-500` : ``} text-[18px] font-medium`}>{label}</button>
            </div >
        </>
    )
}
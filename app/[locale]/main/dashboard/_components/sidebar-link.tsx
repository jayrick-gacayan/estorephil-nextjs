'use client'
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Link from 'next-intl/link';

export default function SidebarLink({ icon, href, label }: { label: string, icon: ReactNode, href: string }) {
    const url = usePathname()
    return (
        <>
            <div className="flex gap-2 items-center">
                {icon}
                <Link href={href} className={`${url.includes(`${href}`) ? `text-blue-500` : ``} text-[18px] font-medium`}>{label}</Link>
            </div >
        </>
    )
}
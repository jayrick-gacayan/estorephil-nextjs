'use client'

import { usePathname } from "next/navigation"

export default function Success() {
    const url = usePathname()
    const success = url.includes('success')
    return (
        <>
        </>
    )
}
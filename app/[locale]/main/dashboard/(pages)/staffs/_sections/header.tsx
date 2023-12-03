'use client'
import { useTranslations } from "next-intl"
import { useRouter } from "next-intl/client"

export default function Header() {
    const translate = useTranslations()
    const router = useRouter()
    return (
        <>
            <div className="flex w-full justify-end items-center">
                <button onClick={() => {
                    router.push('/dashboard/staffs/add')
                }} className="h-[45px] px-4 text-white bg-primary py-2 rounded-md">
                    {translate("addStaff")}
                </button>
            </div>
        </>
    )
}
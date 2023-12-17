'use client'
import { useSession } from "next-auth/react"
import { useTranslations } from "next-intl"

export default function Contacts() {
    const translate = useTranslations()
    const { data: sessionData } = useSession()
    return (
        <div className='space-y-4 pt-4'>
            <h3 className="font-semibold text-[24px]">{translate("contacts")}</h3>

            <button className="transtion-all delay-100 block py-2 px-4 border rounded-md border-primary bg-info-light text-primary-dark hover:bg-info hover:text-white">
                {translate("viewAdmins")}
            </button>
        </div>
    )
}
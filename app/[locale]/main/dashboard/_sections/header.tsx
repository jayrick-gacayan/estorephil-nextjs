
'use client'
import { useTranslations } from "next-intl"
import { usePathname, useRouter } from "next-intl/client"

export default function Header() {
    const translate = useTranslations()
    const url = usePathname()
    const router = useRouter()
    const onDetailsPage = url.startsWith('/dashboard/orders/')
    const onSpecificReportPage = url.startsWith('/dashboard/reports/')
    const section = url.includes('agency-information') ? translate('agencyInformation')
        : url.includes('orders') ? translate('orders')
            : url.includes('staff') ? translate('staff')
                : url.includes('customers') ? translate('customers')
                    : url.includes('notifications') ? translate('notifications')
                        : translate('reports')
    return (
        <>
            <div className={`flex items-center ${onDetailsPage || onSpecificReportPage && `justify-between`} w-full px-[153px] py-8 border-b-[2px] border-[#D4D4D4]`}>
                <div className="text-gray-700 text-[30px]"> {onDetailsPage ? translate('order') : onSpecificReportPage ? translate("specificReport^") : section} </div>
                {onDetailsPage &&
                    (
                        <button className="text-primary text-[20px] font-bold" onClick={() => {
                            router.push('/dashboard/orders')
                        }}>
                            BACK
                        </button>
                    )
                }
                {onSpecificReportPage &&
                    (
                        <button className="text-primary text-[20px] font-semibold" onClick={() => {
                            router.push('/dashboard/reports')
                        }}>
                            All Reports
                        </button>
                    )
                }
            </div>
        </>
    )
}
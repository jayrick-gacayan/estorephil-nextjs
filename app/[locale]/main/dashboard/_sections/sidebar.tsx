'use client'
import { FaBell, FaCamera, FaShoppingCart, FaUserTie, FaUsers } from "react-icons/fa";
import SidebarLink from "../_components/sidebar-link";
import { usePathname } from "next/navigation";
import { FaUsersGear } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import Image from "next/image";
export default function SideBar() {
    const url = usePathname()
    const onDetailsPage = url.startsWith('/dashboard/orders/')
    console.log('on details page: ', onDetailsPage)
    return (
        <> {onDetailsPage ? <></> : <div className="px-[120px] pr-16 w-[25%] h-full">
            <div className="my-4">
                <div className="flex items-center justify-center relative p-8">
                    <Image alt='' src='https://1000logos.net/wp-content/uploads/2021/02/Shopee-Logo-2015.png' height={181} width={181} className="h-[181px] w-[181px] rounded-full shadow-md border-4 border-blue-200" />
                    <button className="bg-blue-500 border-1 border-white rounded-full absolute bottom-[35px] right-[18px] z-10 p-2">
                        <FaCamera color={"white"} size={15} />
                    </button>

                </div>
                <div className="text-center">
                    <h1 className="text-[18px] font-bold">Agency Corp</h1>
                    <p>Mike Estrada</p>
                </div>
            </div>
            <div className="py-4 space-y-4 mb-8">
                <SidebarLink href="/dashboard/agency-information" label="AGENCY INFORMATION" icon={<FaUserTie size={25} color={`${url.includes(`agency-information`) ? `#8bb8f1` : `gray`}`} />} />
                <SidebarLink href="/dashboard/staffs" label="STAFF" icon={<FaUsersGear size={25} color={`${url.includes(`staff`) ? `#8bb8f1` : `gray`}`} />} />
                <SidebarLink href="/dashboard/orders" label="ORDERS" icon={<FaShoppingCart size={25} color={`${url.includes(`orders`) ? `#8bb8f1` : `gray`}`} />} />
                <SidebarLink href="/dashboard/customers" label="CUSTOMERS" icon={<FaUsers size={25} color={`${url.includes(`customers`) ? `#8bb8f1` : `gray`}`} />} />
                <SidebarLink href="/dashboard/notifications" label="NOTIFICATIONS" icon={<FaBell size={25} color={`${url.includes(`notifications`) ? `#8bb8f1` : `gray`}`} />} />
                <SidebarLink href="/dashboard/reports" label="REPORTS" icon={<TbReportSearch size={25} color={`${url.includes(`reports`) ? `#8bb8f1` : `gray`}`} />} />
            </div>
        </div>}
        </>
    )
}
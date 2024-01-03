'use client';

import { FaBell, FaCamera, FaShoppingCart, FaUserTie, FaUsers } from "react-icons/fa";
import SidebarLink from "../_components/sidebar-link";
import { useSelectedLayoutSegment } from "next/navigation";
import { FaHeart, FaUsersGear } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useMemo } from "react";

export default function SideBar() {
    const segment = useSelectedLayoutSegment();
    const { data: sessionData } = useSession()
    const companyOwnerName = `${sessionData?.company?.first_name} ${sessionData?.company?.last_name}`

    let current = useMemo(() => { return segment ?? '' }, [segment])

    return current === 'orders' ? null :
        (<div className="p-8 w-[416px] h-full space-y-4">
            <div className="space-y-4">
                <div className="relative h-[180px] w-[180px] m-auto block">
                    <Image alt='profile-image'
                        src={`https://estorephilbucketv1.s3.us-west-2.amazonaws.com/assets/images/profile_image_default.jpg`}
                        height={180}
                        width={180}
                        className="h-full w-full rounded-full m-auto block"
                    />
                    <div className="bg-primary border border-white rounded-full absolute bottom-0 text-white right-0 z-10 p-2">
                        <FaCamera size={24} />
                    </div>
                </div>
                <div className="text-center">
                    <h1>{sessionData?.company?.company_name}</h1>
                    <p>{companyOwnerName}</p>
                </div>
            </div>
            <div className="space-y-4">
                <SidebarLink link='/dashboard/agency-information'
                    altText='agency-information'
                    icon={<FaUserTie size={24} />}
                    text='AGENCY INFORMATION'
                    current={current}
                    onActiveLink={(altText: string, current: string) => {
                        return altText === current ? 'text-primary hover:underline' : 'hover:text-primary hover:underline';
                    }} />
                <SidebarLink link='/dashboard/staffs'
                    altText='staffs'
                    icon={<FaUsersGear size={24} />}
                    text='STAFF'
                    current={current}
                    onActiveLink={(altText: string, current: string) => {
                        return altText === current ? 'text-primary hover:underline' : 'hover:text-primary hover:underline';
                    }} />
                <SidebarLink link='/dashboard/orders'
                    altText='orders'
                    icon={<FaShoppingCart size={24} />}
                    text='ORDERS'
                    current={current}
                    onActiveLink={(altText: string, current: string) => {
                        return altText === current ? 'text-primary hover:underline' : 'hover:text-primary hover:underline';
                    }} />
                <SidebarLink link='/dashboard/notifications'
                    altText='notifications'
                    icon={<FaBell size={24} />}
                    text='NOTIFICATIONS'
                    current={current}
                    onActiveLink={(altText: string, current: string) => {
                        return altText === current ? 'text-primary hover:underline' : 'hover:text-primary hover:underline';
                    }} />
                <SidebarLink link='/dashboard/reports'
                    altText='reports'
                    icon={<TbReportSearch size={24} />}
                    text='REPORTS'
                    current={current}
                    onActiveLink={(altText: string, current: string) => {
                        return altText === current ? 'text-primary hover:underline' : 'hover:text-primary hover:underline';
                    }} />
                <SidebarLink link='/dashboard/favorites'
                    altText='favorites'
                    icon={<FaHeart size={24} />}
                    text='FAVORITES'
                    current={current}
                    onActiveLink={(altText: string, current: string) => {
                        return altText === current ? 'text-primary hover:underline' : 'hover:text-primary hover:underline';
                    }} />
                {/* <SidebarLink href="/dashboard/agency-information" label="AGENCY INFORMATION" icon={<FaUserTie size={25} color={`${url.includes(`agency-information`) ? `#8bb8f1` : `gray`}`} />} /> */}
                {/* <SidebarLink href="/dashboard/staffs" label="STAFF" icon={<FaUsersGear size={25} color={`${url.includes(`staff`) ? `#8bb8f1` : `gray`}`} />} />
                <SidebarLink href="/dashboard/orders" label="ORDERS" icon={<FaShoppingCart size={25} color={`${url.includes(`orders`) ? `#8bb8f1` : `gray`}`} />} /> */}
                {/* <SidebarLink href="/dashboard/customers" label="CUSTOMERS" icon={<FaUsers size={25} color={`${url.includes(`customers`) ? `#8bb8f1` : `gray`}`} />} /> */}
                {/* <SidebarLink href="/dashboard/notifications" label="NOTIFICATIONS" icon={<FaBell size={25} color={`${url.includes(`notifications`) ? `#8bb8f1` : `gray`}`} />} />
                <SidebarLink href="/dashboard/reports" label="REPORTS" icon={<TbReportSearch size={25} color={`${url.includes(`reports`) ? `#8bb8f1` : `gray`}`} />} /> */}
            </div>
        </div >)
}
import Link from 'next-intl/link';
import { NextLinkProps } from "@/types/props/nextlink-props";

export default function SidebarLink({
    link,
    icon,
    text,
    altText,
    current,
    onActiveLink,
}: NextLinkProps & {
    current: string;
    onActiveLink: (altText: string, current: string) => string;
}) {
    return (
        <Link href={link}
            className={`w-[256px] m-auto block ${onActiveLink(altText, current)}`}>
            <div className='space-x-2'>
                {icon && <span className='inline-block align-middle'>{icon}</span>}
                <span className='inline-block'>{text}</span>
            </div>
        </Link>
    )
}
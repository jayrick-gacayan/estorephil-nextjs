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
            className={`flex items-center gap-2 w-full ${onActiveLink(altText, current)}`}>
            {icon && <span className="flex-none">{icon}</span>}
            <span className="flex-1">{text}</span>
        </Link>
    )
}
'use client'

import { camelCase } from "change-case";
import Link from 'next-intl/link';
import { useTranslations } from "next-intl"
import { useSelectedLayoutSegment } from "next/navigation";
import { useMemo } from "react";

export default function Header() {
    const segment = useSelectedLayoutSegment();
    let page: string = useMemo(() => { return segment ?? '' }, [segment]);
    const translate = useTranslations();

    return (
        <div className="border-b border-tertiary-dark">
            <div className="max-w-screen-2xl m-auto py-8">
                <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                        <h1 className="text-[36px] leading-0">{translate(camelCase(page)).toUpperCase()}</h1>
                    </div>
                    {
                        (page === 'orders' || page === 'reports') &&
                        (
                            <div className="flex-none">
                                <Link href={`/dashboard/${page}`}
                                    className="transition-all delay-100 block text-primary text-[20px] p-2 rounded hover:bg-tertiary-dark hover:underline">
                                    BACK
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>

    )
}
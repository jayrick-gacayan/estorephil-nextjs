import { useTranslations } from "next-intl"

export default function CheckBox({ label
}: {
    label: string,
}) {
    
    return (
        <>
            <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                {label}
            </div>
        </>
    )
}
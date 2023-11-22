import { useTranslations } from "next-intl"

export default function CheckBox({
    label,
    onChange,
}: {
    label: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}) {

    return (
        <>
            <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" onChange={onChange} />
                {label}
            </div>
        </>
    )
}
export default function TextArea({
    label,
    placeholder,
}: {
    label: string,
    placeholder: string,
}) {
    return (
        <>
            <div className="w-full">
                <label>{label}</label>
                <div>
                    <textarea placeholder={placeholder} className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full`} />
                </div>
            </div>

        </>
    )
}
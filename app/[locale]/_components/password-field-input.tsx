export default function PasswordFieldInput({
    label,
    value,
    show,
    onChange,
    required,
    placeholder,
    errorText = '',
    className = ``,
}: {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
    label: string,
    show?: boolean,
    value?: any,
    placeholder?: any,
    errorText?: string,
    className?: string
}) {
    return (
        <>
            <div className={`block ${className != `` ? `${className}` : `w-[570px]`}`}>
                <div className="relative py-2">
                    <div className="flex justify-between">
                        <label className="">{label}</label>
                        <p className={`${errorText == '' ? `hidden` : ``} text-red-500`}>{errorText}</p>
                    </div>
                    <div className="py-2">
                        <input required={required} type={`${show ? `text ` : `password`}`} onChange={onChange} placeholder={placeholder} value={value} className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `} />
                    </div >
                </div >
            </div >
        </>
    )
}
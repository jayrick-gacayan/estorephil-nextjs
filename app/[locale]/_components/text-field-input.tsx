export default function TextFieldInput({
    type,
    label,
    value,
    show,
    onChange,
    required,
    placeholder,
    errorText = '',
    errorTextClassName,
    className = ``,
}: {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
    label: string,
    type: 'number' | 'text',
    show?: boolean,
    value?: any,
    placeholder?: any,
    errorText?: string,
    className?: string
    errorTextClassName?: string
}) {
    return (
        <>
            <div className={`block ${className != `` ? `${className}` : `w-[570px]`}`}>
                <div className="relative py-2">
                    <div className="flex justify-between relative">
                        {!!label && <label className="text-zinc-500 text-base font-medium">{label}</label>}
                        <p className={`${errorTextClassName ?? ``} ${errorText == '' ? `hidden` : ``} text-red-500`}>{errorText}</p>
                    </div>
                    <div className="">
                        <input required={required} onChange={onChange} placeholder={placeholder} value={value} className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `} />
                    </div >
                </div >
            </div >
        </>
    )
}
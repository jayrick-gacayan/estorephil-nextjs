export default function TextFieldInput({
    type,
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
    type: 'number' | 'text',
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
                    <label className="">{label}</label>
                    <div className="py-2">
                        <input required={required} onChange={onChange} placeholder={placeholder} value={value} className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `} />
                    </div >
                </div >
                <div>
                    <p className={errorText == '' ? `hidden` : ``}>{errorText}</p>
                </div>

            </div >
        </>
    )
}
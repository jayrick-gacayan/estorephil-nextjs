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
    disabled,
}: {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
    label?: string,
    type: 'number' | 'text',
    show?: boolean,
    value?: any,
    placeholder?: any,
    errorText?: string,
    className?: string
    errorTextClassName?: string
    disabled?: boolean,
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
                        <input
                            required={required}
                            disabled={disabled ?? false}
                            onChange={onChange}
                            placeholder={placeholder}
                            value={value}
                            className={`py-[4px] text-slate-400 px-[8px] border-[1.5px] disabled:bg-[#f5f7fa] border-gray-200 rounded-sm outline-blue-500 w-full `}
                        />
                    </div >
                </div >
            </div >
        </>
    )
}
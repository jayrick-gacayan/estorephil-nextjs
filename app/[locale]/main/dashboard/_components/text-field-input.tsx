import { kMaxLength } from "buffer"

export default function TextFieldInput({
    type,
    label,
    value,
    defaultValue,
    show,
    onChange,
    required,
    placeholder,
    errorText = '',
    className = ``,
    maxLength,
}: {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
    maxLength?: number,
    label: string,
    type: 'number' | 'text',
    show?: boolean,
    value?: any,
    defaultValue?: string,
    placeholder?: any,
    errorText?: string,
    className?: string
}) {
    return (
        <>
            <div className={`block my-0 ${className != `` ? `${className}` : `w-[570px]`}`}>
                <div className="relative">
                    <div className="flex justify-between">
                        <label className="">{label}</label>
                        <p className={`${errorText == '' ? `hidden` : ``} text-red-500`}>{errorText}</p>
                    </div>
                    <div className="py-[4px]">
                        <input
                            required={required}
                            type={type}
                            maxLength={maxLength ?? 255}
                            defaultValue={defaultValue}
                            onChange={onChange}
                            placeholder={placeholder}
                            value={value}
                            className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `} />
                    </div >
                </div >
            </div >
        </>
    )
}
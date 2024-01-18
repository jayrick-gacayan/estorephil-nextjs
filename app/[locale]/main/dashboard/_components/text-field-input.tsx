import { ReactNode } from "react"

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
    label?: string | ReactNode,
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
                    <label>
                        {label && <span className="block">{label}</span>}
                        <input type={type}
                            maxLength={maxLength ?? 255}
                            onChange={onChange}
                            placeholder={placeholder}
                            value={value}
                            className={`py-[4px] px-1 border-[1.5px] block border-gray-200 rounded outline-blue-500 w-full `} />
                    </label>
                    {errorText !== '' && <p className='text-danger'>{errorText}</p>}
                </div >
            </div >
        </>
    )
}
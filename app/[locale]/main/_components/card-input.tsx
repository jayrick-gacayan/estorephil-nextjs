export default function CardInput({
    type,
    label,
    value,
    show,
    onChange,
    required,
    placeholder,
    errorText = '',
    className = ``,
    name
}: {
    name?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
    label: string,
    type: 'number' | 'month' | 'tel' | 'text',
    show?: boolean,
    value?: any,
    placeholder?: any,
    errorText?: string,
    className?: string
}) {
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (type === 'tel' && !/[0-9]/.test(e.key)) {
            e.preventDefault()
        }
    }
    return (
        <>
            <div className="flex justify-between items-center">
                <label>{label}</label>
                <p className={`${errorText == '' ? `hidden` : ``} text-red-500`}>{errorText}</p>
            </div>

            <div>
                <input name={name} type={type} maxLength={name === 'ccv' ? 3 : 16} onKeyPress={handleKeyPress} defaultValue={value} className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `} onChange={onChange} />
            </div>
        </>
    )
}
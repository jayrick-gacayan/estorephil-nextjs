import { Countries, Country } from "@/types/props/countries"

export default function CountrySelect(
    {
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
        onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
        required?: boolean,
        label: string,
        type: 'number' | 'text',
        show?: boolean,
        value?: any,
        placeholder?: any,
        errorText?: string,
        className?: string
    }
) {
    const countries = Countries
    return (
        <>
            <div className={`block ${className != `` ? `${className}` : `w-[570px]`}`}>
                <div className="relative py-2">
                    <div className="flex items-center justify-between">
                        <label className="">{label}</label>
                        <p className={`text-red-500 ${errorText == '' ? `hidden` : ``}`} >{errorText}</p>
                    </div>
                    <div className="py-2">
                        <select required={required} placeholder={placeholder} value={value} className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `} onChange={onChange}>
                            <option disabled selected={value == ''} className="text-gray-400" value=""> {placeholder} </option>
                            {
                                countries.map((country, index) =>
                                    <option key={index} selected={value == country.name} value={country.name}>{country.name}</option>
                                )
                            }
                        </select>
                    </div >
                </div >
            </div >
        </>
    )
}
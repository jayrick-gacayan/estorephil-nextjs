
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
export default function DateFilter({
    placeholder,
    value,
    onClick,
    onChange,

}: {
    onClick?: () => void,
    onChange: (date: DateValueType, e?: HTMLInputElement | null | undefined) => void,
    placeholder?: string,
    value: any
}) {

    return (<>
        <Datepicker
            separator="-"
            displayFormat="MM-DD-YYYY"
            placeholder='Select date range'
            value={value}
            onChange={onChange}
            primaryColor={"blue"}
            containerClassName={" bg-white outline-blue-500"}
            inputClassName={"outline-none border-0"}
            toggleClassName={'align-middle px-2 text-blue-500 float-left'}

        />
    </>)
}
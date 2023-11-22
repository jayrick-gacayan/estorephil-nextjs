import { IoIosSearch } from "react-icons/io";
export default function SearchBar({
    placeholder,
    value,
    onClick,
    onChange,

}: {
    onClick?: () => void,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    value: string
}) {
    return (<>
        <div className="flex w-full items-center gap-2 border-[1.5px] border-gray-200  justify-center bg-white outline-blue-500">
            <IoIosSearch className="m-2 items-center" color={"gray"} />
            <input
                type="text"
                placeholder={placeholder}
                className={`py-[4px] px-[2px] rounded-sm outline-none w-full`}
            />
        </div>

    </>)
}
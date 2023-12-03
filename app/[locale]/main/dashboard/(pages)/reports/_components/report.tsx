import { FaDownload, FaPen } from "react-icons/fa6"
import { MdBlock } from "react-icons/md";
export default function Report({
    dateRange,
    ordersMade,
    successfulOrders,
    total,
    commission,
    status,
    onChange,
    isSelected,
}: {
    dateRange: string,
    ordersMade: number,
    successfulOrders: number,
    total: number,
    commission: number,
    status: 'pending' | 'paid'
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    isSelected?: boolean,
}) {
    return (
        <>
            <tr className="border-b-[1.5px] border-gray-300 h-full my-4">
                <td className="border-b-[1.5px]">
                    <div className="flex items-center gap-2">
                        <div>
                            <input type="checkbox" className="accent-primary outline-primary" onChange={onChange} checked={isSelected} />
                        </div>
                        <div>
                            {dateRange}
                        </div>
                    </div>

                </td>
                <td className="border-b-[1.5px]">{ordersMade}</td>
                <td className="border-b-[1.5px]">{successfulOrders}</td>
                <td className="border-b-[1.5px]">{total}</td>
                <td className="border-b-[1.5px]">{commission}</td>

                <td className="border-b-[1.5px]">
                    <div className={`flex w-[75px] py-2 rounded-full text-xs my-2 justify-center text-white ${status === 'paid' ? `bg-green-500`: `bg-red-500`}`}>
                        {status}
                    </div>
                </td>
                <td className="border-b-[1.5px]">
                    <div className="flex items-center gap-2">
                        <button className={`border-[1.5px] p-2 rounded-md border-primary`}>
                            <FaDownload color={'blue'} />
                        </button>
                        <button className={`border-[1.5px] p-2 rounded-md border-red-500`}>
                            <MdBlock color={'red'} />
                        </button>
                        {/* <button className={`border-[1.5px] p-2 rounded-md border-red-500`}>
                            <CiWarning color={'red'} />
                        </button> */}
                    </div>
                </td>
            </tr>
        </>
    )
}
import { FaPen } from "react-icons/fa6"
import { MdBlock } from "react-icons/md";
import { CiWarning } from "react-icons/ci";
export default function Order({
    id,
    orderNumber,
    dateOrdered,
    dateDelivered,
    agent,
    numberOfItems,
    referralFee,
    totalPaid,
    status,
}: {
    id?: string,
    orderNumber: number | string,
    dateOrdered: string
    dateDelivered: string
    agent: string,
    numberOfItems: number,
    referralFee: number,
    totalPaid: number,
    status: string,
}) {
    return (
        <>
            <tr className="border-b-[1.5px] border-gray-300 h-full my-4">
                <td className="border-b-[1.5px]">{orderNumber}</td>
                <td className="border-b-[1.5px]">{dateOrdered}</td>
                <td className="border-b-[1.5px]">{dateDelivered}</td>
                <td className="border-b-[1.5px]">{agent}</td>
                <td className="border-b-[1.5px]">{numberOfItems}</td>
                <td className="border-b-[1.5px]">{referralFee}</td>
                <td className="border-b-[1.5px]">{totalPaid}</td>
                <td className="border-b-[1.5px]">
                    <div className="flex w-[75px] py-2 rounded-full text-xs my-2 justify-center text-white bg-green-500">
                        {status}
                    </div>
                </td>
                <td className="border-b-[1.5px]">
                    <div className="flex items-center gap-2">
                        <button className={`border-[1.5px] p-2 rounded-md border-primary`}>
                            <FaPen color={'blue'} />
                        </button>
                        <button className={`border-[1.5px] p-2 rounded-md border-red-500`}>
                            <MdBlock color={'red'} />
                        </button>
                        <button className={`border-[1.5px] p-2 rounded-md border-red-500`}>
                            <CiWarning color={'red'} />
                        </button>
                    </div>
                </td>
            </tr>
        </>
    )
}
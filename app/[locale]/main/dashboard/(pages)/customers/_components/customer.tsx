import { FaPen } from "react-icons/fa6"
import { MdBlock } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import Image from "next/image";
export default function Customer({
    customerImageUrl,
    name,
    email,
    contactNum,
    pending,
    completed,
    index,
}: {
    id?: string,
    customerImageUrl: string
    name: string,
    email: string,
    contactNum: string,
    pending: number,
    completed: number,
    index: number,
}) {
    return (
        <>
            <tr className="border-b-[1.5px] border-gray-300 h-full my-4" key={index}>
                <td className="border-b-[1.5px]"><Image alt="" src={customerImageUrl} height={40} width={40} className="rounded-full" /></td>
                <td className="border-b-[1.5px]">{name}</td>
                <td className="border-b-[1.5px]">{email}</td>
                <td className="border-b-[1.5px]">{contactNum}</td>
                <td className="border-b-[1.5px]">{pending}</td>
                <td className="border-b-[1.5px]">{completed}</td>
                <td className="border-b-[1.5px]">
                    <div className="flex items-center gap-2">
                        <button className={`border-[1.5px] p-2 rounded-md border-primary`}>
                            <FaPen color={'blue'} />
                        </button>
                        {/* <button className={`border-[1.5px] p-2 rounded-md border-red-500`}>
                            <MdBlock color={'red'} />
                        </button> */}
                        <button className={`border-[1.5px] p-2 rounded-md border-red-500`}>
                            <FaRegTrashAlt color={'red'} />
                        </button>
                    </div>
                </td>
            </tr>
        </>
    )
}
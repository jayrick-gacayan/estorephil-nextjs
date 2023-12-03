import { FaPen } from "react-icons/fa6"
import { MdBlock } from "react-icons/md";
import { CiWarning } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";
export default function Staff({
    id,
    photo,
    name,
    email,
    role,
}: {
    id?: string,
    photo: string,
    name: string,
    email: string,
    role: string
}) {
    return (
        <>
            <tr className="border-b-[1.5px]  border-gray-300 h-full my-4">
                <td className="border-b-[1.5px] align-middle"><Image alt="" height={40} width={40} className="rounded-full border-[1.5px] border-primary" src={photo} /></td>
                <td className="border-b-[1.5px]">{name}</td>
                <td className="border-b-[1.5px]">{email}</td>
                <td className="border-b-[1.5px]">{role}</td>
                <td className="border-b-[1.5px]">
                    <div className="flex items-center gap-2">
                        <button className={`border-[1.5px] p-2 rounded-md border-primary`}>
                            <FaPen color={'blue'} />
                        </button>
                        <button className={`border-[1.5px] p-2 rounded-md border-red-500`}>
                            <FaTrash color={'red'} />
                        </button>
                        {/* <button className={`border-[1.5px] p-2 rounded-md border-red-500`}>
                            <CiWarning color={'red'} />
                        </button> */}
                    </div>
                </td>
            </tr >
        </>
    )
}
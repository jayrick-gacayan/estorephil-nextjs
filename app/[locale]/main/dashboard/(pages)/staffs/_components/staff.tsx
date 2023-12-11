import { FaPen } from "react-icons/fa6"
import { MdBlock } from "react-icons/md";
import { CiWarning } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";
import { titleize } from "@/types/helpers/string-helper";

export default function Staff({
    staff
}: {
    staff: any
}) {
    const fullName = `${staff.first_name} ${staff.last_name}`
    return (
        <>
            <tr className="border-b-[1.5px]  border-gray-300 h-full my-4">
                <td className="border-b-[1.5px] align-middle"><Image alt="" height={40} width={40} className="rounded-full border-[1.5px] border-primary" src={staff.main_image_url ?? `https://estorephilbucketv1.s3.us-west-2.amazonaws.com/assets/images/profile_image_default.jpg`} /></td>
                <td className="border-b-[1.5px]">{fullName}</td>
                <td className="border-b-[1.5px]">{staff.email}</td>
                <td className="border-b-[1.5px]">{titleize(staff.role)}</td>
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
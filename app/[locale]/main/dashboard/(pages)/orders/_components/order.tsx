import { FaPen } from "react-icons/fa6"
import { MdBlock } from "react-icons/md";
import { CiWarning } from "react-icons/ci";
export default function Order({
    order
}: {
    order: any
}) {
    const createdAt = new Date(order.created_at).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });
    const deliveredDate = new Date(order.delivered_date).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });
    const customerName = `${order.billing_first_name} ${order.billing_last_name}`
    return (
        <>
            <tr className="border-b-[1.5px] border-gray-300 h-full my-4">
                <td className="border-b-[1.5px]">{order.id}</td>
                <td className="border-b-[1.5px]">{createdAt}</td>
                <td className="border-b-[1.5px]">{deliveredDate}</td>
                <td className="border-b-[1.5px]">{customerName}</td>
                <td className="border-b-[1.5px]">{order.total_quantity}</td>
                <td className="border-b-[1.5px]">{order.agent_referral ?? 0}</td>
                <td className="border-b-[1.5px]">{order.total_prod_price}</td>
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
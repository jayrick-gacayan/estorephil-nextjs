export default function Report({
    orderNumber,
    dateOrdered,
    dateDelivered,
    staff,
    numberOfItems,
    total,
    commission,
    onChange,
}: {
    orderNumber: string,
    dateOrdered: string,
    dateDelivered: string,
    staff: string,
    numberOfItems: number,
    total: number,
    commission: number,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,

}) {
    return (
        <>
            <tr className="border-b-[1.5px] border-gray-300 h-full my-4">
                <td className="border-b-[1.5px]">
                    {orderNumber}
                </td>
                <td className="border-b-[1.5px]">{dateOrdered}</td>
                <td className="border-b-[1.5px]">{dateDelivered}</td>
                <td className="border-b-[1.5px]">{staff}</td>
                <td className="border-b-[1.5px]">{numberOfItems}</td>
                <td className="border-b-[1.5px]">
                    <div className="flex items-center justify-start">
                        <p className="text-gray-400">C$</p> <h1 className="text-slate-800">{total}</h1>
                    </div>
                </td>
                <td className="border-b-[1.5px]">
                    <div className="flex items-center justify-start">
                        <p className="text-gray-400">C$</p> <h1 className="text-green-500">{commission}</h1>
                    </div>
                </td>

            </tr>
        </>
    )
}
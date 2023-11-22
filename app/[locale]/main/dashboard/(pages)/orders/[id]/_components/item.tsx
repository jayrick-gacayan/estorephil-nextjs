import Image from "next/image";

export default function Item({
    photo,
    description,
    quantity,
    totalPaid,
}: {
    photo: string,
    description: string,
    quantity: number,
    totalPaid: number,
}) {
    return (
        <>
            <tr className="border-b-[1.5px] border-gray-300">
                <td className="border-b-[1.5px] w-[10%]"><Image alt='' src={photo} height={100} width={100} /></td>
                <td className="border-b-[1.5px] text-[20px] font-normal w-[50%] pb-4">{description}</td>
                <td className="border-b-[1.5px] text-[25px] font-bold w-[20%] text-center">x {quantity}</td>
                <td className="border-b-[1.5px] w-[20%]">
                    <div className="flex items-center justify-center gap-4 ">
                        <span className="text-gray-300 text-[20px]">C$</span>
                        <p className="text-[25px] font-bold">{totalPaid}</p>
                    </div>

                </td>
            </tr>
        </>
    )
}
import { ReactNode } from "react";
import { FaBoxOpen, FaTruckFast } from "react-icons/fa6";
import { MdBlock } from "react-icons/md";
import { RiShipFill } from "react-icons/ri";

export default function Notification({
    orderNumber,
    status,
    dateModified,
    description,
    index,
}: {
    orderNumber: string,
    status: string,
    dateModified: string,
    description: string,
    index: number
}) {
    const icon: ReactNode = (() => {
        switch (status) {
            case 'shipped':
                return (
                    <div className="flex items-center justify-center rounded-full bg-blue-100 p-4 m-4">
                        <RiShipFill size={27} color={"blue"} />
                    </div>
                )
            case 'prepared':
                return (
                    <div className="flex items-center justify-center rounded-full bg-orange-100 p-4 m-4">
                        <FaBoxOpen size={27} color={"orange"} />
                    </div>
                )
            case 'canceled':
                return (
                    <div className="flex items-center justify-center rounded-full bg-red-100 p-4 m-4">
                        <MdBlock size={27} color={"red"} />
                    </div>
                )
            case 'delivered':
                return (
                    <div className="flex items-center justify-center rounded-full bg-slate-100 m-4 p-4">
                        <FaTruckFast size={27} color={"green"} />
                    </div>
                )
            default:
                // Default icon or no icon for unknown status
                return null;
        }
    })();
    return (
        <>
            <div className="bg-white p-4 flex items-center w-full my-4">
                <div>
                    {icon}
                </div>
                <div>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                            <h1 className="text-[18px] font-semibold text-slate-800">
                                ORDER {orderNumber}
                            </h1>
                            <p className="px-2 text-[16px] font-semibold text-slate-800">{
                                status === 'shipped' ? ' has been shipped' :
                                    status === 'prepared' ? '   is being prepared' :
                                        status == 'delivered' ? '   is being delievered' :
                                            '  has been canceled'
                            }</p>

                        </div>
                        <div>
                            <p className="text-gray-400 text-[16px] font-medium">{dateModified}</p>
                        </div>
                    </div>
                    <div >
                        <p className="text-justify">
                            {description}
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}
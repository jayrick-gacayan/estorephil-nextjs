import { LuPlaneTakeoff } from "react-icons/lu";
import { FaShip } from "react-icons/fa6";
export default function ShippingMethodOption({
    shippingType,
    eta,
    boxQuantity,
    weight,
    selected,
}: {
    selected: boolean,
    shippingType: string,
    eta: string
    weight: number,
    boxQuantity: number,
}
) {
    return (
        <>
            <div className={` ${selected && `border-2 border-blue-500`} p-4 flex justify-between items-center w-[575px]`}>
                <div className="flex items-center gap-2">
                    <div >{shippingType == 'air' || 'Air' ? <LuPlaneTakeoff size={35} /> : <FaShip size={35} />} </div>
                    <div className="">
                        <div className="font-[600]">{shippingType} Cargo</div>
                        <div>{eta}</div>
                    </div>
                </div>
                <div>
                    <div className="font-[600]">{boxQuantity} Boxes</div>
                    <div>{weight}kg</div>
                </div>
            </div>
        </>
    )
}
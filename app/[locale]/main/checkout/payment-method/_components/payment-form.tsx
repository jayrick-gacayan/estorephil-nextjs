import { useTranslations } from "next-intl";
import TextFieldInput from "../../../_components/text-field-input";
import { FaCcVisa } from "react-icons/fa";

export default function PaymentForm() {
    const translate = useTranslations()
    return (
        <>
            <div className="w-full">
                <div className="text-medium text-[#041D60] font-semibold">{translate('paymentMethod')}</div>
                <div className="flex gap-2">
                    <div> <FaCcVisa color={"gray"} size={30} /></div>
                    <div> <FaCcVisa color={"gray"} size={30} /></div>
                    <div> <FaCcVisa color={"gray"} size={30} /></div>
                    <div> <FaCcVisa color={"gray"} size={30} /></div>
                    <div> <FaCcVisa color={"gray"} size={30} /></div>
                    <div> <FaCcVisa color={"gray"} size={30} /></div>
                </div>
                <div>
                    <TextFieldInput label={translate('cardHolderName')} type="text" placeholder={translate('johnDoe')} className="w-full" />
                </div>
                <div className="flex items-center w-full gap-4">
                    <div className="basis-1/2">
                        <label>Card Number</label>
                        <div>
                            <input maxLength={16} type="tel" className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `} />
                        </div>
                    </div>
                    <div className="grow">
                        <label>Date</label>
                        <div>
                            <input type="month" className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `} />
                        </div>
                    </div>
                    <div className="grow">
                        <label>CCV</label>
                        <div>
                            <input maxLength={3} type="ccv" className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
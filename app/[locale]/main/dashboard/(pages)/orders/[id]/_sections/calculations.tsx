'use client'
import { useTranslations } from "next-intl"

export default function Calculations() {
    const translate = useTranslations()
    return (
        <>
            <div className="flex border-[1px] bg-white border-[#77620038] justify-end pr-[96px] py-[24px]">
                <div className="basis-1/4">
                    <div className="border-b-[1.5px] border-[#77620038]">
                        <div className="flex items-center justify-between">
                            <div className="text-[#77620038] text-[16px]">{translate("subTotal^")}</div>
                            <div className="text-[16px]">C$ 99.25</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-[#77620038] text-[16px]">{translate("shipping&Handling^")}</div>
                            <div className="text-[16px]">C$ 25.00</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-[#77620038] text-[16px]">{translate("serviceDeliveryTax^")}</div>
                            <div className="text-[16px]">0</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-[#77620038] text-[16px]">{translate("vat^")}</div>
                            <div className="text-[16px]">0</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div className="text-[#77620038] text-[16px]">{translate("total^")}</div>
                        <div className="flex items-center">
                            <div className="text-[16px] text-gray-400">C$</div>
                            <div className="text-[16px]"> 124.25</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
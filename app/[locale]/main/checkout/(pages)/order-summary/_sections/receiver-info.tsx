'use client'
import { RootState } from "@/redux/store"
import { useTranslations } from "next-intl"
import { useSelector } from "react-redux"

export default function ReceiverInfo() {
    const translate = useTranslations()
    const receiver = useSelector((state: RootState) => state.receiver)
    const fullAddress = `${receiver.address1.value ?? `address 1`}, ${receiver.city.value ?? `city`} , ${receiver.province.value ?? `province`}, ${receiver.country.value ?? 'country'}`

    return (
        <>
            <div className="border-[2px] border-gray-400 rounded-md h-[190px] p-4 w-full">
                <div><h1 className="text-[18px] text-[#041D60] font-[600]">{translate("receiverInfo")}</h1></div>
                <div>
                    <div className="text-blue-500 font-[600] pt-2">{`${receiver.firstName.value ?? `John`} ${receiver.lastName.value ?? `Doe`}`}</div>
                    <div>{`${receiver.mobileNumber.value ?? `no contact details provided`}`}</div>
                    <div>{`${receiver.emailAddress.value ?? `johndoe@gmail.com`}`}</div>
                    <div>{fullAddress}</div>
                </div>
            </div>
        </>
    )
}
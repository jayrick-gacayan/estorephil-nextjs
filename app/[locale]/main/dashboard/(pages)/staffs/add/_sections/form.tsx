'use client'
import TextFieldInput from "@/app/[locale]/main/_components/text-field-input"
import { useTranslations } from "next-intl"
import { useRouter } from "next-intl/client"
import { IoMdArrowRoundBack } from "react-icons/io"
import RolesSelect from "../_components/role-select"
import { FaCamera } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { emailChanged, firstNameChanged, lastNameChanged } from "../_redux/staff-add-slice"

export default function Form() {
    const router = useRouter()
    const translate = useTranslations()
    const state = useSelector((state: RootState) => state.staffAdd)
    const dispatch = useDispatch()
    return (
        <>
            <div className="h-full">
                <div className="flex items-center gap-4">
                    <IoMdArrowRoundBack color='gray' size={25} />
                    <button className="text-gray-500 text-[18px]" onClick={() => {
                        router.push('/dashboard/staffs')
                    }}>
                        {translate("allStaffs")}
                    </button>
                </div>
                <div className="w-[50%] m-auto">
                    <div className="rounded-full mx-auto my-4 border-[1.5px] bg-gray-200 border-primary h-[101px] w-[101px] flex items-center justify-center">
                        <button className="flex flex-col items-center justify-center">
                            <FaCamera size={25} color={'gray'} />
                            <p className="text-gray-400 font-semibold">Upload</p>
                        </button>
                    </div>
                    <TextFieldInput label={translate('firstName')} type="text" placeholder={translate('staffFirstName')} value={state.firstName.value ?? ''} onChange={(e) => { dispatch(firstNameChanged(e.target.value)) }} errorText={state.firstName.error} className="w-full" />
                    <TextFieldInput label={translate('lastName')} type="text" placeholder={translate('staffLastName')} value={state.lastName.value ?? ''} onChange={(e) => { dispatch(lastNameChanged(e.target.value)) }} errorText={state.lastName.error} className="w-full" />
                    <TextFieldInput label={translate('emailAddress')} value={state.email.value ?? ''} type="text" placeholder={translate('staffEmail')} onChange={(e) => { dispatch(emailChanged(e.target.value)) }} errorText={state.email.error} className="w-full" />
                    <RolesSelect label={"Role"} type={"text"} placeholder={'Role'} className="w-full" />
                    <button className="w-full py-2 my-2 text-center bg-primary text-white rounded-sm">{translate("createStaff")}</button>
                </div>
            </div>
        </>
    )
}
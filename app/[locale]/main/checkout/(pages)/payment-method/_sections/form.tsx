'use client'

import { useTranslations } from "next-intl";

import { useDispatch, useSelector } from "react-redux";
import { billingInformationCheckboxClicked } from "../_redux/payment-method-slice";
import { RootState } from "@/redux/store";
import CheckBox from "@/app/[locale]/main/_components/checkbox";
import TextFieldInput from "@/app/[locale]/main/_components/text-field-input";
import PaymentForm from "../_components/payment-form";

export default function Form() {
    const translate = useTranslations()
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.paymentMethod)
    const senderState = useSelector((state: RootState) => state.sender)

    return (
        <>
            <div className="mt-4">
                <div className="flex w-full">
                    <PaymentForm />
                </div>
            </div>
            <div className="my-8">
                <div className="text-[20px] text-[#041D60] font-[600]">{translate('billingInformation')}</div>
                <div>
                    <div><CheckBox label={translate('sameAsCustomerInfo')} onChange={(e) => { dispatch(billingInformationCheckboxClicked({ isChecked: e.target.checked, senderState: senderState })) }} /></div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput value={state.firstName.value} label={translate('firstName')} type="text" placeholder={translate('yourFirstName')} />
                        <TextFieldInput value={state.lastName.value} label={translate('lastName')} type="text" placeholder={translate('yourLastName')} />
                    </div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput value={state.billingAddress.value} label={translate('billingAddress')} type="text" placeholder={translate('Your billing address..')} className="w-full" />
                    </div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput value={state.contactNumber.value} label={translate('contact#')} type="text" placeholder={translate('contact#')} />
                        <TextFieldInput value={state.emailAddress.value} label={translate('emailAddress')} type="text" placeholder={translate('emailAddress')} />
                    </div>
                    <div><CheckBox label={translate('addAsSenderInformation')} /></div>
                </div>
            </div>
        </>
    )
}
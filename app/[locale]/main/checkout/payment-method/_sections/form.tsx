'use client'

import { useTranslations } from "next-intl";
import TextFieldInput from "../../../_components/text-field-input";
import { FaCcVisa } from "react-icons/fa";
import PaymentForm from "../_components/payment-form";
import CheckBox from "../../../_components/checkbox";

export default function Form() {
    const translate = useTranslations()

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
                    <div><CheckBox label={translate('sameAsCustomerInfo')} /></div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput label={translate('firstName')} type="text" placeholder={translate('yourFirstName')} />
                        <TextFieldInput label={translate('lastName')} type="text" placeholder={translate('yourLastName')} />
                    </div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput label={translate('billingAddress')} type="text" placeholder={translate('Your billing address..')} className="w-full" />
                    </div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput label={translate('contact#')} type="text" placeholder={translate('contact#')} />
                        <TextFieldInput label={translate('emailAddress')} type="text" placeholder={translate('emailAddress')} />
                    </div>
                    <div><CheckBox label={translate('addAsSenderInformation')} /></div>
                </div>
            </div>
        </>
    )
}
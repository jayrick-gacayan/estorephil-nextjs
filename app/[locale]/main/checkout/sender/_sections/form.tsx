'use client'

import { useTranslations } from "next-intl";
import TextFieldInput from "../../../_components/text-field-input";

export default function Form() {
    const translate = useTranslations()

    return (
        <>
            <div>
                <div className="text-medium font-semibold">{translate('customerInfo')}</div>
                <div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput label={translate('firstName')} type="text" placeholder={translate('yourFirstName')} />
                        <TextFieldInput label={translate('lastName')} type="text" placeholder={translate('yourLastName')} />
                    </div>
                    <div></div>
                </div>
            </div>
            <div>
                <div className="text-medium font-semibold"> {translate('address')}</div>
                <div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput label={translate('address1')} type="text" placeholder={translate('primaryAddress')} />
                        <TextFieldInput label={translate('address2')} type="text" placeholder={translate('secondaryAddress')} />
                    </div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput label={translate('city')} type="text" placeholder={translate('city')} />
                        <TextFieldInput label={translate('province')} type="text" placeholder={translate('province')} />
                    </div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput label={translate('zipCode')} type="text" placeholder={translate('zipCode')} />
                        <TextFieldInput label={translate('country')} type="text" placeholder={translate('country')} />
                    </div>
                </div>
            </div>
            <div>
                <div className="text-medium font-semibold"> {translate('contactInfo')}</div>
                <div className="flex gap-2 justify-between">
                    <TextFieldInput label={translate('phoneNo')} type="text" placeholder={translate('yourPhoneNumber')} />
                    <TextFieldInput label={translate('mobileNo')} type="text" placeholder={translate('yourMobileNumber')} />
                </div>
                <div className="flex gap-2 justify-between">
                    <TextFieldInput label={translate('emailAddress')} type="text" placeholder={translate('yourEmailAddress')} />
                </div>
            </div>
        </>
    )
}
'use client'

import { useTranslations } from "next-intl";

import { useDispatch, useSelector } from "react-redux";
import { address1Changed, address2Changed, cityChanged, countryChanged, emailChanged, firstNameChanged, lastNameChanged, mobileNumberChanged, phoneNumberChanged, provinceChanged, zipCodeChanged } from "../_redux/sender-slice";
import { RootState } from "@/redux/store";
import CountrySelect from "@/app/[locale]/main/_components/country-select";
import TextFieldInput from "@/app/[locale]/main/_components/text-field-input";

export default function Form() {
    const translate = useTranslations()
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.sender)
    return (
        <>
            <div>
                <div className="text-medium font-semibold">{translate('customerInfo')}</div>
                <div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput label={translate('firstName')} type="text" placeholder={translate('yourFirstName')} value={state.firstName.value ?? ''} onChange={(e) => { dispatch(firstNameChanged(e.target.value)) }} errorText={state.firstName.error} />
                        <TextFieldInput label={translate('lastName')} type="text" placeholder={translate('yourLastName')} value={state.lastName.value ?? ''} onChange={(e) => { dispatch(lastNameChanged(e.target.value)) }} errorText={state.lastName.error} />
                    </div>
                    <div></div>
                </div>
            </div>
            <div>
                <div className="text-medium font-semibold"> {translate('address')}</div>
                <div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput label={translate('address1')} value={state.address1.value ?? ''} onChange={(e) => { dispatch(address1Changed(e.target.value)) }} type="text" placeholder={translate('primaryAddress')} errorText={state.address1.error} />
                        <TextFieldInput label={translate('address2')} value={state.address2.value ?? ''} onChange={(e) => { dispatch(address2Changed(e.target.value)) }} type="text" placeholder={translate('secondaryAddress')} />
                    </div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput label={translate('city')} value={state.city.value ?? ''} onChange={(e) => { dispatch(cityChanged(e.target.value)) }} type="text" placeholder={translate('city')} errorText={state.city.error} />
                        <TextFieldInput label={translate('province')} value={state.province.value ?? ''} onChange={(e) => { dispatch(provinceChanged(e.target.value)) }} type="text" placeholder={translate('province')} />
                    </div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput label={translate('zipCode')} value={state.zipCode.value ?? ''} onChange={(e) => { dispatch(zipCodeChanged(e.target.value)) }} type="text" placeholder={translate('zipCode')} errorText={state.zipCode.error} />
                        <CountrySelect label={translate('country')} value={state.country.value ?? ''} onChange={(e) => { dispatch(countryChanged(e.target.value)) }} type="text" placeholder={translate('selectCountry')} errorText={state.country.error} />
                    </div>
                </div>
            </div>
            <div>
                <div className="text-medium font-semibold"> {translate('contactInfo')}</div>
                <div className="flex gap-2 justify-between">
                    <TextFieldInput label={translate('phoneNo')} value={state.phoneNumber.value ?? ''} onChange={(e) => { dispatch(phoneNumberChanged(e.target.value)) }} type="text" placeholder={translate('yourPhoneNumber')} />
                    <TextFieldInput label={translate('mobileNo')} value={state.mobileNumber.value ?? ''} onChange={(e) => { dispatch(mobileNumberChanged(e.target.value)) }} type="text" placeholder={translate('yourMobileNumber')} />
                </div>
                <div className="flex gap-2 justify-between">
                    <TextFieldInput label={translate('emailAddress')} value={state.emailAddress.value ?? ''} type="text" placeholder={translate('yourEmailAddress')} onChange={(e) => { dispatch(emailChanged(e.target.value)) }} errorText={state.emailAddress.error} />
                </div>
            </div>
        </>
    )
}
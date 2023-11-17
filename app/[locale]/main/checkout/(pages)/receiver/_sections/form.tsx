'use client'

import { useTranslations } from "next-intl";

import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { address1Changed, address2Changed, checkBoxReceiverAddressClicked, checkBoxReceiverContactClicked, checkBoxReceiverInfoClicked, cityChanged, countryChanged, emailChanged, firstNameChanged, lastNameChanged, mobileNumberChanged, phoneNumberChanged, provinceChanged, zipCodeChanged } from "../_redux/receiver-slice";
import CheckBox from "@/app/[locale]/main/_components/checkbox";
import CountrySelect from "@/app/[locale]/main/_components/country-select";
import TextArea from "@/app/[locale]/main/_components/text-area";
import TextFieldInput from "@/app/[locale]/main/_components/text-field-input";
import CourierOption from "../../../_components/courier-option";
import ShippingMethodOption from "../../../_components/shipping-method-option";

export default function Form() {
    const translate = useTranslations()
    const state = useSelector((state: RootState) => state.receiver)
    const senderState = useSelector((state: RootState) => state.sender)
    const dispatch = useDispatch()
    //sample
    const couriers = [
        {
            courierImageUrl: 'https://scontent.fceb2-1.fna.fbcdn.net/v/t1.6435-9/186564316_283225073454661_3848347978895062992_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=PsjZKwSP4MIAX-xHTI3&_nc_ht=scontent.fceb2-1.fna&oh=00_AfBJ2iZVy7YVITrrJS_eTjZK-S-TesjpFjj4Qmr4bQUCcQ&oe=657BA7C9',
            courierName: 'LBC',
            courierDeliveryPrice: 100,
            currency: "C$",
            selected: true,
        },
        {
            courierImageUrl: 'https://www.ninjavan.co/cover.png',
            courierName: 'Ninja Van',
            courierDeliveryPrice: 69,
            currency: "C$",
            selected: false,
        },
    ]
    const shippingMethods = [
        {
            shippingType: 'Air',
            eta: 'ETA 2023/12/25',
            boxQuantity: 4,
            weight: 78,
            selected: true,
        }
    ]
    return (
        <>
            <div>
                <div className="my-4">
                    <h1 className="text-[35px] text-[#041D60] font-[600]">{translate("selectCourier")}</h1>
                    <div className="flex gap-2">
                        {couriers.map((courier, index) =>
                            <CourierOption courierName={courier.courierName} courierDeliveryPrice={courier.courierDeliveryPrice} currency={courier.currency} courierImageUrl={courier.courierImageUrl} selected={courier.selected} key={index} />
                        )}
                    </div>
                </div>
                <div className="my-4">
                    <h1 className="text-[35px] text-[#041D60] font-[600]">{translate("selectShippingMethod")}</h1>
                    <div className="flex gap-2">
                        {shippingMethods.map((shippingMethod, index) =>
                            <ShippingMethodOption selected={shippingMethod.selected} shippingType={shippingMethod.shippingType} boxQuantity={shippingMethod.boxQuantity} eta={shippingMethod.eta} weight={shippingMethod.weight} key={index} />
                        )}
                    </div>
                </div>
            </div>
            <div>
                <div className="text-[35px] text-[#041D60] font-[600]">{translate('receiverInfo')}</div>
                <div>
                    <div>
                        <CheckBox
                            label={translate('sameAsCustomerInfo')}
                            onChange={(e) => {
                                dispatch(checkBoxReceiverInfoClicked({ isChecked: e.target.checked, senderState: senderState }))
                            }} />
                    </div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput label={translate('firstName')} type="text" placeholder={translate('yourFirstName')} value={state.firstName.value ?? ''} onChange={(e) => { dispatch(firstNameChanged(e.target.value)) }} errorText={state.firstName.error} />
                        <TextFieldInput label={translate('lastName')} type="text" placeholder={translate('yourLastName')} value={state.lastName.value ?? ''} onChange={(e) => { dispatch(lastNameChanged(e.target.value)) }} errorText={state.lastName.error} />
                    </div>

                </div>
            </div>
            <div>
                <div className="text-medium font-semibold"> {translate('address')}</div>
                <div>
                    <div><CheckBox
                        label={translate('sameAsCustomerAddressInfo')}
                        onChange={(e) => {
                            dispatch(checkBoxReceiverAddressClicked({ isChecked: e.target.checked, senderState: senderState }))
                        }} /></div>
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
                <div><CheckBox
                    label={translate('sameAsCustomerContactInfo')}
                    onChange={(e) => {
                        dispatch(checkBoxReceiverContactClicked({ isChecked: e.target.checked, senderState: senderState }))
                    }} /></div>
                <div className="flex gap-2 justify-between">
                    <TextFieldInput label={translate('phoneNo')} value={state.phoneNumber.value ?? ''} onChange={(e) => { dispatch(phoneNumberChanged(e.target.value)) }} type="text" placeholder={translate('yourPhoneNumber')} />
                    <TextFieldInput label={translate('mobileNo')} value={state.mobileNumber.value ?? ''} onChange={(e) => { dispatch(mobileNumberChanged(e.target.value)) }} type="text" placeholder={translate('yourMobileNumber')} />
                </div>
                <div className="flex gap-2 justify-between">
                    <TextFieldInput label={translate('emailAddress')} value={state.emailAddress.value ?? ''} type="text" placeholder={translate('yourEmailAddress')} onChange={(e) => { dispatch(emailChanged(e.target.value)) }} errorText={state.emailAddress.error} />
                </div>
                <div className="flex gap-2 justify-between">
                    <TextArea label={translate('deliveryNotes')} placeholder={translate('specialInstructions')} />
                </div>
            </div>
        </>
    )
}
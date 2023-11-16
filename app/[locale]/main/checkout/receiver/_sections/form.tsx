'use client'

import { useTranslations } from "next-intl";
import TextFieldInput from "../../../_components/text-field-input";
import CheckBox from "../../../_components/checkbox";
import CourierOption from "../../_components/courier-option";
import ShippingMethodOption from "../../_components/shipping-method-option";
import TextArea from "../../../_components/text-area";

export default function Form() {
    const translate = useTranslations()
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
                    <div><CheckBox label={translate('sameAsCustomerInfo')} /></div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput label={translate('firstName')} type="text" placeholder={translate('yourFirstName')} />
                        <TextFieldInput label={translate('lastName')} type="text" placeholder={translate('yourLastName')} />
                    </div>

                </div>
            </div>
            <div>
                <div className="text-medium font-semibold"> {translate('address')}</div>
                <div>
                    <div><CheckBox label={translate('sameAsAddressInfo')} /></div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput label={translate('firstName')} type="text" placeholder={translate('firstName')} />
                        <TextFieldInput label={translate('lastName')} type="text" placeholder={translate('lastName')} />
                    </div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput label={translate('address1')} type="text" placeholder={translate('primaryAddress')} />
                        <TextFieldInput label={translate('address2')} type="text" placeholder={translate('secondaryAddress')} />
                    </div>
                    <div className="flex gap-2 justify-between">
                        <TextFieldInput label={translate('city')} type="text" placeholder={translate('city')} />
                        <TextFieldInput label={translate('province')} type="text" placeholder={translate('province')} />
                    </div>
                </div>
            </div>
            <div>
                <div className="text-medium font-semibold"> {translate('contactInfo')}</div>
                <div><CheckBox label={translate('sameAsContactInfo')} /></div>
                <div className="flex gap-2 justify-between">
                    <TextFieldInput label={translate('phoneNo')} type="text" placeholder={translate('yourPhoneNumber')} />
                    <TextFieldInput label={translate('mobileNo')} type="text" placeholder={translate('yourMobileNumber')} />
                </div>
                <div className="flex gap-2 justify-between">
                    <TextFieldInput label={translate('emailAddress')} type="text" placeholder={translate('yourEmailAddress')} />
                </div>
                <div className="flex gap-2 justify-between">
                    <TextArea label={translate('deliveryNotes')} placeholder={translate('specialInstructions')} />
                </div>
            </div>
        </>
    )
}
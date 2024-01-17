"use client"
import { useTranslations } from "next-intl";

import { FaCcDiscover, FaCcJcb, FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";

import { SiAmericanexpress } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { cardExpiryDateChanged, cardHolderNameChanged, cardNumberChanged, cvvChanged, selectPaymentMethod } from "../_redux/payment-method-slice";
import CardInput from "@/app/[locale]/main/_components/card-input";
import TextFieldInput from "@/app/[locale]/main/_components/text-field-input";

export default function PaymentForm() {
    const translate = useTranslations()
    const state = useSelector((state: RootState) => state.paymentMethod)
    const dispatch = useDispatch()
    console.log('card value', state.card)
    return (
        <>
            <div className="w-full">
                <div className="text-medium text-[#041D60] font-semibold">{translate('paymentMethod')}</div>
                <div className="flex gap-2">
                    <div onClick={() => { dispatch(selectPaymentMethod('visa')) }}>
                        <FaCcVisa color={`${state.card.type.value == 'visa' ? `#1186FF` : `gray`}`} size={40} />
                    </div>
                    <div onClick={() => { dispatch(selectPaymentMethod('mastercard')) }}>
                        <FaCcMastercard color={`${state.card.type.value == 'mastercard' ? `#1186FF` : `gray`}`} size={40} />
                    </div>
                    <div onClick={() => { dispatch(selectPaymentMethod('jcb')) }}>
                        <FaCcJcb color={`${state.card.type.value == 'jcb' ? `#1186FF` : `gray`}`} size={40} />
                    </div>
                    <div onClick={() => { dispatch(selectPaymentMethod('discover')) }}>
                        <FaCcDiscover color={`${state.card.type.value == 'discover' ? `#1186FF` : `gray`}`} size={40} /></div>
                    <div onClick={() => { dispatch(selectPaymentMethod('paypal')) }}>
                        <FaCcPaypal color={`${state.card.type.value == 'paypal' ? `#1186FF` : `gray`}`} size={40} /></div>
                    <div onClick={() => { dispatch(selectPaymentMethod('americanExpress')) }}>
                        <SiAmericanexpress color={`${state.card.type.value == 'americanExpress' ? `#1186FF` : `gray`}`} size={40} />
                    </div>
                </div>
                <div>
                    <TextFieldInput label={translate('cardHolderName')} errorText={state.card.name.error} onChange={(e) => dispatch(cardHolderNameChanged(e.target.value))} type="text" placeholder={translate('johnDoe')} className="w-full" />
                </div>
                <div className="flex items-center w-full gap-4">
                    <div className="basis-1/2">
                        <CardInput type="tel" label="Card Number" onChange={(e) => dispatch(cardNumberChanged(e.target.value))} value={state.card.number.value} errorText={state.card.number.error} />
                    </div>
                    <div className="grow basis-1/3">
                        <CardInput type="month" label="Date" value={state.card.expiryDate.value} onChange={(e) => dispatch(cardExpiryDateChanged(e.target.value))} errorText={state.card.expiryDate.error} />
                    </div>
                    <div className="grow">
                        <CardInput name="cvv" type="tel" value={state.card.cvv.value} label="CCV" onChange={(e) => dispatch(cvvChanged(e.target.value))} errorText={state.card.cvv.error} />
                    </div>
                </div>
            </div>
        </>
    )
}
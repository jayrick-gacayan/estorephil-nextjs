import { avaiableCountries } from "@/types/props/countries";
import { ReactNode } from "react";
import Image from 'next/image';
import { useDispatch } from "react-redux";
import { closeCountryPicker, countryPickerValueChanged, openCountryPicker } from "../_redux/main-slice";
import { useTranslations } from "next-intl";
import { getMainCategories } from "../home/_redux/home-thunk";
import { store } from "@/redux/store";
import { homeContainer } from "@/inversify/inversify.config";
import { TYPES } from "@/inversify/types";
import { HomeRepository } from "@/repositories/home-repository";
export default function CountryPicker({
    value,
    show,
    onChange,
    required,
    placeholder,
    errorText = '',
    className = ``,
    icon,
}: {
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    icon?: ReactNode,
    required?: boolean,
    show?: boolean,
    value?: string,
    placeholder?: any,
    errorText?: string,
    className?: string
}) {
    const countries = avaiableCountries
    const dispatch = useDispatch()
    const translate = useTranslations()
    const homeRepository = homeContainer.get<HomeRepository>(TYPES.HomeRepository)
    return (
        <>
            <div className="flex relative bg-transparent w-full h-full px-2" onClick={() => {
                show ? dispatch(closeCountryPicker()) : dispatch(openCountryPicker())
            }}>
                <div className="flex items-center gap-2 text-white">{icon} {value}</div>
                <div className={`${show ? `block` : `hidden`} absolute top-6 -right-12 shadow-md w-[100px] bg-white h-full`}>
                    <ul className="decoration-none bg-white border-[1px] border-slate-800">
                        <li className="text-gray-400"> {translate("sellersFrom:")}</li>
                        {countries.map((country, index) =>
                            <li key={index} onClick={(e) => {
                                e.preventDefault()
                                console.log('value', value)
                                dispatch(countryPickerValueChanged(country.code))
                                store.dispatch(getMainCategories(homeRepository, country.code))
                            }} className="w-full flex items-center hover:cursor-pointer border-t-[1px] border-slate-800 text-slate-800"> {country.icon} {country.code}</li>
                        )}
                    </ul>
                </div>
            </div>

        </>
    )
}
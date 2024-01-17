import { COUNTRIES } from "@/types/helpers/country-helper";
import { ChangeEvent, ComponentProps, ReactNode, useEffect, useState } from "react";
import Image from 'next/image';

export default function PhoneNumberInput({
  onPhoneChanged,
  labelText,
  divClassName,
  inputProps,
  defaultCountry,
  errorText
}: {
  divClassName: string;
  labelText?: ReactNode;
  inputProps?: ComponentProps<'input'>;
  defaultCountry?: string;
  errorText: string;
  onPhoneChanged: (phone: string) => void;
}) {
  const [countryCode, setCountryCode] = useState<string>(defaultCountry ?? '');

  useEffect(() => {
    if (countryCode === '') {
      setCountryCode('US')
    }
  }, [countryCode]);

  return (
    <div className="block space-y-1">
      {labelText && labelText}
      <div className={divClassName}>
        <div className="flex-none w-24">
          <div className="relative p-2">
            <label htmlFor={`${inputProps?.id}-input-country-code`}
              className="w-20 absolute bottom-2 z-20 ">
              <div className="w-fit m-auto block">
                <div className="space-x-1">
                  <Image alt={`current-${countryCode}`}
                    src={`/flags-svg/${countryCode.toLowerCase()}.svg`}
                    width={24}
                    height={24}
                    className="w-6 h-6 inline" />
                  <span className="w-fit h-6 inline-block align-middle">
                    {
                      COUNTRIES.find((value: any) => {
                        return value.code === countryCode
                      })?.dialCode ?? ''
                    }
                  </span>
                </div>
              </div>
            </label>
            <input id={`${inputProps?.id}-input-country-code`}
              className="bg-transparent outline-0 outline-transparent peer/phone w-0 h-0" />
            <div className="absolute peer-focus/phone:block overflow-auto hidden h-56 top-[110%] shadow-lg z-50 left-0 w-72 border border-tertiary-dark bg-white">
              {
                COUNTRIES.map((value: any, index: number) => {
                  return (
                    <div key={`${inputProps?.id}-country-list`}
                      className={`p-1.5 hover:bg-primary hover:text-white cursor-pointer space-x-2
                        ${countryCode === value.code ? 'bg-primary text-white' : ''}`}
                      onMouseDown={() => {
                        setCountryCode(value.code);
                      }}>
                      <Image alt={`${inputProps?.id}-${value.code}`}
                        src={`/flags-svg/${value.code.toLowerCase()}.svg`}
                        width={24}
                        height={24}
                        className="w-6 h-6 inline" />
                      <span className="inline align-middle">{value.name} {value.dialCode}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="flex-1">
          <input {...inputProps}
            className={`w-full outline-0 outline-transparent ${inputProps ? inputProps.className ?? '' : ''}`}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              onPhoneChanged(`${countryCode}${event.target.value}`)
            }} />
        </div>
      </div>
      {(errorText !== '') && (<div className="text-danger">{errorText}</div>)}
    </div>
  )
}
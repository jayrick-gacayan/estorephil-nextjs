'use client';

import { ChangeEvent, useEffect, useMemo, useRef } from 'react';
import { AgentAgencyInformationState } from '../_redux/agent-agency-information-state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { cityChanged, citySelectionShown, firstNameChanged, lastNameChanged, provinceChanged, provinceSelectionShown } from '../_redux/agent-agency-information-slice';
import InputGoogleLikeCustom from '@/app/[locale]/_components/input-google-like-custom';
import { ValidationType } from '@/types/enums/validation-type';
import SelectCustom from '@/app/[locale]/_components/select-custom';

export default function AgentEditBasicInfoForm({
  cityProvince
}: {
  cityProvince: { province: string; cities: string[] }[]
}) {
  let provinces = cityProvince.map((value: { province: string; cities: string[] }) => {
    return value.province;
  });



  const provinceSelectRef = useRef<HTMLDivElement>(null);
  const citySelectRef = useRef<HTMLDivElement>(null);

  const dispatch: AppDispatch = useAppDispatch();
  const agentAgencyInfoState: AgentAgencyInformationState = useAppSelector((state: RootState) => { return state.agentAgencyInfo });

  let {
    firstName,
    lastName,
    province,
    city
  } = useMemo(() => { return agentAgencyInfoState }, [agentAgencyInfoState]);

  let cities = useMemo(() => {
    return province.value === '' ? [] :
      cityProvince.find((value: {
        province: string;
        cities: string[];
      }) => {
        return value.province === province.value
      })?.cities ?? []
  }, [province.value]);


  function googleLikeInputLabelClassName(status: ValidationType) {
    return `transition-all absolute peer-focus:text-sm cursor-text peer-placeholder-shown:top-2 peer-focus:-top-3 peer-placeholder-shown:text-base left-0 -top-3 text-sm bg-inherit mx-2 px-1 
          ${status !== ValidationType.NONE && status !== ValidationType.VALID ? `text-danger peer-focus:text-danger` :
        status === ValidationType.VALID ? 'peer-focus:text-success text-success' :
          'peer-focus:text-primary peer-placeholder-shown:text-tertiary-dark text-tertiary-dark'}`
  }

  function googleLikeInputClassName(status: ValidationType) {
    return `border-[.5px] rounded w-full p-2 disabled:bg-tertiary-dark
    ${status !== ValidationType.NONE && status !== ValidationType.VALID ? 'text-danger focus:border-danger border-danger' :
        status === ValidationType.VALID ? 'focus:border-success border-success text-success' :
          'focus:border-primary border-tertiary-dark'}`
  }

  function selectCustomValueClassName(errorText: string) {
    return `flex rounded overflow-hidden items-center justify-center hover:cursor-pointer p-2 border has-[input:focus]:border-primary
      ${errorText !== '' ? 'border-danger' : 'border-tertiary-dark'}`;
  }

  function selectCustomOptionsClassName(current: string, value: string) {
    return `p-2 cursor-pointer 
      ${current === value && current !== '' ? `bg-primary text-white` : `bg-inherit hover:bg-primary hover:text-white`}`;
  }

  return (
    <>
      <div className="border-b border-secondary-light py-2">
        <h3 className='text-[32px] leading-0 text-center'>Edit Basic Information</h3>
      </div>
      <div className="space-y-4 text-left">
        <InputGoogleLikeCustom labelText='Firstname'
          inputProps={{
            id: 'agent-update-firstName',
            type: 'text',
            value: firstName.value,
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              dispatch(firstNameChanged(event.target.value))
            },
            className: googleLikeInputClassName(firstName.status)
          }}
          errorText={firstName.errorText}
          status={firstName.status}
          labelClassName={googleLikeInputLabelClassName} />
        <InputGoogleLikeCustom labelText='Lastname'
          inputProps={{
            id: 'agent-register-lastname',
            type: 'text',
            value: lastName.value,
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              dispatch(lastNameChanged(event.target.value));
            },
            className: googleLikeInputClassName(lastName.status)
          }}
          errorText={lastName.errorText}
          status={lastName.status}
          labelClassName={googleLikeInputLabelClassName} />
        <div className='flex gap-2 w-full'>
          <SelectCustom ref={provinceSelectRef}
            labelText='Province'
            items={['Province: ', ...provinces]}
            value={province.value === "" ? "Province: " : province.value}
            placeholder='Province: '
            visible={province.show ?? false}
            setVisible={(visible: boolean) => {
              dispatch(visible ? provinceSelectionShown(true) : provinceSelectionShown())
            }}
            onSelect={(value: string) => {
              dispatch(provinceChanged(value === "Province: " ? "" : value));
              dispatch(cityChanged(''));
            }}
            valueClassName={selectCustomValueClassName}
            optionActiveClassName={selectCustomOptionsClassName}
            errorText={province.errorText} />
          {
            province.value !== '' &&
            (
              <SelectCustom ref={citySelectRef}
                labelText='City/Municipality'
                items={['City/Municipality: ', ...cities]}
                value={city.value === "" ? "City/Municipality: " : city.value}
                placeholder='City/Municipality: '
                visible={city.show ?? false}
                setVisible={(visible: boolean) => {
                  dispatch(visible ? citySelectionShown(true) : citySelectionShown())
                }}
                onSelect={(value: string) => {
                  dispatch(cityChanged(value === "City: " ? "" : value));
                }}
                valueClassName={selectCustomValueClassName}
                optionActiveClassName={selectCustomOptionsClassName}
                errorText={city.errorText} />
            )
          }
        </div>


      </div>
    </>
  )
}
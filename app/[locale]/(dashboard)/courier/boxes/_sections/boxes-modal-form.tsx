'use client';

import { ChangeEvent, useEffect, useMemo } from "react";
import { FaMinus, FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/app/_hooks/redux_hooks";
import { AppDispatch, RootState } from "@/redux/store";
import { CourierBoxesState } from "../_redux/courier-boxes-state";
import {
  boxFormRequestStatusSet,
  boxTypeChanged,
  cargoTypeChanged,
  heightDimensionChanged,
  lengthDimensionChanged,
  priceChanged,
  referralPercentageChanged,
  regionFeesAdded,
  regionFeesFeeUpdated,
  regionFeesRemoved,
  unitMeasureChanged,
  weightChanged,
  weightTypeChanged,
  widthDimensionChanged
} from "../_redux/courier-boxes-slice";
import { ValidationType } from "@/types/enums/validation-type";
import InputGoogleLikeCustom from "@/app/[locale]/_components/input-google-like-custom";
import InputCustom from "@/app/[locale]/_components/input-custom";
import { RequestStatus } from "@/types/enums/request-status";
import LineDotLoader from "@/app/[locale]/_components/line-dot-loader";
import { useSession } from "next-auth/react";
import { boxContainer } from "@/inversify/inversify.config";
import { BoxRepository } from "@/repositories/box-repository";
import { TYPES } from "@/inversify/types";
import { createBox, updateBox } from "../_redux/courier-boxes-thunk";
import { BoxTypes } from "@/types/enums/box-type";
import { PhRegion } from "@/models/ph-region";
import { TextInputField } from "@/types/props/text-input-field";
import SelectTagCustom from "@/app/[locale]/_components/select-tag-cutsom";

export default function BoxesModalForm({
  type,
  onClose,
  regions,
}: {
  type: string;
  onClose: () => void;
  regions: PhRegion[];
}) {
  const { data: sessionData } = useSession();
  const dispatch: AppDispatch = useAppDispatch();
  const courierBoxesState: CourierBoxesState = useAppSelector((state: RootState) => { return state.courierBoxes; });

  const {
    cargoType,
    boxType,
    length,
    width,
    height,
    unitMeasure,
    price,
    referralPercentage,
    weight,
    weightType,
    requestStatus,
    id,
    regionFees,
  } = useMemo(() => {
    return courierBoxesState.boxFormFields;
  }, [courierBoxesState.boxFormFields]);


  useEffect(() => {
    switch (requestStatus) {
      case RequestStatus.WAITING:
        setTimeout(() => {
          dispatch(boxFormRequestStatusSet(RequestStatus.IN_PROGRESS))
        }, 2000)
        break;
      case RequestStatus.IN_PROGRESS:
        setTimeout(() => {
          if (sessionData?.token) {
            let boxRepository = boxContainer.get<BoxRepository>(TYPES.BoxRepository);
            if (type === 'createBox') { dispatch(createBox(boxRepository, sessionData.token)); }
            else if (type === 'updateBox') {
              if (id) { dispatch(updateBox(boxRepository, sessionData.token, id.toString())); }
            }
            else { dispatch(boxFormRequestStatusSet(RequestStatus.SUCCESS)); }
          }
        }, 2000)
        break;
    }
  }, [requestStatus, dispatch, sessionData, type])

  function selectValueClassname(status: ValidationType) {
    return `${status !== ValidationType.NONE && status !== ValidationType.VALID ? 'border-danger has-[input:focus]:border-danger' :
      status === ValidationType.VALID ? 'border-success has-[input:focus]:border-success' : 'border-tertiary-dark has-[input:focus]:border-primary'}`;
  }

  function selectCustomOptionsClassName(current: string, value: string) {
    return `p-2 cursor-pointer ${current === value && current !== '' ? `bg-primary text-white` : `bg-inherit hover:bg-primary hover:text-white`}`;
  }

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

  function boxesFormFieldDivClassName(status: ValidationType) {
    return `border divide-x rounded overflow-hidden w-full flex items-center gap-2
        ${status !== ValidationType.NONE && status !== ValidationType.VALID ? 'text-danger divide-danger has-[input:focus]:border-danger border-danger' :
        status === ValidationType.VALID ? 'text-success border-success divide-success has-[input:focus]:border-success' :
          'border-tertiary-dark divide-tertiary-dark has-[input:focus]:border-primary'
      }`
  }

  return (
    <div className='py-8 space-y-8 w-[768px] m-auto'>
      <div className="border-b border-secondary-light">
        <h3 className='text-[32px] leading-0 text-center'>{type === 'createBox' ? 'Create Box' : 'Update Box'}</h3>
      </div>
      <div className="h-[448px] overflow-auto pr-4">
        <div className="space-y-4 relative z-0">
          <div className="flex items-center gap-4 text-left">
            <div className="flex-none w-56 font-semibold">Cargo Type</div>
            <div className="flex-1">
              <SelectTagCustom items={['Cargo Type:', 'Air', 'Vessel']}
                onSelect={(item: string) => {
                  dispatch(cargoTypeChanged(item === "Cargo Type:" ? "" : item === "Air" ? "0" : "1"));
                }}
                value={cargoType.value === "0" ? "Air" : cargoType.value === "1" ? "Vessel" : cargoType.value}
                placeholder='Cargo Type:'
                optionActiveClassName={selectCustomOptionsClassName}
                errorText={cargoType.errorText}
                status={cargoType.status}
                valueClassName={selectValueClassname} />
            </div>
          </div>
          <div className="flex items-center gap-4 text-left">
            <div className="flex-none w-56 font-semibold">Box Type</div>
            <div className="flex-1">
              <SelectTagCustom items={['Box Type: ', 'Small', 'Medium', 'Large', 'Extra-Large', 'Odd']}
                onSelect={(value: string) => {
                  dispatch(boxTypeChanged(
                    value === "Box Type: " ? "" :
                      Object.entries(BoxTypes).find((typeBoxes: [string, string]) => {
                        return value === typeBoxes[1]
                      })?.[0] ?? ""
                  ));
                }}
                value={Object.entries(BoxTypes).find((typeBoxes: [string, string]) => {
                  return boxType.value === typeBoxes[0]
                })?.[1] ?? ""}
                placeholder='Box Type:'
                optionActiveClassName={selectCustomOptionsClassName}
                errorText={boxType.errorText}
                status={boxType.status}
                valueClassName={selectValueClassname} />
            </div>
          </div>
          {/* <div className="flex items-center gap-4 text-left">
          <div className="flex-none w-56 font-semibold">Measurement System</div>
          <div className="flex-1">
            <CourierCustomSelectField inputId='select-measurement-system'
              items={['Metric', 'Imperial']}
              value={undefined}
              onSelectChange={function (value: unknown): void {
                return;
              }} />
          </div>
        </div> */}
          <div className="flex items-center gap-4 text-left">
            <div className="flex-none w-56 font-semibold">Dimension</div>
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <InputGoogleLikeCustom labelText='Length'
                  inputProps={{
                    id: 'boxes-dimension-length',
                    type: 'number',
                    min: 0,
                    value: length.value,
                    onChange: (event: ChangeEvent<HTMLInputElement>) => {
                      dispatch(lengthDimensionChanged(event.target.value));
                    },
                    className: googleLikeInputClassName(length.status)
                  }}
                  errorText={length.errorText}
                  status={length.status}
                  labelClassName={googleLikeInputLabelClassName} />
                <InputGoogleLikeCustom labelText='Width'
                  inputProps={{
                    id: 'boxes-dimension-width',
                    type: 'number',
                    value: width.value,
                    min: 0,
                    onChange: (event: ChangeEvent<HTMLInputElement>) => {
                      dispatch(widthDimensionChanged(event.target.value));
                    },
                    className: googleLikeInputClassName(width.status)
                  }}
                  errorText={width.errorText}
                  status={width.status}
                  labelClassName={googleLikeInputLabelClassName} />
                <InputGoogleLikeCustom labelText='Height'
                  inputProps={{
                    id: 'boxes-dimension-height',
                    type: 'number',
                    value: height.value,
                    min: 0,
                    onChange: (event: ChangeEvent<HTMLInputElement>) => {
                      dispatch(heightDimensionChanged(event.target.value));
                    },
                    className: googleLikeInputClassName(height.status)
                  }}
                  errorText={height.errorText}
                  status={height.status}
                  labelClassName={googleLikeInputLabelClassName} />
              </div>
            </div>
            <div className="flex-none w-20">
              <SelectTagCustom items={['Unit:', 'cm', 'm', 'in']}
                onSelect={(value: string) => {
                  dispatch(unitMeasureChanged(value === "Unit:" ? "" : value));
                }}
                value={unitMeasure.value}
                placeholder='Unit:'
                optionActiveClassName={selectCustomOptionsClassName}
                errorText={unitMeasure.errorText}
                status={unitMeasure.status}
                valueClassName={selectValueClassname} />
            </div>
          </div>
          <div className="flex items-center gap-4 text-left">
            <div className="flex-none w-56 font-semibold">Price</div>
            <div className="flex-1">
              <InputCustom
                divClassName={boxesFormFieldDivClassName(price.status)}
                inputProps={{
                  id: 'price-boxes-form',
                  type: 'number',
                  min: 0,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    dispatch(priceChanged(event.target.value));
                  },
                  value: price.value,
                  placeholder: 'Enter price',
                  className: 'p-2 disabled:bg-tertiary-dark',
                }}
                errorText={price.errorText} />
            </div>
          </div>
          <div className="flex items-center gap-4 text-left">
            <div className="flex-none w-56 font-semibold">Weight</div>
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <InputGoogleLikeCustom labelText='Weight'
                  inputProps={{
                    id: 'boxes-weight',
                    type: 'number',
                    min: 0,
                    value: weight.value,
                    onChange: (event: ChangeEvent<HTMLInputElement>) => {
                      dispatch(weightChanged(event.target.value));
                    },
                    className: googleLikeInputClassName(weight.status)
                  }}
                  errorText={weight.errorText}
                  status={weight.status}
                  labelClassName={googleLikeInputLabelClassName} />
              </div>
            </div>
            <div className="flex-none w-20">
              <SelectTagCustom items={['Unit:', 'gms', 'kgs', 'lbs']}
                onSelect={(value: string) => {
                  dispatch(weightTypeChanged(value === "Unit:" ? "" : value));
                }}
                value={weightType.value}
                placeholder='Unit:'
                optionActiveClassName={selectCustomOptionsClassName}
                errorText={weightType.errorText}
                status={weightType.status}
                valueClassName={selectValueClassname} />
            </div>
          </div>
          <div className="flex items-center gap-4 text-left">
            <div className="flex-none w-56 font-semibold">Referral &#37;</div>
            <div className="flex-1">
              <InputCustom
                divClassName={boxesFormFieldDivClassName(referralPercentage.status)}
                inputProps={{
                  id: 'referralPercentage-boxes-form',
                  type: 'number',
                  min: 0,
                  max: 100,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    dispatch(referralPercentageChanged(event.target.value));
                  },
                  value: referralPercentage.value,
                  placeholder: 'Enter referral percentage (should be 0.01 to 100)',
                  className: 'p-2 disabled:bg-tertiary-dark',
                }}
                errorText={price.errorText} />
            </div>
          </div>
          <div className="space-y-4 text-left">
            <div className="text-3xl">Region Rates</div>
            <div className="flex items-center w-full gap-4">
              <div className="flex-none w-56 font-semibold">
                Region
              </div>
              <div className="relative w-full">
                <label htmlFor="region-box-form"
                  className="peer p-2 rounded border-[.5px] border-tertiary-dark w-full block cursor-pointer has-[input:focus]:border-primary">
                  {
                    regionFees.length === 0 ? <>&nbsp;</> :
                      regionFees.map((regFee: {
                        region: PhRegion;
                        fee: TextInputField<string>;
                      }, index: number) => {
                        return (
                          <span key={`region-item-form-${index}-${regFee.region.code}`}
                            className="p-2 rounded bg-tertiary-dark text-default-dark inline-block m-1">
                            {`${regFee.region.otherName} ${regFee.region.name}`}
                          </span>
                        );
                      })
                  }
                  <input type="text" id="region-box-form" className="cursor-pointer outline-0 inline-block" readOnly />
                </label>

                <div className="overflow-auto w-full z-10 bg-white transition-all delay-100 absolute peer-has-[:focus]:h-[240px] h-0 rounded  peer-has-[:focus]:border-[.5px] border-0 border-secondary top-[110%]">
                  {
                    regions.map((value: PhRegion) => {
                      let getRegion = regionFees.find((regFee: {
                        region: PhRegion;
                        fee: TextInputField<string>;
                      }) => {
                        return regFee.region.code === value.code
                      });

                      return (
                        <div key={value.name} className="p-2 hover:bg-tertiary-light hover:cursor-pointer"
                          onMouseDown={() => {
                            dispatch(getRegion ? regionFeesRemoved(value.code) : regionFeesAdded(value))
                          }}>
                          <div className="flex items-center gap-2">
                            <div className="flex-1">{`${value.otherName} (${value.name})`}</div>
                            <div className='flex-none w-auto'>
                              <div className={`${getRegion ? 'text-danger' : 'text-success'} cursor-pointer`}>
                                <FaMinus className={`${getRegion ? 'block' : 'hidden'}`} />
                                <FaPlus className={`${getRegion ? 'hidden' : 'block'}`} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>

            {
              regionFees.length > 0 &&
              (
                <div className={`block space-y-2 ${regions.length > 5 ? 'h-[240px] overflow-auto' : ''}`}>
                  {
                    regionFees.map((regFee: {
                      region: PhRegion;
                      fee: TextInputField<string>;
                    }) => {
                      return (
                        <div key={`region-selected-container-${regFee.region.code}`}
                          className="w-full">
                          <div className="flex items-center w-full gap-4">
                            <div className="flex-1">
                              <div className="bg-info-light rounded w-full p-2">
                                {`${regFee.region.otherName} ${regFee.region.name}`}
                              </div>
                            </div>
                            <div className="flex-none w-48">
                              <div className="flex w-full items-center gap-2">
                                <div className="flex-1">
                                  <InputCustom leftSideContent={<div className="font-semibold p-2">C&#36;</div>}
                                    divClassName={boxesFormFieldDivClassName(regFee.fee.status)}
                                    inputProps={{
                                      id: `regionFees-boxes-form-${regFee.region.code}`,
                                      type: 'number',
                                      min: 0,
                                      onChange: (event: ChangeEvent<HTMLInputElement>) => {
                                        dispatch(regionFeesFeeUpdated({ code: regFee.region.code, value: event.target.value }))
                                      },
                                      value: regFee.fee.value,
                                      placeholder: '',
                                      className: 'p-2 disabled:bg-tertiary-dark',
                                    }}
                                    errorText={regFee.fee.errorText} />
                                </div>
                                <div className="flex-none w-auto text-danger rounded border border-danger p-2 cursor-pointer"
                                  onClick={() => { dispatch(regionFeesRemoved(regFee.region.code)); }}>
                                  <FaRegTrashCan className='inline-block' />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              )
            }
          </div>
        </div>
      </div>

      <div className='block'>
        <div className='w-1/2 m-auto'>
          <div className='flex items-stretch gap-2 justify-center'>
            <button className='bg-info p-2 rounded text-white disabled:cursor-not-allowed'
              disabled={requestStatus === RequestStatus.IN_PROGRESS || requestStatus === RequestStatus.WAITING}
              onClick={() => {
                dispatch(boxFormRequestStatusSet(RequestStatus.WAITING))
              }}>
              {requestStatus === RequestStatus.IN_PROGRESS || requestStatus === RequestStatus.WAITING
                ? (<div className='w-fit m-auto block space-x-0.5'>
                  <span className='inline-block align-middle'>
                    <LineDotLoader height={24} width={48} color={'#fff'} />
                  </span>
                  <span className='inline-block'>Checking</span>
                </div>) : type === 'createBox' ? 'Create' : 'Update'
              }
            </button>
            <button className='border border-info p-2 rounded text-info disabled:cursor-not-allowed'
              disabled={requestStatus === RequestStatus.IN_PROGRESS || requestStatus === RequestStatus.WAITING}
              onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}
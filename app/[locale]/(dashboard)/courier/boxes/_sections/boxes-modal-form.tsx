'use client';

import { philippinesRegions } from "@/types/props/philippine-regions";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import LabelTextWithAmountTrash from "../../deliveries/_components/labeltext-with-amount-trash";
import SelectCustom from "@/app/[locale]/_components/select-custom";
import { useAppDispatch, useAppSelector } from "@/app/_hooks/redux_hooks";
import { AppDispatch, RootState } from "@/redux/store";
import { CourierBoxesState } from "../_redux/courier-boxes-state";
import {
  boxFormRequestStatusSet,
  boxTypeChanged,
  boxTypeSelectionShown,
  cargoTypeChanged,
  cargoTypeSelectionShown,
  heightDimensionChanged,
  lengthDimensionChanged,
  priceChanged,
  referralPercentageChanged,
  unitMeasureChanged,
  unitMeasureSelectionShown,
  weightChanged,
  weightTypeChanged,
  weightTypeSelectionShown,
  widthDimensionChanged
} from "../_redux/courier-boxes-slice";
import { ValidationType } from "@/types/enums/validation-type";
import InputGoogleLikeCustom from "@/app/[locale]/_components/input-google-like-custom";
import InputCustom from "@/app/[locale]/_components/input-custom";
import { useOutsideClick } from "@/app/_hooks/use-outside-click";
import { RequestStatus } from "@/types/enums/request-status";
import LineDotLoader from "@/app/[locale]/_components/line-dot-loader";
import { useSession } from "next-auth/react";
import { boxContainer } from "@/inversify/inversify.config";
import { BoxRepository } from "@/repositories/box-repository";
import { TYPES } from "@/inversify/types";
import { createBox, updateBox } from "../_redux/courier-boxes-thunk";
import { BoxTypes } from "@/types/enums/box-type";

export default function BoxesModalForm({
  type,
  onClose,
}: {
  type: string;
  onClose: () => void;
}) {
  const { data: sessionData } = useSession();
  const cargoTypeRef = useRef<HTMLDivElement>(null);
  const boxTypeRef = useRef<HTMLDivElement>(null);
  const unitMeasureRef = useRef<HTMLDivElement>(null);
  const weightTypeRef = useRef<HTMLDivElement>(null);

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
    id
  } = useMemo(() => {
    return courierBoxesState.boxFormFields;
  }, [courierBoxesState.boxFormFields]);


  const [regions, setRegions] = useState<any[]>([]);

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
            if (type === 'createBox') {
              dispatch(createBox(boxRepository, sessionData.token));
            }
            else if (type === 'updateBox') {
              if (id) {
                dispatch(updateBox(boxRepository, sessionData.token, id.toString()));
              }
            }
            else {
              dispatch(boxFormRequestStatusSet(RequestStatus.SUCCESS))
            }
          }
        }, 2000)
        break;
    }
  }, [requestStatus, dispatch, sessionData, type])

  // useOutsideClick(cargoTypeRef, () => {
  //   dispatch(cargoTypeSelectionShown())
  // });

  // useOutsideClick(boxTypeRef, () => {
  //   dispatch(boxTypeSelectionShown())
  // });
  // useOutsideClick(unitMeasureRef, () => {
  //   dispatch(unitMeasureSelectionShown())
  // });
  // useOutsideClick(weightTypeRef, () => {
  //   dispatch(weightTypeSelectionShown())
  // });

  function selectCustomValueClassName(errorText: string) {
    return `flex rounded overflow-hidden items-center justify-center hover:cursor-pointer p-2 border has-[input:focus]:border-primary
      ${errorText !== '' ? 'border-danger' : 'border-tertiary-dark'}`;
  }

  function selectCustomOptionsClassName(current: string, value: string) {
    return `p-2 cursor-pointer 
      ${current === value && current !== '' ? `bg-primary text-white` : `bg-inherit hover:bg-primary hover:text-white`}`;
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
      <div className="border-b border-secondary-light pb-2">
        <h3 className='text-[32px] leading-0 text-center'>{type === 'createBox' ? 'Create Box' : 'Update Box'}</h3>
      </div>
      <div className="space-y-6 relative z-0">
        <div className="flex items-center gap-4 text-left">
          <div className="flex-none w-56 font-semibold">Cargo Type</div>
          <div className="flex-1">
            <SelectCustom ref={cargoTypeRef}
              labelText=''
              items={['Cargo Type: ', 'Air', 'Vessel']}
              value={cargoType.value === "" ? "Cargo Type: " : cargoType.value === "0" ? "Air" : "Vessel"}
              placeholder='Cargo Type: '
              visible={cargoType.show ?? false}
              setVisible={(visible: boolean) => {
                dispatch(visible ? cargoTypeSelectionShown(true) : cargoTypeSelectionShown())
              }}
              onSelect={(value: string) => {
                dispatch(cargoTypeChanged(value === "Cargo Type: " ? "" : value === "Air" ? "0" : "1"));
              }}
              valueClassName={selectCustomValueClassName}
              optionActiveClassName={selectCustomOptionsClassName}
              errorText={cargoType.errorText} />
          </div>
        </div>
        <div className="flex items-center gap-4 text-left">
          <div className="flex-none w-56 font-semibold">Box Type</div>
          <div className="flex-1">
            <SelectCustom ref={boxTypeRef}
              labelText=''
              items={['Box Type: ', 'Small', 'Medium', 'Large', 'Extra-Large', 'Odd']}
              value={boxType.value === "" ? "Box Type: " :
                Object.entries(BoxTypes).find((typeBoxes: [string, string]) => {
                  return boxType.value === typeBoxes[0]
                })?.[1] ?? ""
              }
              placeholder='Box Type: '
              visible={boxType.show ?? false}
              setVisible={(visible: boolean) => {
                dispatch(visible ? boxTypeSelectionShown(true) : boxTypeSelectionShown())
              }}
              onSelect={(value: string) => {
                console.log('box value', value);
                dispatch(boxTypeChanged(
                  value === "Box Type: " ? "" :
                    Object.entries(BoxTypes).find((typeBoxes: [string, string]) => {
                      return value === typeBoxes[1]
                    })?.[0] ?? ""
                ));

              }}
              valueClassName={selectCustomValueClassName}
              optionActiveClassName={selectCustomOptionsClassName}
              errorText={boxType.errorText} />
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
            <SelectCustom ref={unitMeasureRef}
              labelText=''
              items={['Unit: ', 'cm', 'm', 'in']}
              value={unitMeasure.value === "" ? "Unit: " : unitMeasure.value}
              placeholder='Unit: '
              visible={unitMeasure.show ?? false}
              setVisible={(visible: boolean) => {
                dispatch(visible ? unitMeasureSelectionShown(true) : unitMeasureSelectionShown())
              }}
              onSelect={(value: string) => {
                dispatch(unitMeasureChanged(value === "Unit: " ? "" : value));
              }}
              valueClassName={selectCustomValueClassName}
              optionActiveClassName={selectCustomOptionsClassName}
              errorText={unitMeasure.errorText} />
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
            <SelectCustom ref={weightTypeRef}
              labelText=''
              items={['Unit: ', 'gms', 'kgs', 'lbs']}
              value={weightType.value === "" ? "Unit: " : weightType.value}
              placeholder='Unit: '
              visible={weightType.show ?? false}
              setVisible={(visible: boolean) => {
                dispatch(visible ? weightTypeSelectionShown(true) : weightTypeSelectionShown())
              }}
              onSelect={(value: string) => {
                dispatch(weightTypeChanged(value === "Unit: " ? "" : value));
              }}
              valueClassName={selectCustomValueClassName}
              optionActiveClassName={selectCustomOptionsClassName}
              errorText={weightType.errorText} />
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
              <input type="text" readOnly id='inputId' className="focus:border-primary w-full peer/region p-2 rounded border-[.5px] border-secondary" />
              <div className="overflow-auto w-full z-10 bg-white transition-all delay-100 absolute peer-focus/region:h-[240px] h-0 rounded peer-focus/region:border-[.5px] border-0 border-secondary top-[110%]">
                {
                  philippinesRegions.map((value: any) => {
                    let getRegion = regions.find((region: any) => { return region.regionCode === value.regionCode });

                    return (
                      <div key={value.name} className="p-2 hover:bg-tertiary-light hover:cursor-pointer">
                        <div className="flex items-center gap-2">
                          <div className="flex-1">{value.name}</div>
                          <div className='flex-none w-auto'>
                            <div className={`${getRegion ? 'text-danger' : 'text-success'} cursor-pointer`}
                              onClick={() => {
                                setRegions(getRegion === undefined ? [...regions, value] : regions.filter((filReg: any) => { return filReg.regionCode !== value.regionCode }))
                              }}>
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
            regions.length > 0 &&
            (
              <div className={`block space-y-2 ${regions.length > 5 ? 'h-[240px] overflow-auto' : ''}`}>
                {
                  regions.map((value: any) => {
                    return (
                      <div key={`region-selected-container-${value.name}`}
                        className="w-full">
                        <LabelTextWithAmountTrash labelText={value.name} />
                      </div>
                    )
                  })
                }

              </div>
            )
          }
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
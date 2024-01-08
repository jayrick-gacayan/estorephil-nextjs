'use client';

import { useAppDispatch, useAppSelector } from "@/app/_hooks/redux_hooks";
import { AppDispatch, RootState } from "@/redux/store";
import { FaRegPenToSquare, FaXmark } from "react-icons/fa6";
import { RxCircleBackslash } from "react-icons/rx";
import { courierBoxesPageNumberSet, courierBoxesRequestStatusSet, editFormFieldsFilled, modalBoxesOpened } from "../_redux/courier-boxes-slice";
import { useSession } from "next-auth/react";
import { useEffect, useMemo } from "react";
import { CourierBoxesState } from "../_redux/courier-boxes-state";
import { RequestStatus } from "@/types/enums/request-status";
import { getAllCourierBoxes } from "../_redux/courier-boxes-thunk";
import { boxContainer } from "@/inversify/inversify.config";
import { BoxRepository } from "@/repositories/box-repository";
import { TYPES } from "@/inversify/types";
import CirclingLoader from "@/app/[locale]/_components/circling-loader";
import { Box } from "@/models/box";
import { BoxTypes } from "@/types/enums/box-type";
import { CargoTypes } from "@/types/enums/cargo-type";
import { toFirstUpperCase } from "@/types/helpers/string-helper";
import PaginationCustom from "@/app/[locale]/_components/pagination-custom";
import { getPageIndexOptions } from "@/types/helpers/pagination-helper";

export default function BoxesTable() {
  const { data: sessionData } = useSession();
  const courierBoxesState: CourierBoxesState = useAppSelector((state: RootState) => {
    return state.courierBoxes;
  });
  const dispatch: AppDispatch = useAppDispatch();

  const { requestStatus, data, count, currentPage } = useMemo(() => {
    return courierBoxesState.courierBoxes
  }, [courierBoxesState.courierBoxes]);

  useEffect(() => {
    dispatch(courierBoxesRequestStatusSet(RequestStatus.NONE))
    setTimeout(() => {
      if (sessionData?.token) {
        let boxRepository = boxContainer.get<BoxRepository>(TYPES.BoxRepository);
        dispatch(getAllCourierBoxes(boxRepository, sessionData.token, currentPage));
      }
    }, 2000);
  }, [currentPage, sessionData, dispatch])

  return (
    <>
      <div className="block overflow-auto">
        <table className="min-w-[768px] w-full">
          <thead>
            <tr className="text-left [&>th]:font-normal [&>th]:px-2 [&>th]:py-3 border-y-[.5px] border-tertiary bg-[#F8FAFC]">
              <th>ID</th>
              <th>DIMENSION</th>
              <th>TYPE</th>
              <th>WEIGHT</th>
              <th>CARGO</th>
              <th>&#35; OF PRODUCTS</th>
              <th>PRICE</th>
              <th>TAX INCLUSIVE</th>
              <th>REFERRAL &#37;</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {
              requestStatus === RequestStatus.NONE ||
                requestStatus === RequestStatus.WAITING ||
                requestStatus === RequestStatus.IN_PROGRESS ||
                requestStatus === RequestStatus.FAILURE ?
                (<tr>
                  <td rowSpan={10} colSpan={10}>
                    <div className="flex h-full w-full items-center justify-center">
                      <div>
                        {
                          requestStatus === RequestStatus.FAILURE ? 'No Data' :
                            (<CirclingLoader height={240} width={240} color='#1186FF' />)
                        }
                      </div>
                    </div>
                  </td>
                </tr>) :
                data.map((box: Box) => {
                  return (
                    <tr key={`boxes-courier-${box.id!}`}
                      className="[&>td]:p-2 border-b-[.5px] border-b-tertiary-dark odd:bg-inherit even:bg-[#EFF0F0]">
                      <td className="text-primary">{box.id!}</td>
                      <td>&#40;{`${box.length!} \u00D7 ${box.width!} \u00D7 ${box.height!}`}&#41; {box.unitMeasure!}</td>
                      <td>{box.boxType!.toUpperCase()}</td>
                      <td>{`${box.weight!} ${box.weightType!}`}</td>
                      <td>{box.cargoType!.toUpperCase()}</td>
                      <td>{10.00}</td>
                      <td>{box.price?.toFixed(1) ?? <>&#8212;</>}</td>
                      <td>
                        {
                          !box.isTaxInclusive! ?
                            <FaXmark className='text-danger' /> : 10.0
                        }
                      </td>
                      <td>
                        {box.referralPercentage?.toFixed(1) ?? <>&#8212;</>}
                      </td>
                      <td>
                        <div className="space-x-2">
                          <div className='inline-block p-2 m-auto rounded border cursor-pointer border-primary w-fit text-primary'
                            onClick={() => {
                              dispatch(editFormFieldsFilled({
                                ...box,
                                cargoType: Object.entries(CargoTypes).find(
                                  (typeCargos: [string, string]) => {
                                    return toFirstUpperCase(box.cargoType ?? '') === typeCargos[0];
                                  }
                                )?.[1] ?? '',
                                boxType: Object.entries(BoxTypes).find((typeBoxes: [string, string]) => {
                                  return box.boxType === typeBoxes[1].toLowerCase()
                                })?.[0] ?? ""
                              }))
                              dispatch(modalBoxesOpened('updateBox'));
                            }}>
                            <FaRegPenToSquare />
                          </div>
                          <div className='inline-block p-2 m-auto rounded border cursor-pointer border-danger w-fit text-danger'
                            onClick={() => { }}>
                            <RxCircleBackslash />
                          </div>
                        </div>
                      </td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>
      </div>
      {
        Math.ceil(count / 10) > 1 &&
        (
          <PaginationCustom currentPage={currentPage}
            totalPageNumbers={getPageIndexOptions(count, 5, currentPage)}
            onPageChanged={(page: number) => {
              dispatch(courierBoxesPageNumberSet(page));
            }}
            onActivePageNumber={(page: number, currentPage: number) => {
              return `inline py-1.5 px-3 cursor-pointer ${currentPage === page ? 'bg-primary text-white' : 'text-tertiary-dark hover:text-default-dark'}`;
            }}
            parentPaginateClassName='ml-auto bg-white w-fit border-[.5px] border-tertiary-dark flex divide-x divide-tertiary-dark rounded overflow-hidden'
            onPageCondition={(condition: boolean) => { return `p-1.5 ${condition ? `hover:cursor-not-allowed` : `cursor-pointer`}`; }}
            totalPageCount={Math.ceil(count / 10)} />
        )
      }
    </>
  )
}
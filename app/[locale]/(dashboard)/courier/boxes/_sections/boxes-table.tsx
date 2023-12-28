'use client';

import { useAppDispatch } from "@/app/_hooks/redux_hooks";
import { AppDispatch } from "@/redux/store";
import { FaRegPenToSquare, FaXmark } from "react-icons/fa6";
import { RxCircleBackslash } from "react-icons/rx";
import { editFormFieldsFilled, modalBoxesOpened } from "../_redux/courier-boxes-slice";

const boxesInfos = [
  {
    id: 22,
    dimension: {
      length: 7,
      width: 7,
      height: 7,
      unit: 'cm'
    },
    type: 'small',
    weight: {
      input: 8,
      unit: 'gm'
    },
    cargo: 'air',
    noOfProducts: 5,
    price: 1.0,
    taxInclusive: 0.0,
    referral: 1.0,
  },
  {
    id: 23,
    dimension: {
      length: 8,
      width: 8,
      height: 8,
      unit: 'cm'
    },
    type: 'medium',
    weight: {
      input: 1,
      unit: 'kg'
    },
    cargo: 'vessel',
    noOfProducts: 5,
    price: 4.0,
    taxInclusive: 1.0,
    referral: 4.0,
  }
]
export default function BoxesTable() {
  const dispatch: AppDispatch = useAppDispatch();

  return (
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
            boxesInfos.map((value: any) => {
              return (
                <tr key={`orders-completed-${value.id}`}
                  className="[&>td]:p-2 border-b-[.5px] border-b-tertiary-dark odd:bg-inherit even:bg-[#EFF0F0]">
                  <td className="text-primary">{value.id}</td>
                  <td>&#40;{`${value.dimension.length} \u00D7 ${value.dimension.width} \u00D7 ${value.dimension.height}`}&#41; {value.dimension.unit}</td>
                  <td>{value.type.toUpperCase()}</td>
                  <td>{`${value.weight.input} ${value.weight.unit}${value.weight.input > 1 ? 's' : ''}`}</td>
                  <td>{value.cargo.toUpperCase()}</td>
                  <td>{value.noOfProducts}</td>
                  <td>{value.price.toFixed(1)}</td>
                  <td>
                    {
                      value.taxInclusive === 0 ?
                        <FaXmark className='text-danger' /> : value.taxInclusive.toFixed(1)
                    }
                  </td>
                  <td>
                    {value.referral.toFixed(1)}
                  </td>
                  <td>
                    <div className="space-x-2">
                      <div className='inline-block p-2 m-auto rounded border cursor-pointer border-primary w-fit text-primary'
                        onClick={() => {
                          dispatch(editFormFieldsFilled({
                            id: 66,
                            length: 550,
                            width: 550,
                            height: 550,
                            unitMeasure: "cm",
                            price: 550,
                            boxType: "l",
                            cargoType: "0",
                            weightType: "gms",
                            referralPercentage: 10,
                            weight: 100
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
  )
}
'use client';

import { Checkbox } from "@/app/[locale]/_components/checkbox";
import { FaRegEye } from "react-icons/fa";
import { RxCircleBackslash } from "react-icons/rx";

const toPickUpOrders = [
  {
    id: 123123412,
    datePickedUp: '3/10/2222',
    sellerName: 'S-MART (Toronto)',
    packaging: 'regular',
    packageMethod: 'air',
    packageWeight: '100kg',
    packageDimension: '46 cm \u00D7 41 cm \u00D7 46 cm',
    status: 'Pending',
  },
  {
    id: 124412323,
    datePickedUp: '3/10/2222',
    sellerName: 'Johns Online Store(Ottawa)',
    packaging: 'balikbayan (l)',
    packageMethod: 'vessel',
    packageWeight: '100kg',
    packageDimension: '46 cm \u00D7 46 cm \u00D7 61 cm',
    status: 'Pending',
  },
  {
    id: 12412546,
    datePickedUp: '3/10/2222',
    sellerName: 'Online Store (Vancouver)',
    packaging: 'balikbayan (m)',
    packageMethod: 'air',
    packageWeight: '67kg',
    packageDimension: '46 cm \u00D7 41 cm \u00D7 46 cm',
    status: 'Pending',
  },
  {

    id: 35132251,
    datePickedUp: '3/10/2222',
    sellerName: 'WATSONS-ALBERTA',
    packaging: 'regular',
    packageMethod: 'vessel',
    packageWeight: '50kg',
    packageDimension: '46 cm \u00D7 41 cm \u00D7 46 cm',
    status: 'Pending',
  },
  {
    id: 5235234,
    datePickedUp: '3/10/2222',
    sellerName: 'WATSONS-ALBERTA',
    packaging: 'balikbayan (s)',
    packageMethod: 'vessel',
    packageWeight: '78kg',
    packageDimension: '46 cm \u00D7 41 cm \u00D7 46 cm',
    status: 'Pending',
  },
  {
    id: 3535351,
    datePickedUp: '3/10/2222',
    sellerName: 'S-MART (Toronto)',
    packaging: 'alisbayan (s)',
    packageMethod: 'vessel',
    packageWeight: '45kg',
    packageDimension: '46 cm \u00D7 41 cm \u00D7 46 cm',
    status: 'Pending',
  },
  {
    id: 2823784,
    datePickedUp: '3/10/2222',
    sellerName: 'Johns Online Store(Ottawa)',
    packaging: 'regular',
    packageMethod: 'air',
    packageWeight: '55kg',
    packageDimension: '46 cm \u00D7 41 cm \u00D7 46 cm',
    status: 'Pending',
  },
  {
    id: 8357782,
    datePickedUp: '3/10/2222',
    sellerName: 'Johns Online Store(Ottawa)',
    packaging: 'balikbayan (s)',
    packageMethod: 'air',
    packageWeight: '44kg',
    packageDimension: '46 cm \u00D7 41 cm \u00D7 46 cm',
    status: 'Pending',
  },
  {

    id: 82374723,
    datePickedUp: '3/09/2222',
    sellerName: 'Gifts Online (Montreal)',
    packaging: 'balikbayan (s)',
    packageMethod: 'air',
    packageWeight: '40kg',
    packageDimension: '46 cm \u00D7 41 cm \u00D7 46 cm',
    status: 'Pending',
  },
  {
    id: 2764623,
    datePickedUp: '3/05/2222',
    sellerName: 'Gifts Online (Montreal)',
    packaging: 'balikbayan (l)',
    packageMethod: 'vessel',
    packageWeight: '120kg',
    packageDimension: '46 cm \u00D7 41 cm \u00D7 46 cm',
    status: 'Pending',
  },
]

export default function OrdersPickUpTable() {
  return (
    <div className="block overflow-auto">
      <table className="min-w-[768px] w-full">
        <thead>
          <tr className="text-left [&>th]:font-normal [&>th]:px-2 [&>th]:py-3 border-y-[.5px] border-tertiary bg-[#F8FAFC]">
            <th>
              <Checkbox<boolean> current={false}
                value={true}
                checkBoxClassName={(value: boolean, current: boolean) => {
                  return `border -leading-1 ${current === value ? 'border-primary text-primary' : 'border-secondary'} rounded w-6 h-6`;
                }}
                checkClassName={(value: boolean, current: boolean) => {
                  return `${current === value ? 'block' : 'hidden'} translate-x-[2px] translate-y-[1px]`;
                }}
                onCheckboxChanged={function (value: boolean): void {
                  throw new Error('Function not implemented.');
                }} />
            </th>
            <th>ORDER &#35;</th>
            <th>PICK UP DATE</th>
            <th>SELLER</th>
            <th>PACKAGING</th>
            <th>METHOD</th>
            <th>WEIGHT</th>
            <th>DIMENSIONS &#40;CM&#41;</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {
            toPickUpOrders.map((value: any) => {
              return (
                <tr key={`orders-completed-${value.id}`}
                  className="[&>td]:p-2 border-b-[.5px] border-b-tertiary-dark odd:bg-inherit even:bg-[#EFF0F0]">
                  <td>
                    <Checkbox<boolean> current={false}
                      value={true}
                      checkBoxClassName={(value: boolean, current: boolean) => {
                        return `border -leading-1 ${current === value ? 'border-primary text-primary' : 'border-tertiary-dark'} rounded w-6 h-6`;
                      }}
                      checkClassName={(value: boolean, current: boolean) => {
                        return `${current === value ? 'block' : 'hidden'} translate-x-[2px] translate-y-[1px]`;
                      }}
                      onCheckboxChanged={function (value: boolean): void {
                        throw new Error('Function not implemented.');
                      }} />
                  </td>
                  <td className="text-primary">{value.id}</td>
                  <td>{value.datePickedUp}</td>
                  <td>{value.sellerName}</td>
                  <td>{value.packaging.toUpperCase()}</td>
                  <td>{value.packageMethod.toUpperCase()}</td>
                  <td>{value.packageWeight}</td>
                  <td>{value.packageDimension}</td>
                  <td>
                    <span className={`bg-danger text-white px-2 py-1 rounded`}>{value.status}</span>
                  </td>
                  <td>
                    <div className="space-x-2">
                      <div className='inline-block p-2 m-auto rounded border border-primary w-fit text-primary'>
                        <FaRegEye />
                      </div>
                      <div className='inline-block p-2 m-auto rounded border border-danger w-fit text-danger'>
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
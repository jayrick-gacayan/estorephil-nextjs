'use client';

import { Checkbox } from "@/app/[locale]/_components/checkbox";
import { FaRegEye } from "react-icons/fa";

const completedOrders = [
  {
    id: 123123412,
    customerName: 'S-MART (Toronto)',
    packaging: 'regular',
    deliveryAddress: '7114 Kundiman Street, Sampaloc 1008 Manila Philippines',
    status: 'Delivered',
  },
  {
    id: 124412323,
    customerName: 'Johns Online Store(Ottawa)',
    packaging: 'balikbayan (l)',
    deliveryAddress: 'P.O. Box 1201, Manila Central Post Office 1050 Manila',
    status: 'Delivered',
  },
  {
    id: 12412546,
    customerName: 'Online Store (Vancouver)',
    packaging: 'balikbayan (m)',
    deliveryAddress: 'P.O. Box 1121, Araneta Center Post Office Quezon City',
    status: 'Delivered',
  },
  {
    id: 35132251,
    customerName: 'WATSONS-ALBERTA',
    packaging: 'regular',
    deliveryAddress: 'P.O. Box 1000, Gasan Post Office Gasan',
    status: 'Delivered',
  },
  {
    id: 5235234,
    customerName: 'WATSONS-ALBERTA',
    packaging: 'balikbayan (s)',
    deliveryAddress: '8WVQ+W33, Mandaue City, Cebu',
    status: 'Delivered',
  },
  {
    id: 3535351,
    customerName: 'S-MART (Toronto)',
    packaging: 'alisbayan (s)',
    deliveryAddress: '8WVQ+W33, Mandaue City, Cebu',
    status: 'Completed',
  },
  {
    id: 2823784,
    customerName: 'Johns Online Store(Ottawa)',
    packaging: 'regular',
    deliveryAddress: '8WVQ+W33, Mandaue City, Cebu',
    status: 'Completed',
  },
  {
    id: 8357782,
    customerName: 'Johns Online Store(Ottawa)',
    packaging: 'balikbayan (s)',
    deliveryAddress: '8WVQ+W33, Mandaue City, Cebu',
    status: 'Completed',
  },
  {
    id: 82374723,
    customerName: 'Gifts Online (Montreal)',
    packaging: 'balikbayan (s)',
    deliveryAddress: '8WVQ+W33, Mandaue City, Cebu',
    status: 'Completed',
  },
  {
    id: 2764623,
    customerName: 'Gifts Online (Montreal)',
    packaging: 'balikbayan (l)',
    deliveryAddress: '8WVQ+W33, Mandaue City, Cebu',
    status: 'Completed',
  },
]

export default function OrdersCompletedTable() {
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
            <th>TRACKING &#35;</th>
            <th>CUSTOMER</th>
            <th>PACKAGING</th>
            <th>DELIVERY ADDRESS</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {
            completedOrders.map((value: any) => {
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
                  <td>{value.customerName}</td>
                  <td>{value.packaging.toUpperCase()}</td>
                  <td>{value.deliveryAddress}</td>
                  <td>
                    <span className='bg-success text-white px-2 py-1 rounded'>{value.status}</span>
                  </td>
                  <td>
                    <div className='p-2 m-auto rounded border border-primary w-fit text-primary'>
                      <FaRegEye />
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
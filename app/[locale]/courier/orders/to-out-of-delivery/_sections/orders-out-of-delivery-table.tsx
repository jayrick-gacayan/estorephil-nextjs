'use client';

import { Checkbox } from "@/app/[locale]/_components/checkbox";
import { FaRegEye } from "react-icons/fa6";
import { RxCircleBackslash } from "react-icons/rx";

const outOfDeliveryOrders = [
  {
    id: 123123412,
    customerName: 'S-MART (Toronto)',
    packaging: 'regular',
    deliveryAddress: '7114 Kundiman Street, Sampaloc 1008 Manila Philippines',
    status: 'Out of Delivery',
  },
  {
    id: 124412323,
    customerName: 'Johns Online Store(Ottawa)',
    packaging: 'balikbayan (l)',
    deliveryAddress: 'P.O. Box 1201, Manila Central Post Office 1050 Manila',
    status: 'Out of Delivery',
  },
  {
    id: 12412546,
    customerName: 'Online Store (Vancouver)',
    packaging: 'balikbayan (m)',
    deliveryAddress: 'P.O. Box 1121, Araneta Center Post Office Quezon City',
    status: 'Out of Delivery',
  },
  {
    id: 35132251,
    customerName: 'WATSONS-ALBERTA',
    packaging: 'regular',
    deliveryAddress: 'P.O. Box 1000, Gasan Post Office Gasan',
    status: 'Out of Delivery',
  },
  {
    id: 5235234,
    customerName: 'WATSONS-ALBERTA',
    packaging: 'balikbayan (s)',
    deliveryAddress: '8WVQ+W33, Mandaue City, Cebu',
    status: 'Out of Delivery',
  },
  {
    id: 3535351,
    customerName: 'S-MART (Toronto)',
    packaging: 'alisbayan (s)',
    deliveryAddress: '8WVQ+W33, Mandaue City, Cebu',
    status: 'Out of Delivery',
  },
  {
    id: 2823784,
    customerName: 'Johns Online Store(Ottawa)',
    packaging: 'regular',
    deliveryAddress: '8WVQ+W33, Mandaue City, Cebu',
    status: 'Out of Delivery',
  },
  {
    id: 8357782,
    customerName: 'Johns Online Store(Ottawa)',
    packaging: 'balikbayan (s)',
    deliveryAddress: '8WVQ+W33, Mandaue City, Cebu',
    status: 'Out of Delivery',
  },
  {
    id: 82374723,
    customerName: 'Gifts Online (Montreal)',
    packaging: 'balikbayan (s)',
    deliveryAddress: '8WVQ+W33, Mandaue City, Cebu',
    status: 'Out of Delivery',
  },
  {
    id: 2764623,
    customerName: 'Gifts Online (Montreal)',
    packaging: 'balikbayan (l)',
    deliveryAddress: '8WVQ+W33, Mandaue City, Cebu',
    status: 'Out of Delivery',
  },
]


export default function OrdersOutOfDeliveryTable() {
  return (
    <div className="block overflow-auto h-[736px]">
      <table className="min-w-[768px] w-full">
        <thead>
          <tr className="text-left [&>th]:font-normal [&>th]:px-2 [&>th]:py-6 border-y-[.5px] border-y-thin border-[#707070] bg-[#F8FAFC]">
            <th>
              <Checkbox<boolean> current={false}
                value={true}
                checkBoxClassName={(value: boolean, current: boolean) => {
                  return `border -leading-1 ${current === value ? 'border-primary text-primary' : 'border-[#707070]'} rounded w-6 h-6`;
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
            outOfDeliveryOrders.map((value: any) => {
              return (
                <tr key={`orders-completed-${value.id}`}
                  className="[&>td]:px-2 [&>td]:py-3 border-b-[.5px] border-b-[#707070] odd:bg-inherit even:bg-[#EFF0F0]">
                  <td>
                    <Checkbox<boolean> current={false}
                      value={true}
                      checkBoxClassName={(value: boolean, current: boolean) => {
                        return `border -leading-1 ${current === value ? 'border-primary text-primary' : 'border-[#707070]'} rounded w-6 h-6`;
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
'use client';

import { Checkbox } from '@/app/[locale]/_components/checkbox';
import { FaCheck, FaRegEye } from 'react-icons/fa6';
import { RxCircleBackslash } from 'react-icons/rx';

const allOrders = [
  {

    id: 36,
    dateOrdered: '12/03/2023',
    customerName: 'John Lennon',
    totalItems: 1,
    payment: 50.0,
    instructions: '',
    status: 'For Pickup'
  },
  {

    id: 32,
    dateOrdered: '12/03/2023',
    customerName: 'Gabi Niel',
    totalItems: 1,
    payment: 50.0,
    instructions: '',
    status: 'For Pickup'
  },
  {

    id: 26,
    dateOrdered: '12/03/2023',
    customerName: 'Testing Test',
    totalItems: 1,
    payment: 50.0,
    instructions: '',
    status: 'For Pickup'
  },
  {

    id: 23,
    dateOrdered: '12/03/2023',
    customerName: 'Fname Lname',
    totalItems: 1,
    payment: 2158.0,
    instructions: 'notes',
    status: 'Confirm'
  },
  {

    id: 34,
    dateOrdered: '12/03/2023',
    customerName: 'Miku Hatsune',
    totalItems: 1,
    payment: 50.0,
    instructions: 'notes',
    status: 'Completed'
  },
]


export default function AllOrdersTable() {
  return (
    <div className='block overflow-auto'>
      <table className='min-w-[768px] w-full'>
        <thead>
          <tr className='text-left [&>th]:font-normal [&>th]:p-2 border-y-[.5px] border-y-thin border-[#707070] bg-[#F8FAFC]'>
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
            <th>ORDER &#35;</th>
            <th>DATE ORDERED</th>
            <th>CUSTOMER</th>
            <th>TOTAL ITEMS</th>
            <th>PAYMENT</th>
            <th>INSTRUCTIONS</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {
            allOrders.map((value: any) => {
              let colorForStatus = value.status === 'For Pickup' ? 'bg-danger' : value.status === 'Confirm' ? 'bg-success' : 'bg-info';

              return (
                <tr key={`orders-completed-${value.id}`}
                  className='[&>td]:p-2 border-b-[.5px] border-b-[#707070] odd:bg-inherit even:bg-[#EFF0F0]'>
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
                  <td className='text-primary'>{value.id}</td>
                  <td>{value.dateOrdered}</td>
                  <td>{value.customerName}</td>
                  <td>{value.totalItems}</td>
                  <td>C{value.payment.toFixed(2)}</td>
                  <td>{value.instructions}</td>
                  <td>
                    <span className={`${colorForStatus} text-white px-2 py-1 rounded`}>{value.status}</span>
                  </td>
                  <td>
                    <div className='space-x-2'>
                      <div className={`inline-block p-2 m-auto rounded border w-fit ${value.status === 'For Pickup' ? 'text-success border-success' : 'border-primary text-primary'}`}>
                        {
                          value.status === 'For Pickup' ? <FaCheck /> : <FaRegEye />
                        }
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
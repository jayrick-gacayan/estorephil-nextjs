'use client';

import { Checkbox } from '@/app/[locale]/_components/checkbox';
import Image from 'next/image';
import { FaRegEye } from 'react-icons/fa6';

const sellers = [
  {
    id: 'AXE0132',
    logo: '/sellers/apple.png',
    name: 'Consequat lobortis',
    address: '754 Pearl Street Streetsvile, Canada',
    phone: '(062)888-5277',
    packages: 144,
    status: 'active'
  },
  {
    id: 'ABE0002',
    logo: '/sellers/apple.png',
    name: 'Sit aliquam',
    address: '754 Pearl Street North Bay, Canada',
    phone: '(504)024-1922',
    packages: 144,
    status: 'active'
  },
  {
    id: 'AWR1923',
    logo: '/sellers/apple.png',
    name: 'Curabitur mauris',
    address: '3028 Maynard Rd Calgary, Canada',
    phone: '(511)839-1024',
    packages: 4708,
    status: 'active'
  },
  {
    id: 'MEX9233',
    logo: '/sellers/apple.png',
    name: 'Fringilla vel',
    address: '2132 Halsey Avenue Toronto, Canada',
    phone: '(371)870-4295',
    packages: 1782,
    status: 'active'
  },
  {
    id: 'FUN9923',
    logo: '/sellers/apple.png',
    name: 'Maximus massa nisl',
    address: '2132 Halsey Avenue Toronto, Canada',
    phone: '(947)924-9033',
    packages: 3312,
    status: 'active'
  },
  {
    id: 'QUR9284',
    logo: '/sellers/apple.png',
    name: 'Rhoncus tincidunt',
    address: '2132 Halsey Avenue Toronto, Canada',
    phone: '(443)827-7869',
    packages: 3974,
    status: 'active'
  },
  {
    id: 'JEN1022',
    logo: '/sellers/apple.png',
    name: 'Fermentum aliquam',
    address: '2132 Halsey Avenue Toronto, Canada',
    phone: '(865)597-7855',
    packages: 609,
    status: 'active'
  },
  {
    id: 'HOT0045',
    logo: '/sellers/apple.png',
    name: 'Libero dapibus arcu',
    address: '2132 Halsey Avenue Toronto, Canada',
    phone: '(602)698-5884',
    packages: 153,
    status: 'active'
  },
  {
    id: 'HIM0032',
    logo: '/sellers/apple.png',
    name: 'Pellentesque fermentum adipiscing',
    address: '2132 Halsey Avenue Toronto, Canada',
    phone: '(900)919-3711',
    packages: 835,
    status: 'active'
  },
  {
    id: 'HIM0035',
    logo: '/sellers/apple.png',
    name: 'Morbi nunc',
    address: '2132 Halsey Avenue Toronto, Canada',
    phone: '(317)569-8065',
    packages: 1213,
    status: 'active'
  },
];

export default function SellersTable() {
  return (
    <div className="block overflow-auto">
      <table className="min-w-[768px] w-full">
        <thead>
          <tr className="text-left [&>th]:font-normal [&>th]:p-2 border-y-[.5px] border-y-thin border-[#707070] bg-[#F8FAFC]">
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
            <th>SELLER ID</th>
            <th>LOGO</th>
            <th>SELLER NAME</th>
            <th>ADDRESS</th>
            <th>PHONE &#35;</th>
            <th>PACKAGES</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {
            sellers.map((value: any) => {
              return (
                <tr key={`sellers-courier-${value.id}`}
                  className="[&>td]:p-2 border-b-[.5px] border-b-[#707070] odd:bg-inherit even:bg-[#EFF0F0]">
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
                  <td className='w-6'>
                    <Image alt={`alt-seller-image-${value.id}`}
                      src={value.logo}
                      width={24}
                      height={24}
                      className='w-6 h-6' />
                  </td>
                  <td>{value.name}</td>
                  <td>{value.address}</td>
                  <td>{value.phone}</td>
                  <td>{value.packages}</td>
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
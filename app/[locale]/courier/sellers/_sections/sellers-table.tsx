'use client';

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

]
export default function SellersTable() {
  return (
    <div className="block overflow-auto h-[640px]">
      <table className="min-w-[768px] w-full">
        <thead>
          <tr className="text-left [&>th]:px-2 [&>th]:py-3 border-y-[.5px] border-y-thin border-[#707070] bg-[#F8FAFC]">
            <th></th>
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
                  className="[&>td]:px-2 [&>td]:py-3 border-b-[.5px] border-b-[#707070] odd:bg-inhert even:bg-[#F8FAFC]">
                  <td></td>
                  <td>{value.id}</td>
                  <td className='w-24'>
                    <Image alt={`alt-seller-image-${value.id}`}
                      src={value.logo}
                      width={48}
                      height={48}
                      className='w-12 h-12' />
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
'use client';

import { FaRegEye } from 'react-icons/fa6';
import { RxCircleBackslash } from 'react-icons/rx';
import Image from 'next/image';

const staffs = [
  {
    id: 69,
    photo: '/static_images/profile_image_default.jpg',
    lastName: 'Visto',
    firstName: 'Oliver',
    email: 'oliver.visto@kodakollectiv.com',
    status: 'Active',
    role: 'Courier Admin'
  }
]

export default function StaffTable() {
  return (
    <div className='block overflow-auto'>
      <table className='min-w-[768px] w-full'>
        <thead>
          <tr className='text-left [&>th]:font-normal [&>th]:px-2 [&>th]:py-6 border-y-[.5px] border-y-thin border-[#707070] bg-[#F8FAFC]'>
            <th>ID</th>
            <th>PHOTO</th>
            <th>LASTNAME</th>
            <th>FIRSTNAME</th>
            <th>EMAIL</th>
            <th>STATUS</th>
            <th>ROLE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {
            staffs.map((value: any) => {
              return (
                <tr key={`orders-completed-${value.id}`}
                  className='[&>td]:px-2 [&>td]:py-3 border-b-[.5px] border-b-[#707070] odd:bg-inherit even:bg-[#EFF0F0]'>
                  <td className='text-primary'>{value.id}</td>
                  <td className='w-24'>
                    <Image alt={`alt-staff-image-${value.id}`}
                      src={value.photo}
                      width={48}
                      height={48}
                      className='w-12 h-12 rounded-full' />
                  </td>
                  <td>{value.lastName}</td>
                  <td>{value.firstName}</td>
                  <td>{value.email}</td>
                  <td>
                    <span className={`${value.status === 'Active' ? 'bg-success' : 'bg-danger'} text-white px-2 py-1 rounded`}>{value.status}</span>
                  </td>
                  <td>{value.role}</td>
                  <td>
                    <div className='space-x-2'>
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
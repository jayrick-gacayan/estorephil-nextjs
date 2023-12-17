'use client';

import { FaRegEye } from 'react-icons/fa6';
import { RxCircleBackslash } from 'react-icons/rx';
import Image from 'next/image';
import { useRouter } from 'next-intl/client';

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
  const router = useRouter();

  return (
    <div className='block overflow-auto'>
      <table className='min-w-[768px] w-full'>
        <thead>
          <tr className='text-left [&>th]:font-normal [&>th]:p-2 border-y-[.5px]  border-tertiary bg-[#F8FAFC]'>
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
                  className='[&>td]:p-2 border-b-[.5px] border-b-[#EFF0F0] odd:bg-inherit even:bg-[#EFF0F0] hover:bg-tertiary-light'>
                  <td className='text-primary'>{value.id}</td>
                  <td className='w-6'>
                    <Image alt={`alt-staff-image-${value.id}`}
                      src={value.photo}
                      width={24}
                      height={24}
                      className='w-6 h-6 rounded-full' />
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
                      <div className='cursor-pointer inline-block p-2 m-auto rounded border border-primary w-fit text-primary'
                        onClick={() => {
                          router.push(`/courier/staffs/${value.id}`);
                        }}>
                        <FaRegEye />
                      </div>
                      <div className='cursor-pointer inline-block p-2 m-auto rounded border border-danger w-fit text-danger'
                        onClick={() => {

                        }}>
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
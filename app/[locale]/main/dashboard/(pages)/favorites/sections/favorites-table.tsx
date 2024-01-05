import Image from 'next/image';
import { FaHeartCrack, FaRegEye } from 'react-icons/fa6';
import Link from 'next-intl/link';

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

export default function FavoritesTable() {
  return (
    <div className="block overflow-auto border-x border-tertiary-dark">
      <table className="min-w-[768px] w-full">
        <thead>
          <tr className="[&>th]:font-normal [&>th]:px-2 [&>th]:py-3 border-y-[.5px] border-tertiary bg-[#F8FAFC]">
            <th className='w-24'>Image</th>
            <th className='text-left'>Name</th>
            <th className='w-48'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            sellers.map((value: any) => {
              return (
                <tr key={`products-favorites-${value.id}`}
                  className="[&>td]:p-2 border-b-[.5px] border-b-tertiary-dark odd:bg-inherit even:bg-[#EFF0F0]">
                  <td className='w-24'>
                    <Image alt={`alt-seller-image-${value.id}`}
                      src={value.logo}
                      width={24}
                      height={24}
                      className='w-6 h-6 m-auto block' />
                  </td>
                  <td>{value.name}</td>
                  <td>
                    <div className='space-x-2 w-fit m-auto block'>
                      <Link href='/'
                        className='p-2 m-auto rounded border border-primary w-fit text-primary inline-block cursor-pointer'>
                        <FaRegEye />
                      </Link>
                      <div className='p-2 m-auto rounded border border-danger w-fit text-danger inline-block'>
                        <FaHeartCrack />
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
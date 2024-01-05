import Image from 'next/image';
import { FaHeartCrack, FaRegEye } from 'react-icons/fa6';
import Link from 'next-intl/link';

const products = [
  {
    id: 'AXE0132',
    image: '/sellers/apple.png',
    name: 'Consequat lobortis',
  },
  {
    id: 'ABE0002',
    image: '/sellers/apple.png',
    name: 'Sit aliquam',
  },
  {
    id: 'AWR1923',
    image: '/sellers/apple.png',
    name: 'Curabitur mauris',
  },
  {
    id: 'MEX9233',
    image: '/sellers/apple.png',
    name: 'Fringilla vel',
  },
  {
    id: 'FUN9923',
    image: '/sellers/apple.png',
    name: 'Maximus massa nisl',
  },
  {
    id: 'QUR9284',
    image: '/sellers/apple.png',
    name: 'Rhoncus tincidunt',
  },
  {
    id: 'JEN1022',
    image: '/sellers/apple.png',
    name: 'Fermentum aliquam',
  },
  {
    id: 'HOT0045',
    image: '/sellers/apple.png',
    name: 'Libero dapibus arcu',
  },
  {
    id: 'HIM0032',
    image: '/sellers/apple.png',
    name: 'Pellentesque fermentum adipiscing',
  },
  {
    id: 'HIM0035',
    image: '/sellers/apple.png',
    name: 'Morbi nunc',
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
            products.map((value: any) => {
              return (
                <tr key={`products-favorites-${value.id}`}
                  className="[&>td]:p-2 border-b-[.5px] border-b-tertiary-dark odd:bg-inherit even:bg-[#EFF0F0]">
                  <td className='w-24'>
                    <Image alt={`alt-seller-image-${value.id}`}
                      src={value.image}
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
import MgmtCardItem from "@/app/[locale]/_components/mgmt-card-item";
import { BsBox2 } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";

export default function MgmtCardContainer() {
  return (
    <div className='flex lg:flex-row flex-col gap-4 mb-4'>
      <MgmtCardItem text='Staffs'
        icon={<FaUsers size={48} className='w-fit block m-auto' />}
        bgColor={'bg-indigo-500'}
        count={6} />
      <MgmtCardItem text='Boxes'
        icon={<BsBox2 size={48} className='w-fit block m-auto' />}
        bgColor={'bg-orange-300'}
        count={6} />
    </div>
  )
}
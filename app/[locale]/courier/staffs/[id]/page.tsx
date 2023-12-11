import { FaArrowLeft } from "react-icons/fa";
import StaffInfoHeader from "./_sections/sfaff-info-header";
import Link from 'next-intl/link';
import StaffDetails from "./_sections/staff-details";

export default function Page() {
  return (
    <>
      <StaffInfoHeader />
      <div className='bg-[#F5F7FA] p-4 flex-1 overflow-auto'>
        <div className="space-y-8 bg-white rounded p-4">
          <Link href='/courier/staffs'
            className="group block text-primary space-x-2 p-2 hover:bg-tertiary-light rounded w-fit">
            <span className="align-middle inline-block transition-all delay-100 group-hover:-translate-x-1">
              <FaArrowLeft size={20} />
            </span>
            <span className="align-middle">All Staffs</span>
          </Link>
          <StaffDetails />
        </div>
      </div>

    </>
  )
}
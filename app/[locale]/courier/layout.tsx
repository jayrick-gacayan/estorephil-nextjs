import { FaRegUser } from "react-icons/fa6";
import CourierHeaderNav from "./_sections/courier-header-nav";
import CourierSidebar from "./_sections/courier-sidebar";
import { ReactNode } from "react";
import { BiLogOut } from "react-icons/bi";

export default function Layout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <>
      <CourierHeaderNav bgColor='bg-success-dark'>
        <div className="flex justify-between items-center py-3 px-4">
          <div className="flex-1 flex items-center gap-4">
            <div className='rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
              <span className={`block bg-white w-6 h-[3px] transition duration-500 ease-in-out -translate-y-1`} />
              <span className={`block bg-white w-6 h-[3px] transition duration-500 ease-in-out`} />
              <span className={`block bg-white w-6 h-[3px] transition duration-500 ease-in-out translate-y-1`} />
            </div>
            <div className="flex-none w-auto">
              <FaRegUser size={20} />
            </div>
          </div>
          <div className='flex-none w-auto'>
            <BiLogOut size={24} />
          </div>
        </div>
      </CourierHeaderNav>
      <main className='h-[calc(100vh-56px)] flex w-full text-default-dark relative'>
        <CourierSidebar />
        <div className="flex-1 h-full flex flex-col w-full bg-white ">
          {children}
        </div>
      </main>
    </>
  )
}
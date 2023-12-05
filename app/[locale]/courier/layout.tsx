import { MenuProps } from "@/types/props/menu-props";
import CourierHeaderNav from "./_sections/courier-header-nav";
import { BiSolidDashboard } from "react-icons/bi";
import { BsBox2 } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import CourierSidebar from "./_sections/courier-sidebar";
import CourierHeaderText from "./_sections/courier-header-text";
import { ReactNode } from "react";






export default function Layout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <>
      <CourierHeaderNav bgColor='bg-success-dark'>
        <div className="flex justify-between items-center py-3 px-4">
          <div className="flex-1 flex items-center">
            <div className='rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
              <span className={`block bg-white w-6 h-[3px] transition duration-500 ease-in-out -translate-y-1`} />
              <span className={`block bg-white w-6 h-[3px] transition duration-500 ease-in-out`} />
              <span className={`block bg-white w-6 h-[3px] transition duration-500 ease-in-out translate-y-1`} />
            </div>
          </div>
          <div className='flex-none w-auto'>
          </div>
        </div>
      </CourierHeaderNav>
      <main className='h-[calc(100vh-56px)] flex w-full text-default-dark relative'>
        <CourierSidebar />
        <div className="flex-1 h-full overflow-auto bg-white">
          {children}
        </div>
      </main>
    </>
  )
}
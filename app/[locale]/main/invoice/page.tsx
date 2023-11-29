import { FaCcVisa } from "react-icons/fa6";
import { IoAirplaneSharp } from "react-icons/io5";


export default function Page() {
  return (
    <div className="bg-default p-8 text-default-dark">
      <div className="max-w-screen-2xl m-auto">
        <div className="border border-secondary-light rounded overflow-hidden">
          <div className="bg-white p-6 space-y-6">
            <div className="flex items-center justify-center gap-1">
              <div className="flex-1">
                <div className="flex gap-2 justify-center items-center">
                  <div className="flex-none w-auto"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Non pulvinar</h3>
                    <div>403-534-2342</div>
                    <div>3482 Port Washington Road Arrowwood Alberta T0L 0B0</div>
                  </div>
                </div>
              </div>
              <div className="flex-none w-auto">
                <div className="rounded border-2 px-4 py-2 border-danger text-[28px] leading-0 text-danger">
                  PENDING
                </div>
              </div>
            </div>
            <hr className="bg-primary-dark h-[6px]" />
            <div className="flex gap-2 items-stretch">
              <div className="rounded border border-secondary-light p-2 space-y-4 w-full">

                <h4 className="font-semibold">ORDER INFO</h4>
                <table className="table-auto">
                  <tr>
                    <td className="px-1">STORE NAME</td>
                    <td className="px-1 font-semibold">ONLINE STORE PH</td>
                  </tr>
                  <tr>
                    <td className="px-1">DATE ORDERED</td>
                    <td className="px-1 font-semibold">5/25/2022</td>
                  </tr>
                  <tr>
                    <td className="px-1">TRANSACTION NO.</td>
                    <td className="px-1 font-semibold text-danger">192838488282828</td>
                  </tr>
                  <tr>
                    <td className="px-1">ITEMS</td>
                    <td className="px-1 font-semibold">4</td>
                  </tr>
                </table>
              </div>
              <div className="rounded border border-secondary-light p-2 space-y-4 w-full">

                <div className="space-y-2">
                  <h4 className="font-semibold">BILLING INFO</h4>
                  <div className="block text-sm">
                    <p className="text-primary font-semibold">Martha Chavez</p>
                    <p>403-534-2342</p>
                    <p>Martha.chavez@gmail.com</p>
                    <p>3482 Port Washington Road Arrowwood Alberta T0L 0B0</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold">PAYMENT METHOD</h4>
                  <div className="block text-sm space-x-1">
                    <FaCcVisa size={24} className="inline-block align-center" />
                    <span className="inline-block">****4232</span>
                  </div>
                </div>
              </div>
              <div className="rounded border border-secondary-light p-2 space-y-2 w-full">

                <div className="space-y-2">
                  <h4 className="font-semibold">RECEIVER INFO</h4>
                  <div className="block text-sm">
                    <p className="text-primary font-semibold">Rebecca Chavez</p>
                    <p>0932 123 4567</p>
                    <p>Martha.chavez@gmail.com</p>
                    <p>253 M.L. Quezon Street Santo Niño Tukuran 7019 Zamboanga del Sur Philippines</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold">DELIVERY METHOD</h4>
                  <div className="w-fit block text-sm space-x-2 rounded bg-primary text-white py-1 px-2">
                    <IoAirplaneSharp size={24} className='inline-block' />
                    <span className="inline-block align-middle">Air Cargo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

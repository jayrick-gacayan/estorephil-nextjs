import { BiSolidLeftArrow } from "react-icons/bi";
import Image from "next/image";
import CourierProfileDetails from "../_components/courier-profile-label";
export default function CourierProfileSidebar() {
  return (
    <div className="flex flex-col px-5 py-7 gap-y-5 h-full">
      <div className="bg-blue-500 w-40 h-10 flex items-center text-white gap-x-5 rounded-lg px-3">
        <BiSolidLeftArrow />
        <div className="no-wrap">All Courier</div>
      </div>
      <div className="flex-1 rounded-md border border-gray-300 flex flex-col justify-between bg-white">
        <div className="flex-1 -300 pt-8">
          <div className="flex flex-col items-center gap-8 ">
            <div className="flex flex-col items-center gap-3">
              <div className="w-28 h-28 rounded-md overflow-hidden ">
                <Image
                  className="w-28 h-28"
                  src={"/static-images/lbc.png"}
                  alt={""}
                  width={112}
                  height={112}
                />
              </div>
              <div className="bg-green-500 text-white rounded-xl py-1 px-5 text-sm">
                Active
              </div>
            </div>

            <div className="w-72  space-y-1">
              <CourierProfileDetails
                label={"Shopper ID"}
                data={"SH001"}
                dataLink={undefined}
                title={false}
                labelLink={undefined}
                label2={undefined}
                data2={undefined}
                data3={undefined}
                dataLink2={undefined}
                dataLink3={undefined}
              />
              <CourierProfileDetails
                label={"Shipper Name"}
                data={"LBC EXPRESS"}
                dataLink={undefined}
                title={false}
                labelLink={undefined}
                label2={undefined}
                data2={undefined}
                data3={undefined}
                dataLink2={undefined}
                dataLink3={undefined}
              />
              <CourierProfileDetails
                label={"Email Address"}
                data={"john@gmail.com"}
                dataLink={undefined}
                title={false}
                labelLink={undefined}
                label2={undefined}
                data2={undefined}
                data3={undefined}
                dataLink2={undefined}
                dataLink3={undefined}
              />
              <CourierProfileDetails
                label={"Contact Number"}
                data={"+63 9310 259 241"}
                dataLink={undefined}
                title={false}
                labelLink={undefined}
                label2={undefined}
                data2={undefined}
                data3={undefined}
                dataLink2={undefined}
                dataLink3={undefined}
              />
              <CourierProfileDetails
                label={"Contact Person"}
                data={"John Doe"}
                dataLink={undefined}
                title={false}
                labelLink={undefined}
                label2={undefined}
                data2={undefined}
                data3={undefined}
                dataLink2={undefined}
                dataLink3={undefined}
              />
              <CourierProfileDetails
                label={"Rates"}
                data={"320/KG"}
                dataLink={undefined}
                title={false}
                labelLink={undefined}
                label2={undefined}
                data2={undefined}
                data3={undefined}
                dataLink2={undefined}
                dataLink3={undefined}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-5 px-5 gap-3 text-white">
          <div className="bg-blue-500 w-full text-center p-1.5">
            Password Reset
          </div>
          <div className="bg-red-500 w-full text-center p-1.5">
            Deactivate Courier
          </div>
        </div>
      </div>
    </div>
  );
}

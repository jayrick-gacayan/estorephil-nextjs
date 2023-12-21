import { CiEdit } from "react-icons/ci";
import SellerDetailsInfo from "../_components/seller-details-info";
import AgentDetailsInfo from "../_components/seller-details-info";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";

export default function SellerDetails() {
  return (
    <div className="flex gap-8">
      <div className="bg-white w-[40rem] border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm px-5 py-5 h-min">
        <div className="space-y-4">
          <SellerDetailsInfo
            label={"Registration Type:"}
            data={"Jezzel Villamore"}
          />
          <SellerDetailsInfo
            label={"Date Registered:"}
            data={"11/07/2023 12:44pm"}
          />
          <div className="border-b w-full"></div>
          <div className=" w-full justify-end flex text-blue-500 text-[1.5rem]">
            <button>
              <CiEdit />
            </button>
          </div>
          <SellerDetailsInfo label={"Interview Status:"} data={""} />
          <SellerDetailsInfo label={"Interviewee:"} data={""} />
          <SellerDetailsInfo label={"Interviewer:"} data={""} />
          <SellerDetailsInfo label={"Notes:"} data={""} />
          <div className="border-t w-full h-[1.5rem]"></div>
          <SellerDetailsInfo label={"Business Name:"} data={"asdasdsad"} />
          <SellerDetailsInfo label={"Owner:"} data={"asdadas"} />
          <SellerDetailsInfo
            label={"Contact Mobile No.:"}
            data={"099875284687"}
          />
          <SellerDetailsInfo
            label={"Contact Email Address:"}
            data={"asdasdsadasd@gmail.com"}
          />
          <div className="border-b w-full"></div>
          <div className="text-xs font-semibold flex  items-center gap-1">
            <div>Admin Note</div>
            <div>
              <FaCheckCircle />
            </div>
          </div>
          <textarea className="w-full border resize-none outline-none" />
          <div className="border-t w-full h-[1.5rem]"></div>
          <div className="flex w-full gap-5">
            <div className="flex-1 bg-green-500 text-white rounded-md px-5 py-2 text-center text-xs">
              Approve Seller
            </div>
            <div className="bg-red-500 text-white rounded-md px-10 py-2 text-center text-xs">
              Reject Seller
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex-1 border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm px-5 py-5 h-min">
        <div className=" w-full flex justify-between">
          <div className="text-md font-semibold">Docouments Licenses</div>
          <div className="flex text-white bg-green-500 rounded-md px-2 py-2.5 items-center gap-2 text-xs">
            <div>
              <IoMdCloudUpload />
            </div>
            <div>Upload</div>
          </div>
        </div>
      </div>
    </div>
  );
}

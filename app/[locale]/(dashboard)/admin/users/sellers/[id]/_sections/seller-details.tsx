import { CiEdit } from "react-icons/ci";
import SellerDetailsInfo from "../_components/seller-details-info";
import AgentDetailsInfo from "../_components/seller-details-info";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { useState } from "react";

export default function SellerDetails() {
  const [isInviteDialogVisible, setIsInviteDialogVisible] = useState(false);
  const openInviteDialog = () => {
    setIsInviteDialogVisible(true);
  };

  const closeInviteDialog = () => {
    setIsInviteDialogVisible(false);
  };
  const [isApproveModalOpen, setApproveModalOpen] = useState(false);
  const openApproveModal = () => {
    setApproveModalOpen(true);
  };
  const closeApproveModal = () => {
    setApproveModalOpen(false);
  };
  return (
    <>
      {isInviteDialogVisible && (
        <div className="z-[999] fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="flex flex-col justify-between bg-white h-[30.5rem] rounded-md w-[40rem] items-center p-8 gap-2">
            <div className="flex flex-col items-center gap-5  flex-1 w-[40rem] px-5">
              <h2 className="text-xl font-bold mb-4">Reject Seller</h2>
              <div className="mb-4 w-full">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700">
                  Select a reason for rejection:
                </label>
                <select
                  id="role"
                  name="role"
                  className="mt-1 p-2 border focus:border-blue-500 focus:outline-none w-full">
                  <option value="admin">Not enough information filled</option>
                  <option value="admin">Inappropriate Business Name</option>
                  <option value="staff">Inappropriate Owner Name</option>
                </select>
              </div>
              <div className="w-full flex flex-col  ">
                <textarea
                  placeholder="Additional Message..."
                  className="mt-1 p-2 border focus:border-blue-500 focus:outline-none w-full resize-none text-sm h-[9rem]"
                />
              </div>
            </div>
            <div className="gap-3 flex ">
              <button
                onClick={closeInviteDialog}
                className="text-white bg-red-500 px-4 py-2 rounded-md w-[10rem]">
                Reject
              </button>
              <button
                onClick={closeInviteDialog}
                className="text-cyan-500 border-cyan-500  border px-4 py-2 rounded-md w-[10rem]">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {isApproveModalOpen && (
        <div className="z-[999] fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="flex flex-col justify-between bg-white h-[15rem] rounded-md w-[40rem] items-center p-8 gap-2">
            <div className="flex flex-col items-center gap-5 ">
              <h2 className="text-xl font-bold mb-4">Approve Seller</h2>
              <div>Are you sure to approve seller?</div>
            </div>
            <div className="gap-3 flex flex-row">
              <button
                onClick={closeApproveModal}
                className="text-white bg-green-500 px-4 py-2 rounded-md w-[10rem]">
                Confirm
              </button>
              <button
                onClick={closeApproveModal}
                className="text-cyan-500 border-cyan-500 border px-4 py-2 rounded-md w-[10rem]">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
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
              <div
                className="flex-1 bg-green-500 text-white rounded-md px-5 py-2 text-center text-xs cursor-pointer"
                onClick={openApproveModal}>
                Approve Seller
              </div>
              <div
                className="bg-red-500 text-white rounded-md px-10 py-2 text-center text-xs cursor-pointer"
                onClick={openInviteDialog}>
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
              <label className=" cursor-pointer">
                <input type="file" className="hidden" />
                <div>Upload</div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

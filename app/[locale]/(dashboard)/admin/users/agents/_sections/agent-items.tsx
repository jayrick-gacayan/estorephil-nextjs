"use client";
import { CiSearch } from "react-icons/ci";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdClose,
  IoMdSettings,
} from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { TiCancel } from "react-icons/ti";
import Image from "next/image";
import Link from "next-intl/link";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
export default function AgentItems() {
  const orders = [
    {
      userID: "1",
      photo: "",
      company: "Koda Magic Store",
      lastName: "Villamor",
      firstName: "Jezzel",
      email: "villamorjezzel@kodakollectiv.com",
      referral: "	1.5",
      status: "Pending",
    },
    {
      userID: "1",
      photo: "",
      company: "Koda Magic Store",
      lastName: "Villamor",
      firstName: "Jezzel",
      email: "villamorjezzel@kodakollectiv.com",
      referral: "	1.5",
      status: "Active",
    },
    {
      userID: "1",
      photo: "",
      company: "Koda Magic Store",
      lastName: "Villamor",
      firstName: "Jezzel",
      email: "villamorjezzel@kodakollectiv.com",
      referral: "	1.5",
      status: "Active",
    },
    {
      userID: "1",
      photo: "",
      company: "Koda Magic Store",
      lastName: "Villamor",
      firstName: "Jezzel",
      email: "villamorjezzel@kodakollectiv.com",
      referral: "	1.5",
      status: "Active",
    },
    {
      userID: "1",
      photo: "",
      company: "Koda Magic Store",
      lastName: "Villamor",
      firstName: "Jezzel",
      email: "villamorjezzel@kodakollectiv.com",
      referral: "	1.5",
      status: "Active",
    },
    {
      userID: "1",
      photo: "",
      company: "Koda Magic Store",
      lastName: "Villamor",
      firstName: "Jezzel",
      email: "villamorjezzel@kodakollectiv.com",
      referral: "	1.5",
      status: "Active",
    },
  ];
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };
  const [isEmailModalOpen, setEmailModalOpen] = useState(false);
  const openEmailModal = () => {
    setEmailModalOpen(true);
  };

  const closeEmailModal = () => {
    setEmailModalOpen(false);
  };

  const [isDeleteDialogVisible, setIsDeleteDialogVisible] = useState(false);
  const openDeleteDialog = () => {
    setIsDeleteDialogVisible(true);
  };

  const closeDeleteDialog = () => {
    setIsDeleteDialogVisible(false);
  };
  const rowHeight = "px-4 h-[4.25rem]";
  return (
    <>
      {isEmailModalOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-5 rounded-md z-10 w-[35rem]">
            <div className="flex justify-between w-full items-center pb-5">
              <div className="w-[1.25rem] h-[1.25rem]" />
              <div className="growtext-center">
                <h1 className="text-xl font-bold ">Send Invitation</h1>
              </div>
              <div>
                <button
                  className="text-xl"
                  onClick={closeEmailModal}
                >
                  <IoMdClose />
                </button>
              </div>
            </div>

            <div className="border-t w-full h-[1.5rem]"></div>
            <div className="w-full flex items-center justify-center mb-5">
              Send invitation code to Villamor?
            </div>
            <form className="space-y-4">
              <div className="flex space-x-4 items-center justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                >
                  Send Invite
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-500 rounded-md hover:bg-gray-300"
                  onClick={closeEmailModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isEditModalOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-5 rounded-md z-10 w-[35rem]">
            <div className="flex justify-between w-full items-center pb-5">
              <div className="w-[1.25rem] h-[1.25rem]" />
              <div className="growtext-center">
                <h1 className="text-xl font-bold ">Send Invitation</h1>
              </div>
              <div>
                <button
                  className="text-xl"
                  onClick={closeEditModal}
                >
                  <IoMdClose />
                </button>
              </div>
            </div>

            <div className="border-t w-full h-[1.5rem]"></div>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="sellerCode"
                  className="mb-2 font-bold text-md"
                >
                  Referral Fee (%)
                </label>
                <input
                  type="text"
                  id="sellerCode"
                  className="px-3 py-2 border rounded-md w-full"
                  defaultValue="1.5"
                  placeholder="Seller Code"
                />
              </div>

              <div className="flex space-x-4 items-center justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                >
                  Update
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-500 rounded-md hover:bg-gray-300"
                  onClick={closeEditModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDeleteDialogVisible && (
        <div className="z-[999] fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="flex flex-col justify-between bg-white h-[15rem] rounded-md w-[40rem] items-center p-8 gap-2">
            <div className="flex flex-col items-center gap-5 ">
              <h2 className="text-xl font-bold mb-4">Block Product</h2>
              <div>Are you sure to block product?</div>
            </div>
            <div className="gap-3 flex flex-row">
              <button
                onClick={closeDeleteDialog}
                className="text-white bg-red-500 px-4 py-2 rounded-md w-[10rem]"
              >
                Block
              </button>
              <button
                onClick={closeDeleteDialog}
                className="text-cyan-500 border-cyan-500 border px-4 py-2 rounded-md w-[10rem]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col h-full ">
        <div className="  h-full flex flex-col border-2 bg-white rounded-xl border-white shadow-2xl">
          <div className="flex items-center h-[3.5rem]">
            <div className="py-3 px-2 flex items-center gap-2 w-full  ">
              <span className="text-xl">
                <CiSearch />
              </span>
              <input
                type="text"
                placeholder=""
                className="border   focus:border-blue-500 focus:outline-none w-[20rem] h-[2rem]"
              />
            </div>
          </div>
          <div className="h-[41.125rem] overflow-auto">
            <table className={`w-full `}>
              <thead>
                <tr className=" text-gray-600  border-t-2 border-b-2 bg-white text-left text-sm">
                  <th className="px-4 py-2 ">ID</th>
                  <th className="px-4 py-2 ">PHOTO</th>
                  <th className="px-4 py-2 ">COMPANY</th>
                  <th className="px-4 py-2 ">LAST NAME</th>
                  <th className="px-4 py-2 ">FIRST NAME</th>
                  <th className="px-4 py-2 ">EMAIL</th>
                  <th className="px-4 py-2 ">REFERRAL FEE</th>
                  <th className="px-4 py-2 text-center">STATUS</th>
                  <th className="px-4 py-2 text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  let statusColorClass = "";
                  switch (order.status) {
                    case "Active":
                      statusColorClass = "bg-green-500";
                      break;

                    case "Invited":
                      statusColorClass = "bg-blue-500";
                      break;

                    case "Pending":
                      statusColorClass = "bg-red-500";
                      break;
                    default:
                      statusColorClass = "";
                      break;
                  }
                  return (
                    <tr
                      key={order.userID}
                      className=" border-t-2 border-b-2 even:bg-white odd:bg-gray-50 text-xs"
                    >
                      <td className={`${rowHeight}`}>{order.userID}</td>
                      <td className={`${rowHeight}`}>
                        <div className="w-10 h-10 rounded-full overflow-hidden ">
                          <Image
                            className="w-10 h-10"
                            src={`/static-images/profileavatar.jpg`}
                            alt={""}
                            width={40}
                            height={40}
                          />
                        </div>
                      </td>
                      <td className={`${rowHeight}`}>{order.company}</td>
                      <td className={`${rowHeight}`}>{order.lastName}</td>
                      <td className={`${rowHeight}`}>{order.firstName}</td>
                      <td className={`${rowHeight}`}>{order.email}</td>
                      <td className={`${rowHeight}`}>{order.referral}</td>

                      <td className={`${rowHeight}`}>
                        <div
                          className={` ${statusColorClass}  text-center text-white rounded-2xl text-xs py-1 px-2`}
                        >
                          {order.status}
                        </div>
                      </td>
                      <td className={`${rowHeight}`}>
                        {order.status != "Pending" ? (
                          <div className="flex items-center justify-center gap-4">
                            <Link
                              className=" border-2 p-2.5 border-cyan-500 rounded-md text-cyan-500 hover:bg-cyan-500 hover:text-white hover:scale-150 duration-300 cursor-pointer"
                              href={"/admin/users/agents/1"}
                            >
                              <FaEye />
                            </Link>
                            <button
                              onClick={openEditModal}
                              className=" border-2 p-2.5 border-gray-500 rounded-md text-gray-500 hover:bg-gray-500 hover:text-white hover:scale-150 duration-300 cursor-pointer"
                            >
                              <IoMdSettings />
                            </button>
                            <button
                              onClick={openDeleteDialog}
                              className=" border-2 p-2.5 border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white hover:scale-150 duration-300 cursor-pointer"
                            >
                              <TiCancel />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-4">
                            <button
                              onClick={openEmailModal}
                              className=" border-2 p-2.5 border-green-500 rounded-md text-green-500 hover:bg-green-500 hover:text-white hover:scale-150 duration-300 cursor-pointer"
                            >
                              <AiOutlineMail />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="  flex justify-center items-center border-t   flex-1">
            <div className="flex text-blue-400">
              <div className="border border-gray-300 w-8 h-8 flex items-center justify-center rounded-l-md">
                <IoIosArrowBack />
              </div>
              <div className="border border-gray-300 w-8 h-8 flex items-center justify-center text-white bg-blue-400">
                1
              </div>
              <div className="border border-gray-300 w-8 h-8 flex items-center justify-center">
                2
              </div>
              <div className="border border-gray-300 w-8 h-8 flex items-center justify-center  rounded-r-md">
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

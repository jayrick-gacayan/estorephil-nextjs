"use client";
import { RiDeleteBin2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward, IoMdPower } from "react-icons/io";
import { FaCheck, FaEdit, FaEye } from "react-icons/fa";
import { MdOutlineLockReset } from "react-icons/md";
import { FcCancel } from "react-icons/fc";
import Image from "next/image";
import Link from "next-intl/link";
import { TiCancelOutline } from "react-icons/ti";
import { sellers } from "../_helpers/sellers-data";
import { useState } from "react";
export default function SellerItems() {
  const rowHeight = "px-4 h-[4.25rem]";
  const [isInviteModalOpen, setInviteModalOpen] = useState(false);
  const openInviteModal = () => {
    setInviteModalOpen(true);
  };
  const closeInviteModal = () => {
    setInviteModalOpen(false);
  };
  return (
    <>
      {isInviteModalOpen && (
        <div className="z-[999] fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="flex flex-col justify-between bg-white h-[15rem] rounded-md w-[40rem] items-center p-8 gap-2">
            <div className="flex flex-col items-center gap-5 ">
              <h2 className="text-xl font-bold mb-4">Send Invitation Code</h2>
              <div className="flex gap-1">
                <div>Send invitation code to </div>
                <div className="text-cyan-500">asdasjdadjh@gmail.com?</div>
              </div>
            </div>
            <div className="gap-3 flex flex-row">
              <button
                onClick={closeInviteModal}
                className="text-white bg-cyan-500 px-4 py-2 rounded-md w-[10rem]">
                Send
              </button>
              <button
                onClick={closeInviteModal}
                className="text-red-500 border-red-500 border px-4 py-2 rounded-md w-[10rem]">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col h-full ">
        <div className="  h-full flex flex-col border-2 bg-white rounded-xl border-white shadow-2xl">
          <div className="flex items-center h-[3.5rem] justify-between px-4 ">
            <div className="py-3 px-2 flex items-center gap-2    ">
              <span className="text-xl">
                <CiSearch />
              </span>
              <input
                type="text"
                placeholder=""
                className="border   focus:border-blue-500 focus:outline-none w-[20rem] h-[2rem]"
              />
            </div>
            <div className="flex text-xs">
              <button className="bg-gray-100 py-2 px-4 border">Active</button>
              <button className="bg-gray-100 py-2 px-4 border">Pending</button>
              <button className="bg-gray-100 py-2 px-4 border">
                Interviewed
              </button>
              <button className="bg-gray-100 py-2 px-4 border">Invited</button>
            </div>
          </div>
          <div className="h-[41.125rem] overflow-auto">
            <table className={`w-full `}>
              <thead>
                <tr className=" text-gray-600  border-t-2 border-b-2 bg-white text-left text-xs">
                  <th className="px-4 py-2 ">
                    <input type="checkbox" id="some_id" />
                  </th>
                  <th className="px-4 py-2 ">LOGO</th>
                  <th className="px-4 py-2 ">BUSINESS NAME</th>
                  <th className="px-4 py-2 ">BUSINESS EMAIL ADDRESS</th>
                  <th className="px-4 py-2 ">OWNER NAME</th>
                  <th className="px-4 py-2 ">OWNER EMAIL ADDRESS</th>
                  <th className="px-4 py-2 ">MOBILE NO.</th>
                  <th className="px-4 py-2 ">PHONE NO.</th>
                  <th className="px-4 py-2 ">DATE REGISTERED</th>
                  <th className="px-4 py-2 text-center">STATUS</th>
                  <th className="px-4 py-2 text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {sellers.map((order) => {
                  let statusColorClass = "";
                  let checkColor = "";
                  switch (order.status) {
                    case "Active":
                      statusColorClass = "bg-green-500";
                      break;

                    case "Invitation Sent":
                      statusColorClass = "bg-blue-500";
                      break;
                    case "Pending":
                      statusColorClass = "bg-red-500";
                      break;
                    default:
                      statusColorClass = "";
                      break;
                  }
                  if (order.status == "Pending") {
                    checkColor =
                      "border-green-500 text-green-500 hover:bg-green-500";
                  } else {
                    checkColor =
                      "border-cyan-500 text-cyan-500 bg-cyan-500 hover:bg-cyan-500";
                  }
                  return (
                    <tr
                      key={order.logo}
                      className=" border-t-2 border-b-2 even:bg-white odd:bg-gray-50 text-xs">
                      <td className="px-4 py-2 ">
                        <input type="checkbox" id="some_id" />
                      </td>
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
                      <td className={`${rowHeight}`}>{order.businessName}</td>
                      <td className={`${rowHeight}`}>{order.businessEmail}</td>
                      <td className={`${rowHeight}`}>{order.ownerName}</td>
                      <td className={`${rowHeight}`}>{order.ownerEmail}</td>
                      <td className={`${rowHeight}`}>{order.mobileNo}</td>
                      <td className={`${rowHeight}`}>{order.phoneNo}</td>
                      <td className={`${rowHeight}`}>{order.dateRegistered}</td>
                      <td className={`${rowHeight}`}>
                        <div
                          className={` ${statusColorClass}  text-center text-white rounded-2xl text-xs py-1 px-2`}>
                          {order.status}
                        </div>
                      </td>
                      <td className={`${rowHeight}`}>
                        {order.status == "Invitation Sent" ? (
                          <div className="flex items-center justify-center gap-4">
                            <Link
                              className=" border-2 p-2.5 border-cyan-500 rounded-md text-cyan-500 hover:bg-cyan-500 hover:text-white hover:scale-150 duration-300 cursor-pointer"
                              href={`/admin/users/sellers/${order.id}`}>
                              <FaEye />
                            </Link>
                            <div
                              className=" border-2 p-2.5 border-cyan-500 rounded-md text-cyan-500 hover:bg-cyan-500 hover:text-white hover:scale-150 duration-300 cursor-pointer"
                              onClick={openInviteModal}>
                              <FaCheck />
                            </div>
                          </div>
                        ) : order.status == "Pending" ? (
                          <div className="flex items-center justify-center gap-4">
                            <Link
                              className=" border-2 p-2.5 border-cyan-500 rounded-md text-cyan-500 hover:bg-cyan-500 hover:text-white hover:scale-150 duration-300 cursor-pointer"
                              href={`/admin/users/sellers/${order.id}`}>
                              <FaEye />
                            </Link>
                            <div className=" border-2 p-2.5 border-green-500 rounded-md text-green-500 hover:bg-green-500 hover:text-white hover:scale-150 duration-300 cursor-pointer">
                              <FaCheck />
                            </div>
                            <div className=" border-2 p-2.5 border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white hover:scale-150 duration-300 cursor-pointer">
                              <TiCancelOutline />
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-4">
                            <Link
                              className=" border-2 p-2.5 border-cyan-500 rounded-md text-cyan-500 hover:bg-cyan-500 hover:text-white hover:scale-150 duration-300 cursor-pointer"
                              href={`/admin/users/sellers/${order.id}`}>
                              <FaEye />
                            </Link>
                            <div className=" border-2 p-2.5 border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white hover:scale-150 duration-300 cursor-pointer">
                              <IoMdPower />
                            </div>
                            <div className=" border-2 p-2.5 border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white hover:scale-150 duration-300 cursor-pointer">
                              <MdOutlineLockReset />
                            </div>
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

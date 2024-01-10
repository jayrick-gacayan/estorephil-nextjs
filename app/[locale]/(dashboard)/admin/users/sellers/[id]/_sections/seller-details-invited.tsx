"use client";
import { CiEdit, CiSearch } from "react-icons/ci";
import SellerDetailsInfo from "../_components/seller-details-info";
import { FaCheckCircle } from "react-icons/fa";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdClose,
  IoMdCloudUpload,
} from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";

export default function SellerDetailsInvited() {
  const orders = [
    {
      tradeID: "TR004",
      dateTime: "10/22/23 21:27 PM",
      currencyFrom: "₱",
      currencyTo: "₱",
      orderRate: "0.2",
      tradingRates: "0.4",
      notes: "Active",
    },
    {
      tradeID: "TR004",
      dateTime: "10/22/23 21:27 PM",
      currencyFrom: "₱",
      currencyTo: "₱",
      orderRate: "0.2",
      tradingRates: "0.4",
      notes: "Active",
    },
    {
      tradeID: "TR004",
      dateTime: "10/22/23 21:27 PM",
      currencyFrom: "₱",
      currencyTo: "₱",
      orderRate: "0.2",
      tradingRates: "0.4",
      notes: "Active",
    },
    {
      tradeID: "TR004",
      dateTime: "10/22/23 21:27 PM",
      currencyFrom: "₱",
      currencyTo: "₱",
      orderRate: "0.2",
      tradingRates: "0.4",
      notes: "Active",
    },
    {
      tradeID: "TR004",
      dateTime: "10/22/23 21:27 PM",
      currencyFrom: "₱",
      currencyTo: "₱",
      orderRate: "0.2",
      tradingRates: "0.4",
      notes: "Active",
    },
    {
      tradeID: "TR004",
      dateTime: "10/22/23 21:27 PM",
      currencyFrom: "₱",
      currencyTo: "₱",
      orderRate: "0.2",
      tradingRates: "0.4",
      notes: "Active",
    },
    {
      tradeID: "TR004",
      dateTime: "10/22/23 21:27 PM",
      currencyFrom: "₱",
      currencyTo: "₱",
      orderRate: "0.2",
      tradingRates: "0.4",
      notes: "Active",
    },
  ];
  const [interviewStatus, setInterviewStatus] = useState("Interviewed");
  const rowHeight = "px-4 h-[4.25rem]";
  const [isInviteModalOpen, setInviteModalOpen] = useState(false);
  const openInviteModal = () => {
    setInviteModalOpen(true);
  };
  const closeInviteModal = () => {
    setInviteModalOpen(false);
  };
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };
  return (
    <>
      {isEditModalOpen && (
        <div className="fixed inset-0 overflow-y-auto z-[999] w-screen h-screen flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-5 rounded-md z-10 w-[45rem] ">
            <div className="flex justify-between w-full items-center pb-5">
              <div className="w-[1.25rem] h-[1.25rem]" />
              <div className="growtext-center">
                <h1 className="text-xl font-bold ">Edit Seller Details</h1>
              </div>
              <div>
                <button className="text-xl" onClick={closeEditModal}>
                  <IoMdClose />
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center  mb-4 group">
              <div className="flex justify-center items-center  mb-4 group">
                <label className="rounded-sm transition-transform duration-300 transform group-hover:scale-110 relative overflow-hidden">
                  <input type="file" className="hidden" />
                  <Image
                    src={"/static_images/profile_image_default.jpg"}
                    alt="Profile"
                    width={220}
                    height={220}
                  />
                  <div className="absolute top-0 left-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30 w-full h-full cursor-pointer">
                    <div className="w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <BsPlus className="text-white text-2xl" />
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <form className="space-y-4 text-xs">
              <div className="flex flex-col">
                <label htmlFor="sellerCode" className="mb-2 font-bold">
                  Seller Code
                </label>
                <input
                  type="text"
                  id="sellerCode"
                  className="px-3 py-2 border rounded-md w-full"
                  defaultValue="Costco05041"
                  placeholder="Seller Code"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="sellerName" className="mb-2 font-bold">
                  Seller Name
                </label>
                <input
                  type="text"
                  id="sellerName"
                  className="px-3 py-2 border rounded-md w-full"
                  defaultValue="Costco"
                  placeholder="Seller Name"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="owner" className="mb-2 font-bold">
                  Owner
                </label>
                <input
                  type="text"
                  id="owner"
                  className="px-3 py-2 border rounded-md w-full"
                  defaultValue=""
                  placeholder="Owner"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="businessLicenseNumber"
                  className="mb-2 font-bold">
                  Business License Number
                </label>
                <input
                  type="text"
                  id="businessLicenseNumber"
                  className="px-3 py-2 border rounded-md w-full"
                  defaultValue="License Number"
                  placeholder="License Number"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="taxNumber" className="mb-2 font-bold">
                  Tax Number
                </label>
                <input
                  type="text"
                  id="taxNumber"
                  className="px-3 py-2 border rounded-md w-full"
                  defaultValue="Tax"
                  placeholder="Tax"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="countries" className="mb-2 font-bold">
                  Countries
                </label>
                <select
                  id="countries"
                  className="px-3 py-2 border rounded-md w-full"
                  multiple>
                  <option value="Canada">Canada</option>
                  <option value="Philippines">Philippines</option>
                  <option value="USA">United States of America</option>
                </select>
              </div>

              <div className="flex space-x-4 items-center justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                  Update
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-500 rounded-md hover:bg-gray-300">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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
      <div className="flex justify-between gap-8">
        <div className="flex flex-col h-full flex-1">
          <div className="  h-full flex flex-col  bg-white rounded-xl  border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm px-5 py-5">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="overflow-hidden rounded-full w-[30px] h-[30px]">
                  <Image
                    src={"/static_images/profile_image_default.jpg"}
                    alt={"profile picture"}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="">name</div>
              </div>
              <div className="flex text-white text-xs gap-3 ">
                <div className="bg-blue-500   rounded-xl p-2">
                  <select
                    value={interviewStatus}
                    onChange={(e) => setInterviewStatus(e.target.value)}
                    className=" outline-none bg-blue-500 w-full">
                    <option value="Active">Active</option>
                    <option value="Interviewed">Interviewed</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div
                  className="bg-green-500 px-3 py-1.5 rounded-xl  flex items-center cursor-pointer"
                  onClick={openInviteModal}>
                  Re-send Invitation
                </div>
              </div>
            </div>

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
                    <th className="px-4 py-2 ">IMAGE</th>
                    <th className="px-4 py-2 ">PRODUCT NAME</th>
                    <th className="px-4 py-2 ">CATEGORY</th>
                    <th className="px-4 py-2 ">PRICE</th>
                    <th className="px-4 py-2 ">INVENTORY</th>
                    <th className="px-4 py-2 ">STATUS</th>
                    <th className="px-4 py-2 ">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => {
                    return (
                      <tr
                        key={order.tradeID}
                        className=" border-t-2 border-b-2 even:bg-white odd:bg-gray-100 text-xs">
                        <td className={`${rowHeight} text-cyan-500`}>
                          <Link href={""}> {order.tradeID}</Link>
                        </td>
                        <td className={`${rowHeight} text-cyan-500`}>
                          <Link href={""}> {order.dateTime}</Link>
                        </td>
                        <td className={`${rowHeight}`}>{order.currencyFrom}</td>
                        <td className={`${rowHeight}`}>{order.currencyTo}</td>
                        <td className={`${rowHeight}`}>{order.orderRate}</td>
                        <td className={`${rowHeight}`}>{order.tradingRates}</td>
                        <td className={`${rowHeight}`}>{order.notes}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="  flex justify-center items-center border-t   flex-1">
              <div className="flex text-[#23B7E5]">
                <div className="border border-gray-300 w-8 h-8 flex items-center justify-center rounded-l-md">
                  <IoIosArrowBack />
                </div>
                <div className="border border-gray-300 w-8 h-8 flex items-center justify-center text-white bg-[#23B7E5] ">
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
            <div
              className=" w-full justify-end flex text-blue-500 text-[1.5rem] cursor-pointer"
              onClick={openEditModal}>
              <CiEdit />
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
            <div>Profile Completion</div>
            <div className="border-b w-full h-[1.5rem]"></div>
            <div className="w-full gap-5">
              <div
                className="flex-1 bg-green-500 text-white rounded-md px-5 py-2 text-center text-xs cursor-pointer"
                onClick={openInviteModal}>
                Re-send Invitation
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

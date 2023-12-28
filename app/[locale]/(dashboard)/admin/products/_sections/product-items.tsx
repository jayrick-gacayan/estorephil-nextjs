"use client";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import Link from "next-intl/link";
import { MdBlock } from "react-icons/md";
import { useState } from "react";
export default function ProductItems() {
  const orders = [
    {
      itemNo: "Item 5015591 Model 395960",
      uid: "cc429d0e07",
      image: "",
      productName: "Spam",
      category: "Grocery",
      inventory: "99",
      price: "29.97",
      seller: "Costco",
      status: "Active",
    },
    {
      itemNo: "Item 5015591 Model 395960",
      uid: "cc429d0e07",
      image: "",
      productName: "Spam",
      category: "Grocery",
      inventory: "99",
      price: "29.97",
      seller: "Costco",
      status: "Active",
    },
    {
      itemNo: "Item 5015591 Model 395960",
      uid: "cc429d0e07",
      image: "",
      productName: "Spam",
      category: "Grocery",
      inventory: "99",
      price: "29.97",
      seller: "Costco",
      status: "Active",
    },
    {
      itemNo: "Item 5015591 Model 395960",
      uid: "cc429d0e07",
      image: "",
      productName: "Spam",
      category: "Grocery",
      inventory: "99",
      price: "29.97",
      seller: "Costco",
      status: "Active",
    },
    {
      itemNo: "Item 5015591 Model 395960",
      uid: "cc429d0e07",
      image: "",
      productName: "Spam",
      category: "Grocery",
      inventory: "99",
      price: "29.97",
      seller: "Costco",
      status: "Active",
    },
    {
      itemNo: "Item 5015591 Model 395960",
      uid: "cc429d0e07",
      image: "",
      productName: "Spam",
      category: "Grocery",
      inventory: "99",
      price: "29.97",
      seller: "Costco",
      status: "Active",
    },
    {
      itemNo: "Item 5015591 Model 395960",
      uid: "cc429d0e07",
      image: "",
      productName: "Spam",
      category: "Grocery",
      inventory: "99",
      price: "29.97",
      seller: "Costco",
      status: "Active",
    },
    {
      itemNo: "Item 5015591 Model 395960",
      uid: "cc429d0e07",
      image: "",
      productName: "Spam",
      category: "Grocery",
      inventory: "99",
      price: "29.97",
      seller: "Costco",
      status: "Active",
    },
    {
      itemNo: "Item 5015591 Model 395960",
      uid: "cc429d0e07",
      image: "",
      productName: "Spam",
      category: "Grocery",
      inventory: "99",
      price: "29.97",
      seller: "Costco",
      status: "Active",
    },
    {
      itemNo: "Item 5015591 Model 395960",
      uid: "cc429d0e07",
      image: "",
      productName: "Spam",
      category: "Grocery",
      inventory: "99",
      price: "29.97",
      seller: "Costco",
      status: "Active",
    },
  ];
  const rowHeight = "px-4 h-[4.25rem]";
  const [isBlockDialogVisible, setIsBlockDialogVisible] = useState(false);
  const openChargesDialog = () => {
    setIsBlockDialogVisible(true);
  };

  const closeChargesDialog = () => {
    setIsBlockDialogVisible(false);
  };
  return (
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
                <th className="px-4 py-2 ">ITEM NO.</th>
                <th className="px-4 py-2 ">UID</th>
                <th className="px-4 py-2 ">IMAGE</th>
                <th className="px-4 py-2 ">PRODUCT NAME</th>
                <th className="px-4 py-2 ">CATEGORY</th>
                <th className="px-4 py-2 ">INVENTORY</th>
                <th className="px-4 py-2 ">PRICE</th>
                <th className="px-4 py-2 ">SELLER</th>
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

                  case "Draft":
                    statusColorClass = "bg-blue-500";
                    break;
                  default:
                    statusColorClass = "";
                    break;
                }
                return (
                  <tr
                    key={order.itemNo}
                    className=" border-t-2 border-b-2 even:bg-white odd:bg-gray-100 text-xs"
                  >
                    <td className={`${rowHeight}`}>{order.itemNo}</td>
                    <td className={`${rowHeight}`}>{order.uid}</td>
                    <td className={`${rowHeight}`}>{order.image}</td>
                    <td className={`${rowHeight}`}>{order.productName}</td>
                    <td className={`${rowHeight}`}>{order.category}</td>
                    <td className={`${rowHeight}`}>{order.inventory}</td>
                    <td className={`${rowHeight}`}>{order.price}</td>
                    <td className={`${rowHeight}`}>{order.seller}</td>
                    <td className={`${rowHeight}`}>
                      <div
                        className={` ${statusColorClass}  text-center text-white rounded-2xl text-xs py-1 px-2`}
                      >
                        {order.status}
                      </div>
                    </td>
                    <td className={`${rowHeight}`}>
                      <div className="flex items-center justify-center gap-4">
                        <Link
                          className=" border-2 p-2.5 border-cyan-500 rounded-md text-cyan-500 hover:bg-cyan-500 hover:text-white"
                          href={"/admin/products/1"}
                        >
                          <FiEye />
                        </Link>
                        <button className=" border-2 p-2.5 border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white">
                          <MdBlock />
                        </button>
                      </div>
                    </td>
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
            <div className="border border-gray-300 w-8 h-8 flex items-center justify-center text-white bg-[#23B7E5]">
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
  );
}

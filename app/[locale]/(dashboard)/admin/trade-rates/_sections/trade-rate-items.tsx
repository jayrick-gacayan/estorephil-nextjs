"use client";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import TradeRatesDropdown from "../_components/trade-rates-dropdown";
export default function TradeRateItems() {
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
  const rowHeight = "px-4 h-[4.25rem]";
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
          <div className="bg-white p-5 rounded-md z-10 w-[35rem]">
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

            <div className="border-t w-full h-[1.5rem]"></div>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="sellerCode" className="mb-2 font-bold text-md">
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
              <div className="flex gap-4">
                <div className="flex flex-col gap-4 grow">
                  <TradeRatesDropdown
                    label={"Currency Form"}
                    data={undefined}
                    isDropdown={true}
                    isDropdownMultiple={undefined}
                    dropdownLists={["₱", "C$"]}
                  />
                  <div className="flex flex-col">
                    <label
                      htmlFor="sellerCode"
                      className="mb-2 font-bold text-md">
                      Order Rate
                    </label>
                    <input
                      type="text"
                      id="sellerCode"
                      className="px-3 py-2 border rounded-md w-full"
                      defaultValue="Costco05041"
                      placeholder="Seller Code"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 grow">
                  <TradeRatesDropdown
                    label={"Currency To"}
                    data={undefined}
                    isDropdown={true}
                    isDropdownMultiple={undefined}
                    dropdownLists={["₱", "C$"]}
                  />
                  <div className="flex flex-col">
                    <label
                      htmlFor="sellerCode"
                      className="mb-2 font-bold text-md">
                      Trading Rate
                    </label>
                    <input
                      type="text"
                      id="sellerCode"
                      className="px-3 py-2 border rounded-md w-full"
                      defaultValue="Costco05041"
                      placeholder="Seller Code"
                    />
                  </div>
                </div>
              </div>

              <div className="text-xs font-semibold flex-col flex  gap-2">
                <div className="flex items-center gap-2">
                  <div>Admin Note</div>
                  <div>
                    <FaCheckCircle />
                  </div>
                </div>
                <textarea className="w-full border resize-none outline-none h-[5rem]" />
              </div>

              <div className="flex space-x-4 items-center justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                  Update
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-500 rounded-md hover:bg-gray-300"
                  onClick={closeEditModal}>
                  Cancel
                </button>
              </div>
            </form>
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
                  <th className="px-4 py-2 ">TRADE ID</th>
                  <th className="px-4 py-2 ">DATE/TIME</th>
                  <th className="px-4 py-2 ">CURRENCY FROM</th>
                  <th className="px-4 py-2 ">CURRENCY TO</th>
                  <th className="px-4 py-2 ">ORDER RATES</th>
                  <th className="px-4 py-2 ">TRADING RATES</th>
                  <th className="px-4 py-2 ">NOTES</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  return (
                    <tr
                      key={order.tradeID}
                      className=" border-t-2 border-b-2 even:bg-white odd:bg-gray-100 text-xs">
                      <td className={`${rowHeight} text-cyan-500`}>
                        <button onClick={openEditModal}>
                          {" "}
                          {order.tradeID}
                        </button>
                      </td>
                      <td className={`${rowHeight} text-cyan-500`}>
                        {order.dateTime}
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
    </>
  );
}

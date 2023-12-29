"use client";

import { useState } from "react";
import DashboardHeaderText from "../../../_components/dashboard-header-text";
import DashboardHeaderTextButton from "../../../_components/dashboard-header-text-button";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import TradeRatesDropdown from "../_components/trade-rates-dropdown";

export default function TradeRatesHeader() {
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
        <div className="fixed inset-0 overflow-y-auto z-[999] flex items-center justify-center w-screen h-screen">
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
      <div className=" ">
        <DashboardHeaderText text="Trade Rates">
          <DashboardHeaderTextButton
            labelText="Create Trade Rates"
            onClick={openEditModal}
          />
        </DashboardHeaderText>
      </div>
    </>
  );
}

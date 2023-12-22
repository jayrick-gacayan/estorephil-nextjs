"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import DashboardHeaderText from "../../../_components/dashboard-header-text";
import DashboardHeaderTextButton from "../../../_components/dashboard-header-text-button";
import { FaRegPlusSquare } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";

export default function CategoriesHeader() {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [nestCategoryUnder, setNestCategoryUnder] = useState(false); // Added state for checkbox
  const [setActive, setIsActive] = useState(false); // Added state for second checkbox

  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };
  return (
    <div>
      <DashboardHeaderText text="Categories">
        <DashboardHeaderTextButton
          labelText="Create Category"
          onClick={openEditModal}
        />
      </DashboardHeaderText>
      {isEditModalOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-5 rounded-md z-10 w-[25rem]">
            <div className="flex justify-between w-full items-center pb-5">
              <div className="w-[1.25rem] h-[1.25rem]" />
              <div className="growtext-center">
                <h1 className="text-xl font-bold ">CREATE CATEGORY</h1>
              </div>
              <div>
                <button className="text-xl" onClick={closeEditModal}>
                  <IoMdClose />
                </button>
              </div>
            </div>

            <div className="border-t w-full h-[1.5rem]"></div>
            <form className="space-y-4">
              <div className="text-[2rem] cursor-pointer">
                <label
                  htmlFor="createCategoryUpload"
                  className="cursor-pointer">
                  <CiSquarePlus />
                </label>
                <input
                  type="file"
                  className="hidden"
                  id="createCategoryUpload"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="sellerCode" className="mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="px-3 py-2 border rounded-md w-full"
                  defaultValue=""
                  placeholder="Category Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="sellerCode" className="mb-2">
                  Referral Fee
                </label>
                <input
                  type="text"
                  id="referralFee"
                  className="px-3 py-2 border rounded-md w-full"
                  defaultValue=""
                  placeholder="Referral Fee"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="nestCategoryUnder"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  checked={nestCategoryUnder}
                  onChange={() => setNestCategoryUnder(!nestCategoryUnder)}
                />
                <label
                  htmlFor="nestCategoryUnder"
                  className="ml-2 text-gray-600">
                  Nest category under
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="setActive"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  checked={setActive}
                  onChange={() => setIsActive(!setActive)}
                />
                <label htmlFor="setActive" className="ml-2 text-gray-600">
                  Set as Active
                </label>
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
    </div>
  );
}

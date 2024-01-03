import { FiEye } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { CiSearch, CiSquarePlus } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
export default function CategoryItems() {
  const orders = [
    {
      icon: "",
      category: "Appliance",
      referaral: "10%",
      numProducts: "7",
      status: "Active",
    },
    {
      icon: "",
      category: "Appliance",
      referaral: "10%",
      numProducts: "7",
      status: "Active",
    },
    {
      icon: "",
      category: "Appliance",
      referaral: "10%",
      numProducts: "7",
      status: "Active",
    },
    {
      icon: "",
      category: "Appliance",
      referaral: "10%",
      numProducts: "7",
      status: "Active",
    },
    {
      icon: "",
      category: "Appliance",
      referaral: "10%",
      numProducts: "7",
      status: "Active",
    },
  ];
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [isBlockModalOpen, setBlockModalOpen] = useState(false);
  const [nestCategoryUnder, setNestCategoryUnder] = useState(true); // Added state for checkbox
  const [setActive, setIsActive] = useState(true); // Added state for second checkbox
  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };
  const openViewModal = () => {
    setViewModalOpen(true);
  };

  const closeViewModal = () => {
    setViewModalOpen(false);
  };

  const openBlockModal = () => {
    setBlockModalOpen(true);
  };
  const closeBlockModal = () => {
    setBlockModalOpen(false);
  };
  const rowHeight = "px-4 h-[4.25rem]";
  return (
    <>
      {isEditModalOpen && (
        <div className="fixed inset-0 overflow-y-auto z-[999] w-screen h-screen flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-5 rounded-md z-10 w-[25rem]">
            <div className="flex justify-between w-full items-center pb-5">
              <div className="w-[1.25rem] h-[1.25rem]" />
              <div className="growtext-center">
                <h1 className="text-xl font-bold ">CREATE CATEGORY</h1>
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
              <div className="text-[2rem] cursor-pointer">
                <label
                  htmlFor="createCategoryUpload"
                  className="cursor-pointer"
                >
                  <CiSquarePlus />
                </label>
                <input
                  type="file"
                  className="hidden"
                  id="createCategoryUpload"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="sellerCode"
                  className="mb-2"
                >
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
                <label
                  htmlFor="sellerCode"
                  className="mb-2"
                >
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
                  className="ml-2 text-gray-600"
                >
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
                <label
                  htmlFor="setActive"
                  className="ml-2 text-gray-600"
                >
                  Set as Active
                </label>
              </div>
              <div className="flex space-x-4 items-center justify-center pt-5">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isViewModalOpen && (
        <div className="z-[999] w-screen h-screen fixed inset-0 overflow-y-auto flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-5 rounded-md z-10 w-[25rem]">
            <div className="flex justify-between w-full items-center pb-5">
              <div className="w-[1.25rem] h-[1.25rem]" />
              <div className="growtext-center">
                <h1 className="text-xl font-bold ">VIEW CATEGORY</h1>
              </div>
              <div>
                <button
                  className="text-xl"
                  onClick={closeViewModal}
                >
                  <IoMdClose />
                </button>
              </div>
            </div>

            <div className="border-t w-full h-[1.5rem]"></div>
          </div>
        </div>
      )}

      {isBlockModalOpen && (
        <div className="z-[999] fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="flex flex-col justify-between bg-white h-[15rem] rounded-md w-[40rem] items-center p-8 gap-2">
            <div className="flex flex-col items-center gap-5 ">
              <h2 className="text-xl font-bold mb-4">Block Product</h2>
              <div>Are you sure to block product?</div>
            </div>
            <div className="gap-3 flex flex-row">
              <button
                onClick={closeBlockModal}
                className="text-white bg-red-500 px-4 py-2 rounded-md w-[10rem]"
              >
                Block
              </button>
              <button
                onClick={closeBlockModal}
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
                  <th className="px-4 py-2 ">ICON</th>
                  <th className="px-4 py-2 ">CATEGORY NAME</th>
                  <th className="px-4 py-2 ">REFERRAL FEE</th>
                  <th className="px-4 py-2 "># OF PRODUCTS</th>
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
                      key={order.icon}
                      className=" border-t-2 border-b-2 even:bg-white odd:bg-gray-100 text-xs"
                    >
                      <td className={`${rowHeight}`}>{order.icon}</td>
                      <td className={`${rowHeight}`}>{order.category}</td>
                      <td className={`${rowHeight}`}>{order.referaral}</td>
                      <td className={`${rowHeight}`}>{order.numProducts}</td>

                      <td className={`${rowHeight}`}>
                        <div
                          className={` ${statusColorClass}  text-center text-white rounded-2xl text-xs py-1 px-2`}
                        >
                          {order.status}
                        </div>
                      </td>
                      <td className={`${rowHeight}`}>
                        <div className="flex items-center justify-center gap-4">
                          <button
                            className=" border-2 p-2.5 border-cyan-500 rounded-md text-cyan-500"
                            onClick={openEditModal}
                          >
                            <FaEdit />
                          </button>
                          <button
                            className=" border-2 p-2.5 border-cyan-500 rounded-md text-cyan-500"
                            onClick={openViewModal}
                          >
                            <FiEye />
                          </button>
                          <button
                            onClick={openBlockModal}
                            className=" border-2 p-2.5 border-red-500 rounded-md text-red-500"
                          >
                            <RiDeleteBin2Line />
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

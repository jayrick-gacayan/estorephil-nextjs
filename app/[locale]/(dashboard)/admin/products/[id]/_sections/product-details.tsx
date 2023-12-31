"use client";
import { CiCircleCheck, CiEdit } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import ProductDetailsInfo from "../_components/product-details-info";
import { IoIosArrowBack, IoMdClose, IoMdCloudUpload } from "react-icons/io";
import { useRef, useState } from "react";
import CustomSelect from "@/app/[locale]/_components/custom-select";
import Image from "next/image";
import { BsPlus } from "react-icons/bs";

export default function ProductDetails() {
  const [interviewStatus, setInterviewStatus] = useState("Active");
  const statusSelectRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };
  const [isDeactivateModalOpen, setDeactivateModalOpen] = useState(false);
  const openDeactivateModal = () => {
    setDeactivateModalOpen(true);
  };

  const closeDeactivateModal = () => {
    setDeactivateModalOpen(false);
  };
  return (
    <>
      {isDeactivateModalOpen && (
        <div className="z-[999] fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="flex flex-col justify-between bg-white h-[15rem] rounded-md w-[40rem] items-center p-8 gap-2">
            <div className="flex flex-col items-center gap-5 ">
              <h2 className="text-xl font-bold mb-4">Deactivate Seller</h2>
              <div>Are you sure to deactivate seller?</div>
            </div>
            <div className="gap-3 flex flex-row">
              <button
                onClick={closeDeactivateModal}
                className="text-white bg-red-500 px-4 py-2 rounded-md w-[10rem]">
                Confirm
              </button>
              <button
                onClick={closeDeactivateModal}
                className="text-cyan-500 border-cyan-500 border px-4 py-2 rounded-md w-[10rem]">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
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
      <div className="flex justify-evenly gap-5">
        <div className="bg-white grow border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm p-5 h-min ">
          <div className="space-y-8 ">
            <div className="flex justify-between ">
              <div className="flex items-center gap-2 ">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={"/static_images/costco.png"}
                    alt={""}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="font-bold text-lg">Costco</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-500 rounded w-min h-min px-3 py-1.5 flex items-center text-white cursor-pointer">
                  <div>
                    <IoIosArrowBack />
                  </div>
                  <div>Products</div>
                </div>
                <div
                  className={`text-white rounded-full h-auto ${
                    interviewStatus == "Inactive"
                      ? "bg-red-500"
                      : "bg-green-500"
                  }`}>
                  <CustomSelect
                    dropdownColor="bg-white "
                    onSelect={(value: string) => {
                      setInterviewStatus(value);
                    }}
                    ref={statusSelectRef}
                    labelText={""}
                    items={["Active", "Inactive"]}
                    value={interviewStatus}
                    placeholder={"Status"}
                    visible={visible}
                    setVisible={setVisible}
                    hoverColor={"hover:bg-green-300 hover:text-white"}
                    selectedColor={`${
                      interviewStatus == "Inactive"
                        ? "bg-red-500"
                        : "bg-green-500"
                    }`}
                  />
                </div>

                <div className="text-3xl text-green-500 ">
                  <FaCheckCircle />
                </div>
              </div>
            </div>

            <ProductDetailsInfo
              label={"Item Number:"}
              data={" Item 5015591 Model 395960"}
            />
            <div className="flex gap-2">
              <div>
                <Image
                  src={"/static_images/img1.png"}
                  alt={""}
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <Image
                  src={"/static_images/img2.jpg"}
                  alt={""}
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <Image
                  src={"/static_images/img3.jpg"}
                  alt={""}
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <Image
                  src={"/static_images/img4.jpg"}
                  alt={""}
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <ProductDetailsInfo label={"Name:"} data={"Spam"} />

            <ProductDetailsInfo
              label={"Description:"}
              data={
                "Luncheon meat​3 × 340 g Fully-cooked 100% pure pork and ham Reduced sodium"
              }
            />
            <ProductDetailsInfo label={"Category:"} data={"Grocery"} />
            <ProductDetailsInfo label={"Referral %:"} data={"%Update"} />
            <ProductDetailsInfo label={"Card Fee (%):"} data={"%"} />
            <ProductDetailsInfo label={"Product Weight:"} data={"4.08kgs"} />
            <ProductDetailsInfo
              label={"Product Dimension:"}
              data={"33 x 25 x 9"}
            />
            <ProductDetailsInfo label={"Quantity:"} data={"99"} />
            <ProductDetailsInfo
              label={"Shipment Dimension:"}
              data={"33 x 24 x 8"}
            />
            <ProductDetailsInfo label={"Product Origin:"} data={"Canada"} />
            <ProductDetailsInfo label={"Unit Cost:"} data={"$29.97"} />
            <ProductDetailsInfo label={"Currency:"} data={"C$"} />
          </div>
        </div>
        <div className="bg-white grow border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm p-5 h-min">
          <div className="space-y-4">
            <ProductDetailsInfo label={"Store Type:"} data={""} />
            <div className="border-b w-full"></div>
            <div className="h-[1.5rem]"></div>
            <ProductDetailsInfo
              label={"Registration Type:"}
              data={
                <div className="w-min bg-green-500 rounded-xl text-white px-2 py-1 text-xs text-end">
                  Active
                </div>
              }
            />
            <ProductDetailsInfo
              label={"Date Registered:"}
              data={"10/09/2023"}
            />
            <ProductDetailsInfo label={"Date Approved:"} data={"10/09/2023"} />
            <ProductDetailsInfo label={"Notes:"} data={""} />
            <div className="h-[1.5rem]"></div>
            <div className="border-b w-full"></div>
            <div className="h-[1.5rem]"></div>
            <ProductDetailsInfo
              label={"Store Details:"}
              data={
                <button
                  className="w-min bg-blue-500 rounded-xl text-white px-2 py-1 text-xl"
                  onClick={openEditModal}>
                  <CiEdit />
                </button>
              }
            />
            <ProductDetailsInfo label={"Branches:"} data={"1"} />
            <ProductDetailsInfo label={"Owner:"} data={"Costco Owner"} />
            <ProductDetailsInfo
              label={"Contact Mobile No.:"}
              data={"7786888392"}
            />
            <ProductDetailsInfo
              label={"Contact Email Address:"}
              data={"lourdes.garcia@shaw.ca"}
            />
            <div className="h-[1.5rem]"></div>
            <div className="border-b w-full"></div>
            <div className="h-[1.5rem]"></div>
            <ProductDetailsInfo
              label={"Branch Details:"}
              data={<div className="text-green-500">Main Branch</div>}
            />
            <ProductDetailsInfo label={"Branch Name:"} data={"12345"} />
            <ProductDetailsInfo label={"City:"} data={"Vancouver"} />
            <div className="h-[1.5rem]"></div>
            <div className="border-b w-full"></div>
            <div className="h-[1.5rem]"></div>
            <ProductDetailsInfo label={"Payment Information:"} data={""} />
            <ProductDetailsInfo label={"Bank Name:"} data={"RBC"} />
            <ProductDetailsInfo label={"Account Number:"} data={"12345"} />
            <ProductDetailsInfo label={"Bank Branch:"} data={"RBC"} />
            <div className="h-[1.5rem]"></div>
            <div className="border-b w-full"></div>
            <div className="h-[1.5rem]"></div>
            <ProductDetailsInfo label={"Document Licenses:"} data={""} />
            <label className="bg-green-500 rounded-md px-3 py-1.5 flex w-min text-white items-center gap-2 cursor-pointer">
              <input type="file" className="hidden" />
              <div>
                <IoMdCloudUpload />
              </div>
              <div>Upload</div>
            </label>
            <div className="h-[1.5rem]"></div>
            <div className="border-b w-full"></div>
            <div className="h-[1.5rem]"></div>
            <div className="text-xs font-semibold flex  items-center gap-1">
              <div>Admin Note</div>
              <div>
                <FaCheckCircle />
              </div>
            </div>
            <textarea className="w-full border resize-none outline-none h-[10rem]" />
            <div className="h-[1.5rem]"></div>
            <div className="border-b w-full"></div>
            <div className="h-[1.5rem]"></div>
            <div>Profile Completion</div>
            <div className="flex gap-5 items-center ">
              <div className="border w-full rounded overflow-hidden ">
                <div className="w-[50%] bg-primary h-full py-1" />
              </div>
              <div className=" text-xs">50%</div>
            </div>

            <div className="border-b w-full h-[1.5rem]" />
            <div
              className=" w-full gap-5 flex-1 bg-red-500 text-white rounded-md px-5 py-2 text-center text-xs cursor-pointer "
              onClick={openDeactivateModal}>
              Deactivate
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

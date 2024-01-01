"use client";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
export default function TaxRulesItem() {
  const orders = [
    {
      taxCode: "GST",
      taxDescription: "Canada Tax",
      receiptDescription: "Cad",
      entity: "Product",
      productCategory: "All",
      product: "All",
      sellerCountry: "Canada",
      sellerProvince: "British Columbia",
      destinationCountry: "Philippines",
      destinationProvince: "Manila",
      rate: "	0.0",
      rateFlatAmount: "	0.0",
      thresholdQuantity: "5",
      thresholdAmount: "	10000.0",
      threshouldCurrency: "₱",
    },
    {
      taxCode: "GST",
      taxDescription: "Canada Tax",
      receiptDescription: "Cad",
      entity: "Product",
      productCategory: "All",
      product: "All",
      sellerCountry: "Canada",
      sellerProvince: "British Columbia",
      destinationCountry: "Philippines",
      destinationProvince: "Manila",
      rate: "	0.0",
      rateFlatAmount: "	0.0",
      thresholdQuantity: "5",
      thresholdAmount: "	10000.0",
      threshouldCurrency: "₱",
    },
    {
      taxCode: "GST",
      taxDescription: "Canada Tax",
      receiptDescription: "Cad",
      entity: "Product",
      productCategory: "All",
      product: "All",
      sellerCountry: "Canada",
      sellerProvince: "British Columbia",
      destinationCountry: "Philippines",
      destinationProvince: "Manila",
      rate: "	0.0",
      rateFlatAmount: "	0.0",
      thresholdQuantity: "5",
      thresholdAmount: "	10000.0",
      threshouldCurrency: "₱",
    },
    {
      taxCode: "GST",
      taxDescription: "Canada Tax",
      receiptDescription: "Cad",
      entity: "Product",
      productCategory: "All",
      product: "All",
      sellerCountry: "Canada",
      sellerProvince: "British Columbia",
      destinationCountry: "Philippines",
      destinationProvince: "Manila",
      rate: "	0.0",
      rateFlatAmount: "	0.0",
      thresholdQuantity: "5",
      thresholdAmount: "	10000.0",
      threshouldCurrency: "₱",
    },
    {
      taxCode: "GST",
      taxDescription: "Canada Tax",
      receiptDescription: "Cad",
      entity: "Product",
      productCategory: "All",
      product: "All",
      sellerCountry: "Canada",
      sellerProvince: "British Columbia",
      destinationCountry: "Philippines",
      destinationProvince: "Manila",
      rate: "	0.0",
      rateFlatAmount: "	0.0",
      thresholdQuantity: "5",
      thresholdAmount: "	10000.0",
      threshouldCurrency: "₱",
    },
    {
      taxCode: "GST",
      taxDescription: "Canada Tax",
      receiptDescription: "Cad",
      entity: "Product",
      productCategory: "All",
      product: "All",
      sellerCountry: "Canada",
      sellerProvince: "British Columbia",
      destinationCountry: "Philippines",
      destinationProvince: "Manila",
      rate: "	0.0",
      rateFlatAmount: "	0.0",
      thresholdQuantity: "5",
      thresholdAmount: "	10000.0",
      threshouldCurrency: "₱",
    },
    {
      taxCode: "GST",
      taxDescription: "Canada Tax",
      receiptDescription: "Cad",
      entity: "Product",
      productCategory: "All",
      product: "All",
      sellerCountry: "Canada",
      sellerProvince: "British Columbia",
      destinationCountry: "Philippines",
      destinationProvince: "Manila",
      rate: "	0.0",
      rateFlatAmount: "	0.0",
      thresholdQuantity: "5",
      thresholdAmount: "	10000.0",
      threshouldCurrency: "₱",
    },
    {
      taxCode: "GST",
      taxDescription: "Canada Tax",
      receiptDescription: "Cad",
      entity: "Product",
      productCategory: "All",
      product: "All",
      sellerCountry: "Canada",
      sellerProvince: "British Columbia",
      destinationCountry: "Philippines",
      destinationProvince: "Manila",
      rate: "	0.0",
      rateFlatAmount: "	0.0",
      thresholdQuantity: "5",
      thresholdAmount: "	10000.0",
      threshouldCurrency: "₱",
    },
    {
      taxCode: "GST",
      taxDescription: "Canada Tax",
      receiptDescription: "Cad",
      entity: "Product",
      productCategory: "All",
      product: "All",
      sellerCountry: "Canada",
      sellerProvince: "British Columbia",
      destinationCountry: "Philippines",
      destinationProvince: "Manila",
      rate: "	0.0",
      rateFlatAmount: "	0.0",
      thresholdQuantity: "5",
      thresholdAmount: "	10000.0",
      threshouldCurrency: "₱",
    },
    {
      taxCode: "GST",
      taxDescription: "Canada Tax",
      receiptDescription: "Cad",
      entity: "Product",
      productCategory: "All",
      product: "All",
      sellerCountry: "Canada",
      sellerProvince: "British Columbia",
      destinationCountry: "Philippines",
      destinationProvince: "Manila",
      rate: "	0.0",
      rateFlatAmount: "	0.0",
      thresholdQuantity: "5",
      thresholdAmount: "	10000.0",
      threshouldCurrency: "₱",
    },
  ];
  const rowHeight = "px-4 h-[4.25rem]";
  const [isChargesDialogVisible, setIsChargesDialogVisible] = useState(false);
  const openChargesDialog = () => {
    setIsChargesDialogVisible(true);
  };

  const closeChargesDialog = () => {
    setIsChargesDialogVisible(false);
  };
  return (
    <>
      {isChargesDialogVisible && (
        <div className="fixed top-0 left-0 w-screen h-screen z-[999] flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="flex flex-col justify-between bg-white h-[25rem] rounded-md w-[40rem] items-center p-8 gap-2">
            <div className="flex flex-col items-center gap-5 ">
              <h2 className="text-xl font-bold mb-4">Charges</h2>
              <div className="mb-4 flex flex-col ">
                <label className="block text-sm font-medium text-gray-700">
                  Stripe Fee:
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 border focus:border-blue-500 focus:outline-none w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Stripe Additional Cost:
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 border focus:border-blue-500 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="gap-3 flex flex-col">
              <button
                onClick={closeChargesDialog}
                className="text-white bg-green-500 px-4 py-2 rounded-md w-[10rem]">
                Update
              </button>
              <button
                onClick={closeChargesDialog}
                className="text-white bg-red-500 px-4 py-2 rounded-md w-[10rem]">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col h-full ">
        <div className="  h-full flex flex-col border-2 bg-white rounded-xl border-white shadow-2xl ">
          <div className="flex justify-between items-center pr-5">
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
            <button
              className="text-sm font-bold text-white bg-[#23B7E5] flex items-center py-2 px-3 rounded-lg"
              onClick={openChargesDialog}>
              Charges
            </button>
          </div>

          <div className="h-[41.125rem] overflow-auto w-[100rem] ">
            <table className={`w-full `}>
              <thead>
                <tr className="text-gray-600 border-t-2 border-b-2 bg-white text-left text-sm">
                  <th className="px-4 py-2 whitespace-nowrap">Tax Code</th>
                  <th className="px-4 py-2 whitespace-nowrap">
                    Tax Description
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap">
                    Receipt Description
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap">Entity</th>
                  <th className="px-4 py-2 whitespace-nowrap">
                    Product Category
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap">Product</th>
                  <th className="px-4 py-2 whitespace-nowrap">
                    Seller Country
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap">
                    Seller Province
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap">
                    Destination Country
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap">
                    Destination Province
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap">Rate %</th>
                  <th className="px-4 py-2 whitespace-nowrap">
                    Rate Flat Amount
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap">
                    Threshold Quantity
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap">
                    Threshold Amount
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap">
                    Threshold Currency
                  </th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => {
                  return (
                    <tr
                      key={order.taxCode}
                      className=" border-t-2 border-b-2 even:bg-white odd:bg-gray-100 text-xs">
                      <td
                        className={`${rowHeight} text-cyan-500 hover:underline`}>
                        <Link href={"/admin/tax-rules/1"}>
                          {" "}
                          {order.taxCode}
                        </Link>
                      </td>

                      <td className={`${rowHeight}`}>{order.taxDescription}</td>
                      <td className={`${rowHeight}`}>
                        {order.receiptDescription}
                      </td>
                      <td className={`${rowHeight}`}>{order.entity}</td>
                      <td className={`${rowHeight}`}>
                        {order.productCategory}
                      </td>
                      <td className={`${rowHeight}`}>{order.product}</td>
                      <td className={`${rowHeight}`}>{order.sellerCountry}</td>
                      <td className={`${rowHeight}`}>{order.sellerProvince}</td>
                      <td className={`${rowHeight}`}>
                        {order.destinationCountry}
                      </td>
                      <td className={`${rowHeight}`}>
                        {order.destinationProvince}
                      </td>
                      <td className={`${rowHeight}`}>{order.rate}</td>
                      <td className={`${rowHeight}`}>{order.rateFlatAmount}</td>
                      <td className={`${rowHeight}`}>
                        {order.thresholdQuantity}
                      </td>
                      <td className={`${rowHeight}`}>
                        {order.thresholdAmount}
                      </td>
                      <td className={`${rowHeight}`}>
                        {order.threshouldCurrency}
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

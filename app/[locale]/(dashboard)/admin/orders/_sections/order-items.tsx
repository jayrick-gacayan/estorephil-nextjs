import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";

export default function OrderItems() {
  const orders = [
    {
      orderNo: "9",
      customer: "Customer Name",
      location: "Philippines",
      orderDate: "November 14, 2023",
      orderType: "0.2",
      status: "Cancelled",
      quantity: "	1",
      netAmount: "	50.0",
    },
    {
      orderNo: "9",
      customer: "Customer Name",
      location: "Philippines",
      orderDate: "November 14, 2023",
      orderType: "0.2",
      status: "Cancelled",
      quantity: "	1",
      netAmount: "	50.0",
    },
    {
      orderNo: "9",
      customer: "Customer Name",
      location: "Philippines",
      orderDate: "November 14, 2023",
      orderType: "0.2",
      status: "Cancelled",
      quantity: "	1",
      netAmount: "	50.0",
    },
    {
      orderNo: "9",
      customer: "Customer Name",
      location: "Philippines",
      orderDate: "November 14, 2023",
      orderType: "0.2",
      status: "Cancelled",
      quantity: "	1",
      netAmount: "	50.0",
    },
    {
      orderNo: "9",
      customer: "Customer Name",
      location: "Philippines",
      orderDate: "November 14, 2023",
      orderType: "0.2",
      status: "Cancelled",
      quantity: "	1",
      netAmount: "	50.0",
    },
    {
      orderNo: "9",
      customer: "Customer Name",
      location: "Philippines",
      orderDate: "November 14, 2023",
      orderType: "0.2",
      status: "Cancelled",
      quantity: "	1",
      netAmount: "	50.0",
    },
  ];
  const rowHeight = "px-4 h-[4.25rem]";

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
                <th className="px-4 py-2 ">Order #</th>
                <th className="px-4 py-2 ">Customer</th>
                <th className="px-4 py-2 ">Location</th>
                <th className="px-4 py-2 ">Order Date</th>
                <th className="px-4 py-2 ">Order Type</th>
                <th className="px-4 py-2 text-center">Status</th>
                <th className="px-4 py-2 ">Quantity</th>
                <th className="px-4 py-2 ">Net Amount</th>
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

                  case "Cancelled":
                    statusColorClass = "bg-red-500";
                    break;
                  default:
                    statusColorClass = "";
                    break;
                }
                return (
                  <tr
                    key={order.orderNo}
                    className=" border-t-2 border-b-2 even:bg-white odd:bg-gray-100 text-xs">
                    <td className={`${rowHeight}`}>{order.orderNo}</td>
                    <td className={`${rowHeight}`}>{order.customer}</td>
                    <td className={`${rowHeight}`}>{order.location}</td>
                    <td className={`${rowHeight}`}>{order.orderDate}</td>
                    <td className={`${rowHeight}`}>{order.orderType}</td>
                    <td className={`${rowHeight}`}>
                      <div
                        className={` ${statusColorClass}  text-center text-white rounded-2xl text-xs py-1 px-2`}>
                        {order.status}
                      </div>
                    </td>
                    <td className={`${rowHeight}`}>{order.quantity}</td>
                    <td className={`${rowHeight}`}>{order.netAmount}</td>
                    <td className={`${rowHeight}`}>
                      <div className="flex items-center justify-center gap-4">
                        <Link
                          className=" border-2 p-2.5 border-cyan-500 rounded-md text-cyan-500 hover:bg-cyan-500 hover:text-white hover:scale-150 duration-300 cursor-pointer"
                          href={"/admin/orders/1"}>
                          <FaEye />
                        </Link>
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
  );
}

import { FiEye } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
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
                    className=" border-t-2 border-b-2 even:bg-white odd:bg-gray-100 text-xs">
                    <td className={`${rowHeight}`}>{order.icon}</td>
                    <td className={`${rowHeight}`}>{order.category}</td>
                    <td className={`${rowHeight}`}>{order.referaral}</td>
                    <td className={`${rowHeight}`}>{order.numProducts}</td>

                    <td className={`${rowHeight}`}>
                      <div
                        className={` ${statusColorClass}  text-center text-white rounded-2xl text-xs py-1 px-2`}>
                        {order.status}
                      </div>
                    </td>
                    <td className={`${rowHeight}`}>
                      <div className="flex items-center justify-center gap-4">
                        <div className=" border-2 p-2.5 border-cyan-500 rounded-md text-cyan-500">
                          <FaEdit />
                        </div>
                        <div className=" border-2 p-2.5 border-cyan-500 rounded-md text-cyan-500">
                          <FiEye />
                        </div>
                        <div className=" border-2 p-2.5 border-red-500 rounded-md text-red-500">
                          <RiDeleteBin2Line />
                        </div>
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
  );
}

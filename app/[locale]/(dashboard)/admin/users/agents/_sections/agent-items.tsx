import { FiEye } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdOutlineLockReset } from "react-icons/md";
import Image from "next/image";
export default function AgentItems() {
  const orders = [
    {
      userID: "1",
      photo: "",
      company: "Koda Magic Store",
      lastName: "Villamor",
      firstName: "Jezzel",
      email: "villamorjezzel@kodakollectiv.com",
      referral: "	1.5",
      status: "Active",
    },
    {
      userID: "1",
      photo: "",
      company: "Koda Magic Store",
      lastName: "Villamor",
      firstName: "Jezzel",
      email: "villamorjezzel@kodakollectiv.com",
      referral: "	1.5",
      status: "Active",
    },
    {
      userID: "1",
      photo: "",
      company: "Koda Magic Store",
      lastName: "Villamor",
      firstName: "Jezzel",
      email: "villamorjezzel@kodakollectiv.com",
      referral: "	1.5",
      status: "Active",
    },
    {
      userID: "1",
      photo: "",
      company: "Koda Magic Store",
      lastName: "Villamor",
      firstName: "Jezzel",
      email: "villamorjezzel@kodakollectiv.com",
      referral: "	1.5",
      status: "Active",
    },
    {
      userID: "1",
      photo: "",
      company: "Koda Magic Store",
      lastName: "Villamor",
      firstName: "Jezzel",
      email: "villamorjezzel@kodakollectiv.com",
      referral: "	1.5",
      status: "Active",
    },
    {
      userID: "1",
      photo: "",
      company: "Koda Magic Store",
      lastName: "Villamor",
      firstName: "Jezzel",
      email: "villamorjezzel@kodakollectiv.com",
      referral: "	1.5",
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
                <th className="px-4 py-2 ">ID</th>
                <th className="px-4 py-2 ">PHOTO</th>
                <th className="px-4 py-2 ">COMPANY</th>
                <th className="px-4 py-2 ">LAST NAME</th>
                <th className="px-4 py-2 ">FIRST NAME</th>
                <th className="px-4 py-2 ">EMAIL</th>
                <th className="px-4 py-2 ">REFERRAL FEE</th>
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
                    key={order.userID}
                    className=" border-t-2 border-b-2 even:bg-white odd:bg-gray-50 text-xs">
                    <td className={`${rowHeight}`}>{order.userID}</td>
                    <td className={`${rowHeight}`}>
                      <div className="w-10 h-10 rounded-full overflow-hidden ">
                        <Image
                          className="w-10 h-10"
                          src={`/static-images/profileavatar.jpg`}
                          alt={""}
                          width={40}
                          height={40}
                        />
                      </div>
                    </td>
                    <td className={`${rowHeight}`}>{order.company}</td>
                    <td className={`${rowHeight}`}>{order.lastName}</td>
                    <td className={`${rowHeight}`}>{order.firstName}</td>
                    <td className={`${rowHeight}`}>{order.email}</td>
                    <td className={`${rowHeight}`}>{order.referral}</td>

                    <td className={`${rowHeight}`}>
                      <div
                        className={` ${statusColorClass}  text-center text-white rounded-2xl text-xs py-1 px-2`}>
                        {order.status}
                      </div>
                    </td>
                    <td className={`${rowHeight}`}>
                      <div className="flex items-center justify-center gap-4">
                        <div className=" border-2 p-2.5 border-cyan-500 rounded-md text-cyan-500 hover:bg-cyan-500 hover:text-white hover:scale-150 duration-300 cursor-pointer">
                          <FaEdit />
                        </div>
                        <div className=" border-2 p-2.5 border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white hover:scale-150 duration-300 cursor-pointer">
                          <RiDeleteBin2Line />
                        </div>
                        <div className=" border-2 p-2.5 border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white hover:scale-150 duration-300 cursor-pointer">
                          <MdOutlineLockReset />
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

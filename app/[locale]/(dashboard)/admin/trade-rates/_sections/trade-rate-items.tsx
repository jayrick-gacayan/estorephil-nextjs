import { FiEye } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
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
                      <Link href={""}> {order.tradeID}</Link>
                    </td>
                    <td className={`${rowHeight} text-cyan-500`}>
                      <Link href={""}> {order.dateTime}</Link>
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
  );
}

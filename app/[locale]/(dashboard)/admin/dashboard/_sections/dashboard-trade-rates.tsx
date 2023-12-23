import Link from "next/link";

export default function DashboardTradeRates() {
  const tradeRates = [
    {
      id: "TR002",
      dateTime: "09/18/22 19:37 PM",
      currencyFrom: "CS",
      currencyTo: "",
      orderRate: 43.2,
      tradingRate: 43.16,
      notes: "",
    },
    {
      id: "TR003",
      dateTime: "10/26/22 22:37 PM",
      currencyFrom: "CS",
      currencyTo: "CS",
      orderRate: 10,
      tradingRate: 1.0,
      notes: "",
    },
    {
      id: "TR001",
      dateTime: "04/10/23 22:29 PM",
      currencyFrom: "",
      currencyTo: "CS",
      orderRate: 0.025,
      tradingRate: 0.024,
      notes: "",
    },
    {
      id: "TR004",
      dateTime: "10/22/23 21:27 PM",
      currencyFrom: "P",
      currencyTo: "P",
      orderRate: 0.2,
      tradingRate: 0.4,
      notes: "",
    },
  ];

  return (
    <div className="flex justify-between ">
      <div className="bg-white gap-5 flex flex-col border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm w-[73rem] p-8 text-xs">
        <div className="">TRADE RATES</div>
        <table className="table w-full text-left table-hover">
          <thead>
            <tr className="text-white">
              <th className="px-4 py-2 font-semibold border-b border-gray-200 bg-[#90bcf4]">
                Trade ID
              </th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200 bg-[#90bcf4]">
                Date/Time
              </th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200 bg-[#90bcf4]">
                Currency From
              </th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200 bg-[#90bcf4]">
                Currency To
              </th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200 bg-[#90bcf4]">
                Order Rate
              </th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200 bg-[#90bcf4]">
                Trading Rate
              </th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200 bg-[#90bcf4]">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {tradeRates.map((tradeRate) => (
              <tr key={tradeRate.id}>
                <td className="px-4 py-3 border-b border-gray-200 text-blue-500">
                  <Link href={""}> {tradeRate.id}</Link>
                </td>
                <td className="px-4 py-3 border-b border-gray-200">
                  {tradeRate.dateTime}
                </td>
                <td className="px-4 py-3 border-b border-gray-200">
                  {tradeRate.currencyFrom}
                </td>
                <td className="px-4 py-3 border-b border-gray-200">
                  {tradeRate.currencyTo}
                </td>
                <td className="px-4 py-3 border-b border-gray-200">
                  {tradeRate.orderRate}
                </td>
                <td className="px-4 py-3 border-b border-gray-200">
                  {tradeRate.tradingRate}
                </td>
                <td className="px-4 py-3 border-b border-gray-200">
                  {tradeRate.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

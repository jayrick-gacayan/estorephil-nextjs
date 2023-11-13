import { TradeRates } from "@/models/trade_rates"
import { TradeRatesRowItem } from "../_components/trade_rate_row_item"

const tradeRatesDataArray: TradeRates[] = [
  {
    id: 1,
    date: new Date().toLocaleString(),
    currencyFrom: <>C&#36;</>,
    currencyTo: <>&#8369;</>,
    orderRate: 43.2,
    tradingRate: 43.16,
    notes: ''
  },
  {
    id: 2,
    date: new Date().toLocaleString(),
    currencyFrom: <>C&#36;</>,
    currencyTo: <>&#8369;</>,
    orderRate: 43.2,
    tradingRate: 43.16,
    notes: ''
  },
  {
    id: 3,
    date: new Date().toLocaleString(),
    currencyFrom: <>C&#36;</>,
    currencyTo: <>&#8369;</>,
    orderRate: 43.2,
    tradingRate: 43.16,
    notes: ''
  },
  {
    id: 4,
    date: new Date().toLocaleString(),
    currencyFrom: <>C&#36;</>,
    currencyTo: <>&#8369;</>,
    orderRate: 43.2,
    tradingRate: 43.16,
    notes: ''
  },

]
export function TradeRatesDataSection() {

  return (
    <div className='bg-white border rounded border-neutral-300 border-t-4 p-4 space-y-2'>
      <h4 className='font-[500]'>TRADE RATES</h4>
      <div className='block w-full overflow-auto'>
        <table className='w-full min-w-[768px] lg:min-w-full'>
          <thead>
            <tr className='bg-primary-light text-white [&>th]:p-2'>
              <th>Trade ID</th>
              <th>Date/Time</th>
              <th>Currency From</th>
              <th>Currency To</th>
              <th>Order Rate</th>
              <th>Trading Rate</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody className="text-center [&>tr]:border-b [&>tr]:border-b-[#eee]">
            {
              tradeRatesDataArray.map((tradeRate: TradeRates) => {
                return (<TradeRatesRowItem key={`trade-rate-data-row-admin-${tradeRate.id}`} tradeRate={tradeRate} />)
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
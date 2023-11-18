import { TradeRates } from '@/models/trade_rates'

export function TradeRatesRowItem({ tradeRate }: { tradeRate: TradeRates }): JSX.Element {
  let tradeRateRoundId = Math.round(tradeRate.id / 10);
  return (
    <tr className='[&>td]:p-2'>
      <td className='text-primary-light'>
        TR{tradeRateRoundId > 9 ? tradeRate.id : tradeRateRoundId > 0 ? '0' + tradeRate.id : '00' + tradeRate.id}
      </td>
      <td className='text-inherit'>{tradeRate.date}</td>
      <td className='text-inherit'>{tradeRate.currencyFrom}</td>
      <td className='text-inherit'>{tradeRate.currencyTo}</td>
      <td className='text-inherit'>{tradeRate.orderRate}</td>
      <td className='text-inherit'>{tradeRate.tradingRate}</td>
      <td className='text-inherit'>{tradeRate.notes}</td>
    </tr>
  )
}
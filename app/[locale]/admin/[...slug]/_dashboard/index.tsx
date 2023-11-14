import { ModelCardContainer } from './_sections/model_card_container';
import { OrdersDataSection } from './_sections/orders_data';
import { TopSellersDataSection } from './_sections/top_sellers_data';
import { TradeRatesDataSection } from './_sections/trade_rates_data';

export function DashbaordContent() {
  return (
    <>
      <ModelCardContainer />
      <div className='flex lg:flex-row flex-col-reverse gap-4'>
        <div className='flex-1 space-y-3'>
          <OrdersDataSection />
          <TradeRatesDataSection />
          <TopSellersDataSection />
        </div>
        <div className='w-[312px] flex-none'>
          <div className='bg-white border rounded border-neutral-300 border-t-4 p-4 space-y-2'>
            <h4 className='font-[500]'>Pending Sellers</h4>
          </div>
        </div>
      </div>
    </>
  )
}
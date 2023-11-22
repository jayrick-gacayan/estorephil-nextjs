import Link from 'next-intl/link';
import { FaCcAmex, FaCcDiscover, FaCcJcb, FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa6';

export default function SummaryCheckout() {
  return (
    <div className='w-[384px] bg-[#F8FBFE] border-l border-secondary-light'>
      <div className="p-8">
        <div className='border-b border-b-transparent'>
          <div className='text-[44px] leading-0 font-[500]'>SUMMARY</div>
        </div>
      </div>
      <div className="px-8 pt-4">
        <div className="text-tertiary space-y-2">
          <div className="space-y-2 pb-2 border-b border-tertiary">
            <div className="flex">
              <div className="flex-1">ITEMS</div>
              <div className="text-primary">10</div>
            </div>
            <div className="flex">
              <div className="flex-1">SUBTOTAL</div>
              <div className="flex-none w-auto">
                C&#36; <span className="text-secondary">{(228).toFixed(2)}</span>
              </div>
            </div>
            <div className="flex">
              <div className="flex-1">SALES TAX</div>
              <div className="flex-none w-auto"><span className="text-success">Included</span></div>
            </div>
          </div>
          <div className="space-y-2 py-2 border-b border-tertiary">
            <div>SHIPPING &#38; HANDLING</div>
            <div className="space-y-2 pl-2 pb-2">
              <div className="flex">
                <div className="flex-1">No. of Boxes</div>
                <div className="flex-none w-auto">
                  <span className="text-secondary">2</span>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1">Unit Cost: Box 1</div>
                <div className="flex-none w-auto">
                  C&#36; <span className="text-secondary">{(25).toFixed(2)}</span>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1">Unit Cost: Box 2</div>
                <div className="flex-none w-auto">
                  C&#36; <span className="text-secondary">{(25).toFixed(2)}</span>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1">S&#38;H Tax</div>
                <div className="flex-none w-auto">
                  <span className="text-success">Inclusive</span>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1">Additional Import Tax</div>
                <div className="flex-none w-auto">
                  <span className="text-secondary">10&#37;</span>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1">Total Shipping Cost</div>
                <div className="flex-none w-auto">
                  C&#36; <span className="text-secondary">{(25).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-2 border-b border-tertiary">
            <div className="flex">
              <div className="flex-1">PH</div>
              <div className="flex-none w-auto">
                <span className="text-secondary">10&#37;</span>
              </div>
            </div>
          </div>
          <div className="pb-2">
            <div className="flex items-center">
              <div className="flex-1">TOTAL</div>
              <div className="flex-none w-auto text-[20px]">
                C&#36; <span className="text-secondary">{(25).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        <Link href="/" className="text-primary block text-right text-sm py-2 underline cursor-pointer hover:text-primary-light">APPLY A PROMO CODE</Link>
        <button className='border border-tertiary-dark w-full bg-tertiary-dark rounded text-white text-center p-4 hover:bg-secondary-light'>
          CHECK OUT
        </button>
      </div>
      <div className="px-8 pt-20 space-y-8">
        <div className='block space-y-2 text-tertiary'>
          <h3 className='font-[500] text-[26px] leading-0 text-secondary'>SUPPORTED CARDS</h3>
          <div className='block space-x-2'>
            <FaCcVisa className='inline-block w-10 h-10' />
            <FaCcMastercard className='inline-block w-10 h-10' />
            <FaCcJcb className='inline-block w-10 h-10' />
            <FaCcDiscover className='inline-block w-10 h-10' />
            <FaCcPaypal className='inline-block w-10 h-10' />
            <FaCcAmex className='inline-block w-10 h-10' />
          </div>
        </div>
        <div className='block space-y-2 text-tertiary'>
          <h3 className='font-[500] text-[26px] leading-0 text-secondary'>NEED HELP?</h3>
          <div className='block space-y-1'>
            <div>WHAT PAYMENT METHODS CAN I USE?</div>
            <div>HOW DO I USE A PROMO CODE?</div>
            <div>WHERE TO GET PROMO CODE?</div>
            <div>HOW SECURE IS MY PURCHASE?</div>
          </div>
        </div>
      </div>
    </div>
  )
}
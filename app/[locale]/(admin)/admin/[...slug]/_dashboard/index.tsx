import { ModelCardContainer } from './model_card_container';

export function DashbaordContent() {
  return (
    <>
      <ModelCardContainer />
      <div className='flex lg:flex-row flex-col-reverse gap-4'>
        <div className='flex-1 space-y-3'>
          <div className='bg-white border rounded border-neutral-300 border-t-4 overflow-hidden h-48 space-y-2' />
          <div className='bg-white border rounded border-neutral-300 border-t-4 overflow-hidden h-48 space-y-2' />
          <div className='bg-white border rounded border-neutral-300 border-t-4 overflow-hidden h-48 space-y-2' />

        </div>
        <div className='w-[224px] flex-none'>
          <div className='bg-white border rounded border-neutral-300 border-t-4 overflow-hidden h-48'>
            <div className=''></div>
          </div>
        </div>
      </div>
    </>
  )
}
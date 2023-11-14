import { Checkbox } from '@/app/[locale]/_components/checkbox';
import { CategoryCheckbox } from '../../_components/category_checkbox';


export function SearchSidebar() {
  return (
    <div className='sticky top-[200px] left-0 z-10 py-2 flex-none bg-white w-[292px] border-r-2 border-r-secondary-light'>

      <div className='space-y-3 w-3/4 m-auto'>
        <div className='space-y-3'>
          <div className='font-bold'>Related Categories</div>
          <div className='block space-y-4'>
            <CategoryCheckbox category='Camera & Photo' />
            <CategoryCheckbox category='Cell Phone Devices' />
            <CategoryCheckbox category='Collectibles – Entertainment or Sports' />
            <CategoryCheckbox category='Consumer Electronics' />
            <CategoryCheckbox category='Electronics Accessories' />
            <CategoryCheckbox category='Electronics Accessories' />
          </div>
        </div>
        <div className='w-full'>
          <div className='flex gap-1 items-center justify-between w-full'>
            <div className='flex-1'>
              <input type='number' className='w-full rounded p-1 border border-tertiary' placeholder={`\u20B1 MIN`} />
            </div>
            <span className='w-12 flex-none text-center'>&#8212;</span>
            <div className='flex-1'>
              <input type='number' className='w-full rounded p-1 border border-tertiary' placeholder={`\u20B1 MAX`} />
            </div>
          </div>
        </div>
        <div className='space-y-3'>
          <div className='font-bold'>Ships from</div>
          <div className='block space-y-4'>
            <Checkbox labelText='Canada' />
            <Checkbox labelText='Philippines' />
            <Checkbox labelText='USA' />
          </div>
        </div>
      </div>
    </div>
  )

}
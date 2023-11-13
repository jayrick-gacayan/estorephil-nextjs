import { CategoryCheckbox } from '../_components/category_checkbox';

export function CategorySidebar() {
  return (
    <div className='flex-none bg-white w-[292px] border-r-2 border-[#77620038] py-2'>
      <div className='space-y-3 w-fit m-auto'>
        <div className='font-bold'>Categories</div>
        <div className='block space-y-4'>
          <CategoryCheckbox category='3D Printed Products' />
          <CategoryCheckbox category='Automotive & Powerparts' />
          <CategoryCheckbox category='Baby Products' />
          <CategoryCheckbox category='Beauty' />
          <CategoryCheckbox category='Books' />
          <CategoryCheckbox category='Camera & Photo' />
          <CategoryCheckbox category='Cell Phone Devices' />
          <CategoryCheckbox category='Clothing & Accessories' />
          <CategoryCheckbox category='Collectibles – Books' />
          <CategoryCheckbox category='Collectibles – Coins' />
          <CategoryCheckbox category='Consumer Electronics' />
          <CategoryCheckbox category='Electronics Accessories' />
        </div>
      </div>
    </div>
  )
}
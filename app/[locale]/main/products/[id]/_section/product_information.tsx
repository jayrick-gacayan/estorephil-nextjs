import { ProductInfoItem } from '../_components/product_info_item';

export function ProductInformation() {
  return (
    <div className='block p-4 w-full space-y-2'>
      <h4 className='font-bold text-danger'>Product Information</h4>
      <div className='flex w-full'>
        <ProductInfoItem labelText='Package Dimensions' info='23.5 x 14.25 x 8 inches' />
        <ProductInfoItem labelText='Item Weight' info='19.46 pounds' />
        <ProductInfoItem labelText='Manufacturer' info='NutriChef' />
        <ProductInfoItem labelText='ASIN' info='B08TFQ1L9D' />
        <ProductInfoItem labelText='Country Origin' info='Canada' />
        <ProductInfoItem labelText='Item Model Number' info='NCCW12S.5' />
      </div>
    </div>
  )
}
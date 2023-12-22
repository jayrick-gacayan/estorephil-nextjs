import ProductHeaderText from '../../_components/product-header-text'
import { Product } from '@/models/product'

export default function OurProducts({
    products
}: {
    products: Product[]
}) {

    return (
        <div className='max-w-screen-2xl m-auto py-4'>
            <div className='flex mb-2'>
                <ProductHeaderText text='Our Products' />
            </div>
            <div className='flex mb-2 gap-4'>
                {
                    products.length === 0 ? (<div>NO product</div>) :
                        (
                            <>
                                {
                                    products.map((product: Product, index: number) => {
                                        return <></>
                                    })
                                }
                            </>
                        )
                }
            </div>
        </div>
    )
}
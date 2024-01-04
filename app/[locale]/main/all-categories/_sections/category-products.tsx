'use client';

import { useEffect, useRef, useState } from 'react';
import CustomSelect from '@/app/[locale]/_components/custom-select';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { ProductItem } from '../../_components/product-item';
import ProductHeaderText from '../../_components/product-header-text';
import { homeContainer, productContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { RootState, store } from '@/redux/store';
import { ProductRepository } from '@/repositories/product-repository';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../_redux/all-categories-thunk';

import { useSearchParams } from 'next/navigation';
import { searchQueryChanged } from '../_redux/all-categories-slice';
import ProductSort from '../_components/product-sort';

export default function CategoryProducts() {
  const [visible, setVisible] = useState<boolean>(false);
  const categorySelectRef = useRef<HTMLDivElement>(null);
  const locale = useSelector((state: RootState) => state.main).countryPicker.value
  const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository)
  const state = useSelector((state: RootState) => state.allCategories)
  const products = useSelector((state: RootState) => state.allCategories).products
  const sort = useSelector((state: RootState) => state.allCategories).sort
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  useOutsideClick(categorySelectRef, () => { setVisible(false); })
  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (!!searchQuery) {
      dispatch(searchQueryChanged(searchQuery as string))
    }
    store.dispatch(searchProducts(productRepository, locale))
  }, [state.sort])
  return (
    <div className='max-w-screen-2xl m-auto py-4 space-y-4'>
      <div className='flex'>
        <ProductHeaderText text={
          `${state.categoriesSelected.length > 0
            ? (() => {
              if (state.categoriesSelected.length === 2) {
                const categoriesText = state.categoriesSelected.map((category, index) => {
                  if (index === 0) {
                    console.log('category', index, category);
                    return category.toLowerCase();
                  } else {
                    console.log('category', index, category);
                    return ` & ${category.toLowerCase()}`;
                  }
                });

                return `Products under ${categoriesText.join('')}  ${!!sort ? `by ${sort}` : ``}`;
              } else {
                const categoriesText = state.categoriesSelected.map((category, index) => {
                  if (index === state.categoriesSelected.length - 1 && state.categoriesSelected.length != 1) {
                    console.log('category', index, category);

                    return `& ${category.toLowerCase()}`;
                  }
                  else if(index === 0){
                    return `${category.toLowerCase()}`
                  }
                  else {
                    return `, ${category.toLowerCase()}`
                  }
                });
                return `Products under ${categoriesText.join(' ')} ${!!sort ? `by ${sort}` : ``}`;
              }
            })()
            : state.categoriesSelected.length === 0 && state.products.length > 0
              ? `Products ${!!sort ? `by ${sort}` : ``}`
              : 'No products'
          }`}
        />
        <div className='flex-none space-x-2'>
          <span>Sort</span>
          <div className='inline-block w-36'>
            {/* <CustomSelect ref={categorySelectRef} items={['Top Seller', 'Low Seller']}
              value={undefined}
              placeholder='Sort by:'
              labelText={''}
              visible={visible}
              setVisible={setVisible} /> */}
            <ProductSort />
          </div>
        </div>
      </div>
      {
        products.length === 0 ? <div>NO ITEMS</div> :
          (
            <div className='flex flex-row flex-wrap gap-4'>
              {
                products.map((product) => {
                  return (<ProductItem key={`product-item-${product.id}`}
                    product={product}
                    withRatingEvents={false} />)
                })
              }
            </div>
          )
      }
    </div>
  );
}
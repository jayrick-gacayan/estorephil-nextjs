'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { ProductItem } from '../../_components/product-item';
import ProductHeaderText from '../../_components/product-header-text';
import { productContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { RootState, store } from '@/redux/store';
import { ProductRepository } from '@/repositories/product-repository';
import { searchProducts } from '../_redux/all-categories-thunk';
import { useSearchParams } from 'next/navigation';
import { searchQueryChanged, sortChanged } from '../_redux/all-categories-slice';
import { RequestStatus } from '@/models/result';
import Loading from '../../_components/loading';
import { ValidationType } from '@/types/enums/validation-type';
import SelectTagCustom from '@/app/[locale]/_components/select-tag-cutsom';
import { kebabCase, sentenceCase } from 'change-case';
import { AllCategoriesState } from '../_redux/all-categories-state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';

export default function CategoryProducts({ countryCode }: { countryCode: string }) {
  const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository)
  const allCategoriesState: AllCategoriesState = useAppSelector((state: RootState) => state.allCategories)

  const { sort, products } = useMemo(() => {
    return {
      sort: allCategoriesState.sort,
      products: allCategoriesState.products,
    }
  }, [allCategoriesState.products, allCategoriesState.sort]);

  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (!!searchQuery) {
      dispatch(searchQueryChanged(searchQuery as string))
    }
    store.dispatch(searchProducts(productRepository, countryCode))
  }, [allCategoriesState.sort, countryCode]);

  return (
    <div className='max-w-screen-2xl m-auto py-4 space-y-4'>
      <div className='flex'>
        <ProductHeaderText text={
          `${allCategoriesState.categoriesSelected.length > 0
            ? (() => {
              const current = new URLSearchParams(Array.from(searchParams.entries()));
              console.log('categories length: ', allCategoriesState.categoriesSelected.length)
              if (allCategoriesState.categoriesSelected.length === 2) {
                const categoriesText = allCategoriesState.categoriesSelected.map((category, index) => {
                  if (index === 0) {
                    console.log('1')
                    return category?.toLowerCase();
                  } else if (allCategoriesState.categoriesSelected.length === 0 && current.get('search') != undefined || current.get('search') != null) {
                    console.log('2')
                    return `${current.get('search')}`
                  }
                  else {
                    console.log('3')
                    return ` & ${category?.toLowerCase()}`;
                  }
                });

                return `Products under ${categoriesText.join('')}  ${!!sort ? `by ${sort}` : ``}`;
              } else {
                const categoriesText = allCategoriesState.categoriesSelected.map((category, index) => {
                  if (index === allCategoriesState.categoriesSelected.length - 1 && allCategoriesState.categoriesSelected.length != 1) {
                    console.log('A');
                    return `& ${category?.toLowerCase()}`;
                  }
                  else if (index === 0) {
                    console.log('B')
                    return `${category?.toLowerCase()}`
                  }
                  else {
                    console.log('C')
                    return `, ${category?.toLowerCase()}`
                  }
                });
                return `Products under ${categoriesText.join(' ')} ${!!sort ? `by ${sort}` : ``}`;
              }
            })()
            : allCategoriesState.categoriesSelected.length === 0 && allCategoriesState.products.length > 0
              ? `Products ${!!sort ? `by ${sort}` : ``}`
              : 'No products'
          }`}
        />
        <div className='flex-none space-x-2'>
          <span>Sort</span>
          <div className='inline-block w-48'>
            <SelectTagCustom items={['Sort By:', 'Top Seller', 'Lowest Seller', 'Highest Price', 'Lowest Price']}
              onSelect={(item: string) => {
                dispatch(sortChanged(kebabCase(item)))
                const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository);

                store.dispatch(searchProducts(productRepository, countryCode));
              }}
              value={sentenceCase(sort)}
              placeholder='Sort By:'
              optionActiveClassName={(current: string, value: string) => {
                return `${current === value && current !== '' ? `bg-primary text-white` : `bg-inherit hover:bg-primary hover:text-white`}`;
              }}
              valueClassName={(status: ValidationType) => { return 'bg-white border-tertiary-dark has-[input:focus]:border-primary' }} />
          </div>
        </div>
      </div>
      {
        products.length === 0 ? <div>NO ITEMS</div> :
          allCategoriesState.getProductsStatus === RequestStatus.SUCCESS ?
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
            : <>
              <div className='flex items-center justify-center'>
                <Loading /> <p>Loading products</p>
              </div>
            </>
      }
    </div>
  );
}
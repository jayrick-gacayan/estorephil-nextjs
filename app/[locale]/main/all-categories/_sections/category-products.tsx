'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import CustomSelect from '@/app/[locale]/_components/custom-select';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { ProductItem } from '../../_components/product-item';
import ProductHeaderText from '../../_components/product-header-text';
import { productContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { AppDispatch, RootState } from '@/redux/store';
import { ProductRepository } from '@/repositories/product-repository';
import { searchProducts } from '../_redux/all-categories-thunk';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { getProductStatusSet, searchQueryChanged, sortChanged } from '../_redux/all-categories-slice';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { MainState } from '../../_redux/main-state';
import { AllCategoriesState } from '../_redux/all-categories-state';
import { TextInputField } from '@/types/props/text-input-field';
import { Product } from '@/models/product';
import { capitalCase, kebabCase, noCase, sentenceCase } from "change-case";
import { RequestStatus } from '@/types/enums/request-status';

export default function CategoryProducts() {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const dispatch: AppDispatch = useAppDispatch();
  const [visible, setVisible] = useState<boolean>(false);
  const categorySelectRef = useRef<HTMLDivElement>(null);

  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
  const allCategoriesState: AllCategoriesState = useAppSelector((state: RootState) => { return state.allCategories });

  let searchParamsMemo = useMemo(() => { return searchParams; }, [searchParams])
  let countryPicker: TextInputField<string> = useMemo(() => {
    return mainState.countryPicker;
  }, [mainState.countryPicker])

  let products: Product[] = useMemo(() => { return allCategoriesState.products }, [allCategoriesState.products])

  let sort: string = useMemo(() => { return allCategoriesState.sort }, [allCategoriesState.sort]);
  let categoriesSelected = useMemo(() => { return allCategoriesState.categoriesSelected }, [allCategoriesState.categoriesSelected])
  let getProductsStatus = useMemo(() => {
    return allCategoriesState.getProductsStatus;
  }, [allCategoriesState.getProductsStatus]);

  useOutsideClick(categorySelectRef, () => { setVisible(false); })

  useEffect(() => {
    let search: string | null = searchParamsMemo.get('search');
    if (search !== null) {
      dispatch(searchQueryChanged(search))
    }
  }, [searchParamsMemo, dispatch]);


  useEffect(() => {
    dispatch(getProductStatusSet(RequestStatus.WAITING));
    dispatch(getProductStatusSet(RequestStatus.IN_PROGRESS));
    const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository);
    dispatch(searchProducts(productRepository, countryPicker.value))

  }, [sort, countryPicker.value, dispatch, getProductsStatus, categoriesSelected])

  function headerText() {
    let string = '';

    if (categoriesSelected.length === 1) {
      string += categoriesSelected[0]
    }
    else if (categoriesSelected.length === 2) {
      string += categoriesSelected.join(' & ');
    }
    else {

    }

    if (sort !== '') {
      string += ' by ' + capitalCase(sort);
    }

    return string;
  }

  return (
    <div className='max-w-screen-2xl m-auto py-4 space-y-4'>
      <div className='flex'>
        <ProductHeaderText text={
          `${categoriesSelected.length > 0
            ? (() => {
              if (categoriesSelected.length === 2) {
                const categoriesText = categoriesSelected.map((category, index) => {
                  if (index === 0) {
                    return category.toLowerCase();
                  } else {
                    return ` & ${category.toLowerCase()}`;
                  }
                });

                return `Products under ${categoriesText.join('')}  ${!!sort ? `by ${sort}` : ``}`;
              } else {
                const categoriesText = categoriesSelected.map((category, index) => {
                  if (index === categoriesSelected.length - 1 && categoriesSelected.length != 1) {
                    return `& ${category.toLowerCase()}`;
                  }
                  else {
                    return `${category.toLowerCase()}`
                  }
                });
                return `Products under ${categoriesText.join(', ')} ${!!sort ? `by ${sort}` : ``}`;
              }
            })()
            : categoriesSelected.length === 0 && products.length > 0
              ? `Products ${!!sort ? `by ${sort}` : ``}`
              : 'No products'
          }`}
        />
        <div className='flex-none space-x-2'>
          <span>Sort</span>
          <div className='inline-block w-48'>
            <CustomSelect ref={categorySelectRef}
              items={['Sort By:', 'Top Seller', 'Lowest Seller', 'Highest Price', 'Lowest Price']}
              value={sentenceCase(sort)}
              placeholder='Sort by:'
              labelText={''}
              onSelect={(value: string) => {
                dispatch(sortChanged(value !== 'Sort By:' ? kebabCase(noCase(value)) : ''))
              }}
              visible={visible}
              setVisible={setVisible} />
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
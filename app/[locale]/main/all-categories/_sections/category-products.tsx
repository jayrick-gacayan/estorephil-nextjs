'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { ProductItem } from '../../_components/product-item';
import ProductHeaderText from '../../_components/product-header-text';
import { productContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { AppDispatch, RootState } from '@/redux/store';
import { ProductRepository } from '@/repositories/product-repository';
import { searchProducts } from '../_redux/all-categories-thunk';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { getProductStatusSet } from '../_redux/all-categories-slice';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AllCategoriesState } from '../_redux/all-categories-state';
import { Product } from '@/models/product';
import { capitalCase, kebabCase, noCase, sentenceCase } from "change-case";
import { RequestStatus } from '@/types/enums/request-status';
import SelectCustom from '@/app/[locale]/_components/select-custom';
import { usePathname, useRouter } from 'next-intl/client';

export default function CategoryProducts({ countryCode }: { countryCode: string }) {
  const router = useRouter();
  const pathName: string = usePathname();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const dispatch: AppDispatch = useAppDispatch();
  const [visible, setVisible] = useState<boolean>(false);
  const categorySelectRef = useRef<HTMLDivElement>(null);
  const allCategoriesState: AllCategoriesState = useAppSelector((state: RootState) => { return state.allCategories });

  let searchParamsMemo = useMemo(() => { return searchParams; }, [searchParams])
  let products: Product[] = useMemo(() => { return allCategoriesState.products }, [allCategoriesState.products])

  let getProductsStatus = useMemo(() => {
    return allCategoriesState.getProductsStatus;
  }, [allCategoriesState.getProductsStatus]);

  useOutsideClick(categorySelectRef, () => { setVisible(false); })

  useEffect(() => {
    dispatch(getProductStatusSet(RequestStatus.WAITING));
    dispatch(getProductStatusSet(RequestStatus.IN_PROGRESS));
    const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository);

    let categories = searchParamsMemo.getAll('category[]');
    let search = searchParamsMemo.get('search') ?? '';
    let sort = searchParamsMemo.get('sort') ?? 'top-seller';
    dispatch(searchProducts(productRepository, countryCode, search, categories, sort))

  }, [searchParamsMemo, countryCode, dispatch])

  function headerText() {
    let str = '';

    let categories = searchParamsMemo.getAll('category[]');
    let sort = searchParamsMemo.get('sort') ?? '';
    let search = searchParamsMemo.get('search') ?? '';

    if (categories.length === 0 && sort === '' && search === '') {
      return 'Products';
    }

    if (categories.length > 0) {
      if (categories.length === 1) {
        str += categories[1];
      }
      else if (categories.length === 2) {
        str += categories.join(' & ');
      }
      else {
        str += categories.slice(0, categories.length - 2).join(', ');
        str += ' & ' + categories[categories.length - 1];
      }
    }

    if (search !== '') {
      if (str !== '') { str += `on \"${search}\"` }
      else { str += `\"${search}\"` }
    }


    if (sort !== '') {
      if (str === '') {
        return 'Products by ' + capitalCase(sort)
      }
      else {
        str += ` by ${capitalCase(sort)}`
      }
    }

    return str;
  }

  return (
    <div className='max-w-screen-2xl m-auto py-4 space-y-4'>
      <div className='flex'>
        <ProductHeaderText text={headerText()} />
        <div className='flex-none space-x-2'>
          <span>Sort</span>
          <div className='inline-block w-48 rounded border border-tertiary-dark bg-white'>
            <SelectCustom labelText=''
              items={['Sort By:', 'Top Seller', 'Lowest Seller', 'Highest Price', 'Lowest Price']}
              value={sentenceCase(searchParamsMemo.get('sort') ?? 'Sort By:')}
              placeholder='Sort By:'
              visible={visible}
              setVisible={setVisible}
              onSelect={(value: string) => {
                let current: URLSearchParams = new URLSearchParams(Array.from(searchParams.entries()));

                value === 'Sort By:' ? current.delete('sort') :
                  current.set('sort', kebabCase(noCase(value)));
                const query = current.toString() === '' ? '' : `?${current.toString()}`;

                router.push(`${pathName}${query}`)

                // dispatch(sortChanged(value !== 'Sort By:' ? kebabCase(noCase(value)) : ''))
              }}
              valueClassName={(errorText: string) => {
                return `flex rounded overflow-hidden items-center justify-center hover:cursor-pointer p-2 ${errorText !== '' ? 'border-danger' : 'border-tertiary-dark'}`;
              }}
              optionActiveClassName={(current: string, value: string) => {
                return `p-2 cursor-pointer ${current === value && current !== '' ? `bg-primary text-white` : `bg-inherit hover:bg-primary hover:text-white`}`
              }}
              errorText='' />
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
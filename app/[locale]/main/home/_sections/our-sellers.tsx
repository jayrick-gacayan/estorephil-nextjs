'use client';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useEffect, useMemo, useRef, useState } from 'react';
import { AppDispatch, RootState, store } from '@/redux/store';
import { storeContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { getMainStores } from '../_redux/home-thunk';
import Loading from '../../_components/loading';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { MainState } from '../../_redux/main-state';
import { Store } from '@/models/store';
import { TextInputField } from '@/types/props/text-input-field';
import { HomeState } from '../_redux/home-state';
import { storesRequestStatusSet } from '../_redux/home-slice';
import { RequestStatus } from '@/types/enums/request-status';
import { StoreItem } from '../../_components/store-item';
import { StoreRepository } from '@/repositories/store-repository';

export function OurSellers() {
  const [pressDirection, setPressDirection] = useState('');
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const innerSliderContainerRef = useRef<HTMLDivElement>(null);
  const dispatch: AppDispatch = useAppDispatch();
  // const sellers: Seller[] = Sellers.sellers;
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
  const homeState: HomeState = useAppSelector((state: RootState) => { return state.home; });

  let stores: Store[] = useMemo(() => {
    return homeState.stores;
  }, [homeState.stores]);
  let countryPicker: TextInputField<string> = useMemo(() => {
    return mainState.countryPicker;
  }, [mainState.countryPicker]);
  let storesRequestStatus = useMemo(() => {
    return homeState.getMainStoresStatus
  }, [homeState.getMainStoresStatus]);

  useEffect(() => {
    switch (storesRequestStatus) {
      case RequestStatus.NONE:
        dispatch(storesRequestStatusSet(RequestStatus.WAITING));
        break;
      case RequestStatus.WAITING:
        dispatch(storesRequestStatusSet(RequestStatus.IN_PROGRESS));
        break;
      case RequestStatus.IN_PROGRESS:
        const storeRepository: StoreRepository = storeContainer.get<StoreRepository>(TYPES.StoreRepository);
        dispatch(getMainStores(storeRepository, countryPicker.value))
        break;
    }
  }, [storesRequestStatus, dispatch, countryPicker.value]);

  function moveSellersSlider(moveTo: number) {
    if (sliderContainerRef.current) {
      if (innerSliderContainerRef.current) {
        console.log(moveTo)

        let sliderContainerGetBoundRect = sliderContainerRef.current.getBoundingClientRect();
        let innerSliderContainerGetBoundRect = sliderContainerRef.current.getBoundingClientRect();

        console.log('slider width', sliderContainerRef.current.scrollLeft)
        console.log('slider width', sliderContainerRef.current.scrollWidth)
        console.log('slider width', innerSliderContainerRef.current.clientWidth)
        console.log('slider width', innerSliderContainerGetBoundRect)
        console.log('slider width', sliderContainerGetBoundRect)
        if ((sliderContainerRef.current.scrollLeft + moveTo) < 0 ||
          (sliderContainerRef.current.scrollLeft >= (sliderContainerRef.current.scrollWidth - sliderContainerGetBoundRect.width) &&
            (moveTo > 0))) {
          console.log('stop')
          return;
        } else {
          console.log('move')
          sliderContainerRef.current.scrollTo({
            top: 0,
            left: sliderContainerRef.current.scrollLeft + moveTo,
            behavior: 'smooth'
          })
        }
      }
    }
  }
  function checkBoundary() {
    if (sliderContainerRef.current) {
      if (innerSliderContainerRef.current) {
        let sliderContainerGetBoundRect = sliderContainerRef.current.getBoundingClientRect();
        let innerSliderContainerGetBoundRect = sliderContainerRef.current.getBoundingClientRect();

        sliderContainerRef.current.scrollTo({
          top: 0,
          left: sliderContainerRef.current.scrollLeft + 140,
          behavior: 'smooth'
        })
        console.log('top', sliderContainerRef.current.offsetTop);
        console.log('left', sliderContainerGetBoundRect.width);
        console.log('scrollwidth', sliderContainerRef.current.scrollWidth);
        console.log('get bound rec', innerSliderContainerGetBoundRect.width);
        console.log('x', sliderContainerRef.current.scrollLeft)

      }
    }
  }

  return (
    <div className='max-w-screen-2xl m-auto py-4 h-auto'>
      <div className="flex mb-2">
        <div className="flex-1 font-[500] text-[28px] leading-0">Our Sellers</div>
        <div className='w-auto flex-none space-x-1 self-center'>
          <FaChevronLeft size={20} className='inline-block'
            onClick={() => { moveSellersSlider(-140) }}
          />
          <FaChevronRight size={20} className='inline-block'
            onClick={() => { moveSellersSlider(140) }} />
        </div>
      </div>

      <div ref={sliderContainerRef} className='w-full overflow-hidden'>
        <div ref={innerSliderContainerRef} className="flex flex-nowrap gap-3 w-[150%]">
          {
            storesRequestStatus === RequestStatus.SUCCESS ?
              stores.map((store: Store, index: number) => {
                return <StoreItem store={store} key={`stores-main-${store.id}-${index}`} />
              }) :
              storesRequestStatus === RequestStatus.FAILURE ? (<div>NO STORES</div>) : (<Loading />)
          }
        </div>
      </div>
    </div>
  )
}
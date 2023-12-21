'use client';

import { useAppSelector, useAppDispatch } from '@/app/_hooks/redux_hooks';
import { RootState, AppDispatch } from '@/redux/store';
import { ReactNode, useMemo } from 'react';
import { MainState } from '../_redux/main-state';
import { mainModalOpened } from '../_redux/main-slice';
import CartTypeDropdown from './cart-type-dropdown';
import { useSession } from 'next-auth/react';

export default function CartTypeNavbar({ children }: { children: ReactNode }) {
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main });
  const dispatch: AppDispatch = useAppDispatch();
  const { data: sessionData } = useSession()
  const cartType = useMemo(() => {
    const cartType = sessionData?.cart?.cart_type ?? '';
    return cartType === 'shopping_cart' ? 'Shopping Cart' :
      cartType === 'balikbayan_box' ? 'Balikbayan Box' : '';
  }, [mainState.cartType]);

  return !!sessionData?.cart ?
    (
      <CartTypeDropdown>{children}</CartTypeDropdown>
    ) :
    (<>
      <button className='transition-all delay-50 text-white border border-white py-2 px-4 h-full rounded text-xl align-middle hover:border-primary-dark hover:bg-white hover:text-primary-dark'
        onClick={() => { dispatch(mainModalOpened({ open: true, type: 'deliveryAddress' })) }}>
        Create Order
      </button>
      {children}
    </>
    );
}

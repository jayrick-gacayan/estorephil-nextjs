'use client';

import Image from 'next/image';
import { FaHeartCrack, FaRegEye, FaTriangleExclamation } from 'react-icons/fa6';
import Link from 'next-intl/link';
import { AgentFavoriteState } from '../_redux/agent-favorite-state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { ReactEventHandler, useMemo, useState } from 'react';
import { RequestStatus } from '@/types/enums/request-status';
import CirclingLoader from '@/app/[locale]/_components/circling-loader';
import { Product } from '@/models/product';
import { productContainer } from '@/inversify/inversify.config';
import { ProductRepository } from '@/repositories/product-repository';
import { TYPES } from '@/inversify/types';
import { useSession } from 'next-auth/react';
import { deleteProductFromFavorites } from '../_redux/agent-favorite-thunk';
import { useRouter } from 'next-intl/client';

export default function FavoritesTable() {
  const router = useRouter();
  const { data: sessionData } = useSession();
  const dispatch: AppDispatch = useAppDispatch();
  const agentFavoriteState: AgentFavoriteState = useAppSelector((state: RootState) => {
    return state.agentFavorite
  })

  const { data, count, requestStatus } = useMemo(() => {
    return agentFavoriteState.favorites;
  }, [agentFavoriteState.favorites]);

  function FaHeartCrackButton({ id }: { id: string }) {
    const [disabled, setDisabled] = useState(false);

    return (
      <button disabled={disabled}
        className='inline-block p-2 rounded border border-danger text-danger'
        onClick={() => {
          let productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository);
          if (sessionData?.token) {
            dispatch(deleteProductFromFavorites(productRepository, sessionData?.token, id, setDisabled))
          }
        }}>
        <FaHeartCrack />
      </button>

    )
  }

  return (
    <div className="block overflow-auto border-x border-tertiary-dark">
      <table className="min-w-[768px] w-full">
        <thead>
          <tr className="[&>th]:font-normal [&>th]:px-2 [&>th]:py-3 border-y-[.5px] border-tertiary bg-[#F8FAFC]">
            <th className='w-24'>Image</th>
            <th className='text-left'>Name</th>
            <th className='w-48'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            requestStatus === RequestStatus.NONE ||
              requestStatus === RequestStatus.WAITING ||
              requestStatus === RequestStatus.IN_PROGRESS ||
              requestStatus === RequestStatus.FAILURE ?
              (<tr className="[&>td]:p-2 border-b-[.5px] border-b-tertiary-dark odd:bg-inherit even:bg-[#EFF0F0]">
                <td rowSpan={10} colSpan={10}>
                  <div className="flex h-full w-full items-center justify-center">
                    <div>
                      {
                        requestStatus === RequestStatus.FAILURE ? 'No Data' :
                          (<CirclingLoader height={240} width={240} color='#1186FF' />)
                      }
                    </div>
                  </div>
                </td>
              </tr>) :
              data.length === 0 ? (
                (<tr className="[&>td]:p-2 border-b-[.5px] border-b-tertiary-dark odd:bg-inherit even:bg-[#EFF0F0]">
                  <td rowSpan={10} colSpan={10}>
                    <div className="flex h-full w-full items-center justify-center">
                      <div className='space-y-1 text-tertiary-dark'>
                        <FaTriangleExclamation className="w-24 h-24 m-auto block" />
                        <div>NO Data Shown</div>
                      </div>
                    </div>
                  </td>
                </tr>)
              ) :
                data.map((product: Product, index: number) => {
                  return (
                    <tr key={`boxes-courier-${product.id!}`}
                      className="[&>td]:p-2 border-b-[.5px] border-b-tertiary-dark odd:bg-inherit even:bg-[#EFF0F0]">
                      <td className='w-24'>
                        <Image alt={`${product.id}-${index}-${product.name}`}
                          src={`${product.mainImageUrl ?? 'https://www.odnetwork.org/global_graphics/default-store-350x350.jpg`'}`}
                          width={48}
                          height={48}
                          className='rounded-full w-12 h-12 m-auto'
                          onError={(event) => {
                            event.currentTarget.src = 'https://www.odnetwork.org/global_graphics/default-store-350x350.jpg';
                          }} />
                      </td>
                      <td className='text-left'>{product.name}</td>
                      <td className='w-48 text-center'>
                        <div className='w-auto m-auto block space-x-2'>
                          <button className='inline-block p-2 cursor-pointer rounded border border-primary text-primary'
                            onClick={() => {
                              router.push(`/products/${product.id}`);
                            }}>
                            <FaRegEye />
                          </button>
                          <FaHeartCrackButton id={product.id!?.toString()} />
                        </div>
                      </td>
                    </tr>
                  )
                })
          }
        </tbody>
      </table>
    </div >
  )
}


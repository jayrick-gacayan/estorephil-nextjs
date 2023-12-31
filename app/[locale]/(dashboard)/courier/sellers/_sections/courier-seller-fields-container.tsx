'use client';

import { FaCheck, FaRegTrashCan } from 'react-icons/fa6';
import SearchContainer from '../../_components/search-container';
import { ChangeEvent, KeyboardEvent } from 'react';

export default function CourierSellersFieldsContainer() {
  return (
    <div className='block w-full'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex-1 flex items-center gap-2'>
          <SearchContainer value=''
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              return;
            }}
            onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
              return;
            }} />
        </div>
        <div className='flex-none w-auto space-x-2'>
          <span className='p-1.5 rounded border-[.5px] border-secondary inline'>Set Status</span>
          <span className='p-1.5 rounded border-[.5px] border-secondary inline'>
            <FaCheck className='inline-block' />
          </span>
          <span className='p-1.5 rounded border-[.5px] border-secondary inline'>
            <FaRegTrashCan className='inline-block' />
          </span>
        </div>
      </div>
    </div>
  )
}
'use client';

import { ChangeEvent, KeyboardEvent } from 'react';
import SearchContainer from '../../_components/search-container';

export default function OrdersSearchContainer() {
  return (
    <div className="block">
      <div className="ml-auto w-fit block">
        <SearchContainer value=''
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            return;
          }}
          onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
            return;
          }} />
      </div>
    </div>
  )
}
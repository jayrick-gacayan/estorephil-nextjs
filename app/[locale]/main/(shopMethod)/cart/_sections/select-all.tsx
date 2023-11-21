'use client';

import { Checkbox } from "@/app/[locale]/_components/checkbox";

export default function SelectAll() {
  return (
    <div className='block p-4'>
      <Checkbox<boolean> current={false}
        labelText='Select All'
        labelClassname={(value: boolean, current: boolean) => {
          return `underline hover:no-underline hover:text-primary ${value === current ? 'text-primary' : 'text-inherit'}`;
        }}
        value={false}
        onCheckboxChanged={(value: boolean) => {
          return;
        }} />
    </div>
  )
}
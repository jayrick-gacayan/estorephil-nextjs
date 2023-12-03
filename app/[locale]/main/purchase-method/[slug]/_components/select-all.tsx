'use client';

import { Checkbox } from "@/app/[locale]/_components/checkbox";

export default function SelectAll({
  current,
  onCheckboxChanged,
}: {
  current: boolean;
  onCheckboxChanged: (value: boolean) => void;
}) {
  return (
    <div className='block p-4'>
      <Checkbox<boolean> current={current}
        labelText='Select All'
        labelClassname={(value: boolean, current: boolean) => {
          return `underline hover:no-underline hover:text-primary ${value === current ? 'text-primary' : 'text-inherit'}`;
        }}
        value={true}
        onCheckboxChanged={onCheckboxChanged} />
    </div>
  )
}
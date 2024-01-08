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
        checkBoxClassName={(value: boolean, current: boolean) => {
          return `border -leading-1 ${current === value ? 'border-primary text-primary' : 'border-tertiary'} rounded w-6 h-6`;
        }}
        checkClassName={(value: boolean, current: boolean) => {
          return `${current === value ? 'block' : 'hidden'} translate-x-[2px] translate-y-[1px]`;
        }}
        value={true}
        onCheckboxChanged={onCheckboxChanged} />
    </div>
  )
}
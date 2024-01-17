'use client';

import SelectTagCustom from "@/app/[locale]/_components/select-tag-cutsom";
import { ValidationType } from "@/types/enums/validation-type";
import { usePathname, useRouter } from "next-intl/client";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function BoxesFilterFields() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [cargoType, setCargoType] = useState('');
  const [boxType, setBoxType] = useState('');

  useEffect(() => { }, []);

  function selectValueClassname(status: ValidationType) {
    return 'border-tertiary-dark  has-[input:focus]:border-primary';
  }

  function selectCustomOptionsClassName(current: string, value: string) {
    return `${current === value && current !== '' ? `bg-primary text-white` : `bg-inherit hover:bg-primary hover:text-white`}`;
  }

  const onSelectCallback = useCallback((item: string, labelStrSet: string) => {
    const sp = new URLSearchParams(Array.from(searchParams.entries()));

    sp.has('page') && sp.delete('page');

    item === '' ? sp.delete(`${labelStrSet}`) : sp.set(`${labelStrSet}`, item);

    router.push(`${pathName}${sp.toString() === '' ? `` : `?${sp.toString()}`}`);
  }, [searchParams, router, pathName])

  return (
    <div className="block">
      <div className="mr-auto w-fit block space-x-2 clear-both">
        <div className="w-56 inline-block">
          <SelectTagCustom items={['Cargo Type:', 'Air', 'Vessel']}
            onSelect={(item: string) => {
              onSelectCallback(item === 'Cargo Type:' ? '' : item, 'cargoType');
            }}
            value={cargoType}
            placeholder='Cargo Type:'
            optionActiveClassName={selectCustomOptionsClassName}
            valueClassName={selectValueClassname} />
        </div>
        <div className="w-56 inline-block">
          <SelectTagCustom items={['Box Type:', 'Small', 'Medium', 'Large', 'Extra-Large', 'Odd']}
            onSelect={(item: string) => {
              onSelectCallback(item === 'Box Type:' ? '' : item, 'boxType');
            }}
            value={boxType}
            placeholder='Box Type:'
            optionActiveClassName={selectCustomOptionsClassName}
            valueClassName={selectValueClassname} />
        </div>
      </div>
    </div>
  )
}
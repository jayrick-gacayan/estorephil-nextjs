"use client";

import { forwardRef, memo, useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export type SelectProps<T, P> = {
  labelText: string;
  items: T[];
  value: P;
  placeholder: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  onSelect?: (value: T) => void;
  dropdownColor: string;
  hoverColor: string;
  selectedColor: string;
}

export const CustomSelect = forwardRef<HTMLDivElement, SelectProps<any, any>>(
  (
    {
      labelText,
      items,
      value,
      placeholder,
      visible,
      setVisible,
      onSelect,
      dropdownColor,
      hoverColor,
      selectedColor,
    },
    ref
  ) => {
    let selectValue =
      typeof value === "string"
        ? value === ""
          ? placeholder
          : value
        : typeof value === "number"
          ? value
          : value
            ? Object.assign(value, {} as any).name
            : `${placeholder}`;
    return (
      <div ref={ref} className="block space-y-1 w-full">
        {labelText && <div className="block">{labelText}</div>}
        <div className="block relative">
          <div
            className="flex rounded overflow-hidden  items-center justify-center hover:cursor-pointer px-3 py-2"
            onClick={() => {
              if (items.length > 0) {
                setVisible(!visible);
              } else {
                return;
              }
            }}>
            <div
              className={`flex-1 ${selectValue === placeholder
                ? "text-tertiary-dark"
                : "text-inherit"
                }`}>
              {typeof value === "string"
                ? value === ""
                  ? placeholder
                  : value
                : typeof value === "number"
                  ? value
                  : value
                    ? Object.assign(value, {} as any).name
                    : `${placeholder}`}
            </div>
            <div className="w-auto flex-none">
              <HiChevronDown
                className={`transition-all duration-100 w-min  h-min ${visible ? `-rotate-90` : `rotate-0`
                  }`}
              />
            </div>
          </div>
          <div
            className={`overflow-auto rounded border border-tertiary-dark absolute top-[110%] z-50 w-full text-default-dark left-0  ${visible ? "block" : "hidden"
              }   ${dropdownColor}`}>
            {items.map((item: any, index: number) => {
              let itemValue =
                typeof item === "string"
                  ? item
                  : typeof item === "number"
                    ? item
                    : item.name;

              let currentValue =
                typeof value === "string"
                  ? value
                  : typeof value === "number"
                    ? value
                    : value
                      ? Object.assign(value, {} as any).name
                      : ``;
              return (
                <div key={`${index}-select`}
                  className={
                    `px-2 py-1 cursor-pointer ${currentValue === itemValue && currentValue !== '' ? `bg-primary text-white` : `bg-inherit hover:bg-primary hover:text-white`}`}
                  onClick={
                    () => {
                      onSelect && onSelect(item);
                      setVisible(false);
                    }
                  }>
                  {itemValue}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

CustomSelect.displayName = "CustomSelect";

export default memo(CustomSelect);

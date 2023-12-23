"use client";
import React, { ReactNode, useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function CreateTaxRulesDetailsInfo({
  label,
  data,
  isDropdown,
  isDropdownMultiple,
  dropdownLists,
}: {
  label: string | ReactNode;
  data: string | ReactNode;
  isDropdown: boolean | ReactNode;
  isDropdownMultiple: boolean | ReactNode;
  dropdownLists: string[];
}) {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(dropdownLists[0]);
  const options = dropdownLists;
  const multiOptions = dropdownLists;
  const [words, setWords] = useState<string[]>([]);

  const handleRemove = (wordToRemove: string | ReactNode) => {
    setWords(words.filter((word) => word !== wordToRemove));
  };
  return (
    <div className="space-y-2 w-full">
      <div className="font-bold text-md">{label}</div>
      {isDropdown != true ? (
        <input
          className=" outline-cyan-500 outline-1 border w-full h-[2.5rem] border-gray-300 rounded px-3 py-2 text-xs"
          placeholder={`${data}`}></input>
      ) : (
        <div className="relative inline-block text-left w-full ">
          <div
            onClick={() => setVisible(!visible)}
            className=" cursor-pointer h-[40px] inline-flex  justify-between items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:text-gray-500 w-full ">
            {isDropdownMultiple != true ? (
              <div>{selected}</div>
            ) : (
              <div className=" w-full flex gap-2">
                {words.map((word, index) => (
                  <div
                    key={`${word}-${index}`}
                    className="flex bg-white items-center rounded overflow-hidden border"
                    onClick={() => handleRemove(word)}>
                    <div className="p-1 border-r-2">
                      <IoClose />
                    </div>
                    <div className="bg-white py-1 px-5 ">{word}</div>
                  </div>
                ))}
              </div>
            )}
            <IoMdArrowDropdown />
          </div>

          <div
            className={`z-50 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 ${
              visible == true ? "visible" : "hidden"
            }`}>
            {isDropdownMultiple != true ? (
              <>
                {options?.map((value: string, index) => {
                  return (
                    <div
                      key={`${value}-${index}-options`}
                      className="cursor-pointer  px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 bg-white w-full flex justify-between items-center"
                      onClick={() => {
                        setSelected(value);

                        setVisible(false);
                      }}>
                      <div> {value}</div>
                      <div
                        className={`text-lg ${
                          selected == value ? "text-red-500" : "text-green-500"
                        }`}>
                        {selected == value ? (
                          <FaMinusCircle />
                        ) : (
                          <FaPlusCircle />
                        )}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {multiOptions.map((value: string) => {
                  return (
                    <div
                      key={value}
                      className=" cursor-pointer px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 bg-white w-full flex justify-between items-center"
                      onClick={() => {
                        if (words.includes(value)) {
                          handleRemove(value);
                        } else {
                          setWords([...words, value]);
                        }
                      }}>
                      <div> {value}</div>
                      <button
                        key={value}
                        className={`text-lg ${
                          words.includes(value)
                            ? "text-red-500"
                            : "text-green-500"
                        }`}>
                        {words.includes(value) ? (
                          <FaMinusCircle />
                        ) : (
                          <FaPlusCircle />
                        )}
                      </button>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

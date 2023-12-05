import { FaCheck, FaMagnifyingGlass, FaRegTrashCan, } from "react-icons/fa6";

export default function CourierSellersFieldsContainer() {
  return (
    <div className="block w-full">
      <div className="flex w-full items-center justify-between">
        <div className="flex-1 flex items-center gap-2">
          <FaMagnifyingGlass />
          <input type="text"
            className="border-[.5px] border-[#707070] w-96 p-2 rounded" />
        </div>
        <div className="flex-none w-auto space-x-2">
          <span className="p-2 rounded border-[.5px] border-[#707070] inline">Set Status</span>
          <span className="p-2 rounded border-[.5px] border-[#707070] inline">
            <FaCheck className='inline-block' />
          </span>
          <span className="p-2 rounded border-[.5px] border-[#707070] inline">
            <FaRegTrashCan className='inline-block' />
          </span>
        </div>
      </div>

    </div>
  )
}
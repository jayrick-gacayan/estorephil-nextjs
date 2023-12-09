import CustomInput from "@/app/[locale]/_components/custom-input";
import { FaRegTrashCan } from "react-icons/fa6";

export default function LabelTextWithAmountTrash({
  labelText,
}: {
  labelText: string;
}) {
  return (
    <div className="flex items-center w-full gap-4">
      <div className="flex-1">
        <div className="bg-info-light rounded w-full p-2">
          {labelText}
        </div>
      </div>
      <div className="flex-none w-48">
        <div className="flex w-full items-center gap-2">
          <div className="flex-1">
            <CustomInput leftSideContent={
              <div className="font-semibold">
                C&#36;
              </div>
            } />
          </div>
          <div className="flex-none w-auto text-danger rounded border border-danger p-2">
            <FaRegTrashCan className='inline-block' />
          </div>
        </div>


      </div>
    </div>
  )
}
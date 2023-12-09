import { ReactNode } from "react";

export default function CustomInput({
  rightSideContent,
  leftSideContent,
  labelText,
}: {
  rightSideContent?: ReactNode;
  leftSideContent?: ReactNode;
  labelText?: ReactNode;
}) {
  return (
    <div className="block space-y-1" tabIndex={-1}>
      {labelText && labelText}
      <div className="rounded gap-2 border-[.5px] border-[#707070] p-2 flex items-center focus-within:border-primary">
        {leftSideContent && leftSideContent}
        <div className="flex-1">
          <input type="text"
            className="w-full outline-0" />
        </div>
        {rightSideContent && rightSideContent}
      </div>
    </div>
  )

}
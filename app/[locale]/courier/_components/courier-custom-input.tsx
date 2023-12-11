import { ComponentProps, ReactNode } from "react";

export default function CourierInputField({
  rightSideContent,
  leftSideContent,
  labelText,
  inputProps
}: {
  rightSideContent?: ReactNode;
  leftSideContent?: ReactNode;
  labelText?: ReactNode;
  inputProps: ComponentProps<'input'>
}) {
  return (
    <div className="block space-y-1" tabIndex={-1}>
      {labelText && labelText}
      <div className="rounded gap-2 border-[.5px] border-[#707070] p-2 flex items-center focus-within:border-primary">
        {leftSideContent && leftSideContent}
        <div className="flex-1">
          <input className="w-full outline-0" {...inputProps} />
        </div>
        {rightSideContent && rightSideContent}
      </div>
    </div>
  )
}
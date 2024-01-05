import { ComponentProps, ReactNode } from "react";

export default function InputCustom({
  rightSideContent,
  leftSideContent,
  labelText,
  inputProps,
  errorText,
  divClassName,
}: {
  rightSideContent?: ReactNode;
  leftSideContent?: ReactNode;
  labelText?: ReactNode;
  inputProps?: ComponentProps<'input'>
  errorText: string;
  divClassName: string;
}) {
  return (
    <div className="block space-y-1" tabIndex={-1}>
      {labelText && labelText}
      <div className={`${divClassName} overflow-hidden`}>
        {leftSideContent && leftSideContent}
        <div className="flex-1">
          <input {...inputProps}
            className={`w-full outline-0 outline-transparent ${inputProps ? inputProps.className ?? '' : ''}`} />
        </div>
        {rightSideContent && rightSideContent}
      </div>
      {(errorText !== '') && (<div className="text-danger">{errorText}</div>)}
    </div>
  )
}
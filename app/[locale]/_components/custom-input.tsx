import { ComponentProps, ReactNode } from "react";

export default function CustomInput({
  rightSideContent,
  leftSideContent,
  labelText,
  inputProps,
  errorText,
}: {
  rightSideContent?: ReactNode;
  leftSideContent?: ReactNode;
  labelText?: ReactNode;
  inputProps?: ComponentProps<'input'>
  errorText?: string;
}) {
  return (
    <div className="block space-y-1" tabIndex={-1}>
      {labelText && labelText}
      <div className="rounded gap-2 flex items-center focus-within:border-primary">
        {leftSideContent && leftSideContent}
        <div className="flex-1">
          <input {...inputProps}
            className={`w-full outline-0 ${inputProps ? inputProps.className : ''}`} />
        </div>
        {rightSideContent && rightSideContent}
      </div>
      {(errorText && errorText !== '') && (<div className="text-danger">{errorText}</div>)}
    </div>
  )
}
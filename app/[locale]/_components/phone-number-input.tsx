import { ComponentProps } from "react";

export default function PhoneNumberInput({
  placeholder,
  divClassName,
  inputProps,
  errorText
}: {
  placeholder: string;
  divClassName: string;
  inputProps?: ComponentProps<'input'>;
  errorText: string;
}) {
  return (
    <div className="block space-y-1">
      <div className={divClassName}>

        <div className="flex-1">
          <input {...inputProps}
            className={`w-full outline-0 outline-transparent ${inputProps ? inputProps.className ?? '' : ''}`} />
        </div>
      </div>
      {(errorText !== '') && (<div className="text-danger">{errorText}</div>)}
    </div>
  )
}
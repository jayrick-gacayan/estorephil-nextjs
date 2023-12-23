import { ValidationType } from "@/types/enums/validation-type";
import { ComponentProps } from "react";

export default function InputGoogleLikeCustom({
  labelText,
  inputProps,
  errorText,
  labelClassName,
  status,
}: {
  labelText: string;
  inputProps: ComponentProps<'input'>;
  errorText: string;
  labelClassName: (status: ValidationType) => string;
  status: ValidationType;
}) {
  return (
    <div className="bg-white w-full">
      <div className="relative bg-inherit">
        <input {...inputProps} placeholder=''
          className={`peer outline-0 outline-transparent ${inputProps ? inputProps.className ?? '' : ''}`} />
        <label htmlFor={inputProps.id}
          className={labelClassName(status)}>{labelText}</label>
      </div>
      {(errorText !== '') && (<div className="text-danger">{errorText}</div>)}
    </div>
  )
}
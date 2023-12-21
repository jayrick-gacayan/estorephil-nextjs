import { ComponentProps } from "react";

export default function GoogleLikeInputField({
  labelText,
  inputProps,
  errorText,
}: {
  labelText: string;
  inputProps: ComponentProps<'input'>;
  errorText?: string;
}) {
  return (
    <div className="bg-white w-full">
      <div className="relative bg-inherit">
        <input {...inputProps}
          className="peer rounded outline-0 outline-none" placeholder='' />
        <label htmlFor={inputProps.id}
          className="absolute cursor-text left-0 -top-3 text-sm text-secondary bg-inherit mx-2 px-1 
            peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-info peer-focus:text-sm transition-all">{labelText}</label>
      </div>
      {(errorText && errorText !== '') && (<div className="text-danger">{errorText}</div>)}
    </div>
  )
}